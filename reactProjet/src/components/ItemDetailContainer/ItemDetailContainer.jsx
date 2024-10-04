import React from 'react'
import { useState,useEffect } from "react"
import "./ItemDetailContainer.css"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import {doc, getFirestore, getDoc} from "firebase/firestore"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState("")

    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore ();
        const newDoc = doc(db,"item",id);

        getDoc(newDoc).then((res) =>{
            const data = res.data();
            const newProducts = {id: res.id, ...data};
            setProduct(newProducts);
        });
    },[]);


    return (
        <div className='ItemDetailContainer'>
            {product == undefined ? <Spinner/> : <ItemDetail product={product}/>}
        </div>
    )
}

export default ItemDetailContainer
