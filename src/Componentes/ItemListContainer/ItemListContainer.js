import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemsByCategory } from "../../Api/utils";
import ItemList from "../ItemList/ItemList";

function Container() {
  const [data, setdata] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    getItemsByCategory(category)
      .then((resp) => setdata(resp))
      .catch((err) => console.log(err));
  }, [category]);

  return <ItemList producto={data} />;
}

export default Container;
