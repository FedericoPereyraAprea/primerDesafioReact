import React from 'react';
import { useEffect, useState } from 'react';
import Data from '../Data/Data';
import ItemList from '../ItemList/ItemList';

function Container() {
    const[data, setdata]=useState([]);
    const getFetch= new Promise((res,rej)=>{
        let condition=true
        if(condition){
            setTimeout(() => {
                res(Data)
            }, 2000);
        }
        else{
            rej(console.log("No hay productos"))
        }
    })
    useEffect(()=>{
        getFetch
        .then((resp)=>setdata(resp))
        .catch(err=>console.log(err))
      },[]);

    return (
        <ItemList productos={Data}/>   
    );
}
export default Container;