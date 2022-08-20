import "./ItemDetailContainer.css";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "productos", id);
    getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
  }, [id]);

  return <ItemDetail item={data} />;
}
export default ItemDetailContainer;
