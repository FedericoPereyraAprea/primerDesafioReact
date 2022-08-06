import "./ItemDetailContainer.css"
import Data from '../Data/Data';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer() {
    const[data, setdata]=useState([]);
    const { id } = useParams();
    const getFetch = new Promise((res,rej)=>{
        let condition = true
        if(condition){
            setTimeout(() => {
                res(Data)
            }, 2000);
        }
        else{
            rej(console.log("No hay productos"))
        }
    })
    useEffect(() => {
        getFetch
        .then((resp) => setdata(resp))
        .catch(err => console.log(err))
      }, [id]);

    return (
        <ItemDetail {...data}/>   
    );
}
export default ItemDetailContainer;