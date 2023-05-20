import { useContext, useState } from "react"
import { ItemDetail } from "./ItemDetail"
import { useEffect } from "react"
import {useParams} from "react-router-dom"
import { CartContext } from "../../Context/CartContext"
import Swal from "sweetalert2"
import { db } from "../../firebaseConfig"
import {getDoc, collection, doc} from "firebase/firestore"

export const ItemDetailContaier = ()=> {

    const [product, setProduct] = useState({});

    const {addToCart, getQuantityById} = useContext(CartContext)

    const {id} = useParams()

    const onAdd = (cantidad) => {
        if(cantidad>0){
            let data = {
                ...product,
                quantity: cantidad
            }
            
            addToCart(data)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Producto agregado al carrito',
                showConfirmButton: false,
                timer: 1000
              })
        }
    }

    useEffect(()=> {
        const itemCollection = collection(db, "products");
        const refDoc = doc(itemCollection, id);
        getDoc(refDoc)
            .then((res) => 
                setProduct({
                    ...res.data(),
                    id: res.id,
                })
            )
            .catch((err) => console.log(err));
    },[id])

    let totalQuantity = getQuantityById(product.id);
    

    return(
        <ItemDetail product={product} onAdd={onAdd} totalQuantity={totalQuantity}/>
    )

}