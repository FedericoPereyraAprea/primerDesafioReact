import "./ItemDetailContainer.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getItemById } from "../../Api/utils";

function ItemDetailContainer() {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getItemById(id)
        .then((resp) => {
          setIsLoading(false);
          setdata(resp);
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
        });
    }
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <h1 className="espera">Cargando, por favor espere...</h1>
      ) : (
        <ItemDetail {...data} />
      )}
    </div>
  );
}
export default ItemDetailContainer;
