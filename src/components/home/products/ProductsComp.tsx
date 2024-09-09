import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import wishlist from "../../../assets/svg/wishlist.png";
import wishlistadd from "../../../assets/svg/wishlistadd.png";

type ProductType = {
  image: string;
  qty: string;
  title: string;
  price: string;
};

function ProductsComp() {
  const [productState, setProductState] = useState<ProductType[]>([]);
  const [wishlistStates, setWishlistStates] = useState<boolean[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((response) => response.json())
      .then((data) => {
        setProductState(data);
        setWishlistStates(Array(data.length).fill(false));
      })
      .catch((error) => console.error("Error fetching product data: ", error));
  }, []);

  function toggleWishlist(index: number) {
    setWishlistStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  }

  return (
    <div className="flex flex-col justify-center items-center p-6 md:p-12 lg:p-20 gap-12">
      <p className="text-[#44233B] text-4xl font-semibold">Our Products</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-2 w-full h-full">
        {productState.map((item, idx) => (
          <div
            key={idx}
            className="lg:w-5/6 relative p-2 flex flex-col justify-around items-center border-2 rounded-xl gap-2"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={`http://localhost:3000${item.image}`}
              alt="Product Image"
              className="w-5/6"
            />

            <div className="flex flex-col justify-center items-center gap-1">
              <p className="text-[#44233B] text-md md:text-lg font-medium">
                {item.title}
              </p>
              <p className="text-[#DB4242] font-semibold">₹{item.price}</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-[#7E4555] text-xs md:text-md rounded-xl px-2 md:px-4 text-white"
            >
              Add to Cart
            </motion.button>

            <motion.button
              onClick={() => toggleWishlist(idx)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.94 }}
              className="absolute top-2 right-2"
            >
              <img
                src={wishlistStates[idx] ? wishlistadd : wishlist}
                alt="Wishlist Icon"
                className="w-4 md:w-6"
              />
            </motion.button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsComp;
