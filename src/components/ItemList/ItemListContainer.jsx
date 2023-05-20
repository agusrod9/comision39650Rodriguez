import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import styles from "./ItemList.module.css"
import { db } from "../../firebaseConfig";
import {getDocs, collection, query, where} from "firebase/firestore"


const ItemListContainer = () => {

  const [items, setItems] = useState([]);

  const {categoryName} = useParams();

  useEffect(() => {

    let queryProds;
    const itemCollection = collection( db, "products" );

    if(categoryName){
      const filteredItemCollection = query(itemCollection, where("cat", "==", categoryName));
      queryProds = filteredItemCollection;
    }else{
      queryProds = itemCollection;
    }

    getDocs(queryProds)
      .then((res) => {
        const products = res.docs.map( product => {
          return {
            ...product.data(),
            id: product.id
          }
        })
        setItems(products);
      }) 
      .catch((err) => console.log(err));

  }, [categoryName]);

  

  return (
    <div>

      {items.length === 0 && (
        <div className={styles.cargando}>
          <img src="https://cdn.dribbble.com/users/778626/screenshots/4339853/car-middle.gif"></img>
        </div> 
      )}

      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;