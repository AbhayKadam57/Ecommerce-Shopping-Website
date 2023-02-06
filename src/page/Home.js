import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { AddProduct } from "../store/ApiCalls";
import Navbar from "../components/Navbar";

const Home = () => {
  // const [products, setProducts] = useState([]);

  const { product, isLoading } = useSelector((state) => state.product);

  console.log(isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    AddProduct(dispatch);
  }, [dispatch]);

  return (
    <div className="home">
      <Navbar />
      <h1>Welcome to the ShopMe store</h1>
      <div className="products">
        {isLoading === true ? (
          <h2>Loading...</h2>
        ) : (
          product?.map((item) => <Product key={item.id} product={item} />)
        )}
      </div>
    </div>
  );
};

export default Home;
