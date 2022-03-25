import axios from "axios";
import { useEffect, useState } from "react";

function ProductData() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const getRequest = await axios.get("/api/products");
    setData(getRequest.data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
}

const useProductData = () => ProductData();

export { useProductData };
