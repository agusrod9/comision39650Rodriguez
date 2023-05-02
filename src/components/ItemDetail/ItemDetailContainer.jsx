import { useState } from "react"
import { products } from "../../productsMock"
import { ItemDetail } from "./ItemDetail"
import { useEffect } from "react"
import {useParams} from "react-router-dom"

export const ItemDetailContaier = ()=> {

    const [product, setProduct] = useState({});

    const {id} = useParams()

    useEffect(()=> {
        let encontrado = products.find(prod => prod.id === +id);
        setProduct(encontrado);
    },[id])


    console.log(product);

    return(
        <ItemDetail product={product}/>
    )

}