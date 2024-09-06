import { ProductsData } from "./ProductsData";
import { motion } from "framer-motion";
import { useState } from "react";
import wishlist from "../../../assets/svg/wishlist.png";
import wishlistadd from "../../../assets/svg/wishlistadd.png";

function ProductsCards() {
    const [wishlistStates, setWishlistStates] = useState(
        Array(ProductsData.length).fill(false)
      );

    function toggleWishlist(index) {
        setWishlistStates((prevStates) => {
          const newStates = [...prevStates];
          newStates[index] = !newStates[index];
          return newStates;
        });
      }
    return(
        <div className="flex justify-center items-center mx-auto ">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4 md:gap-x-8 md:gap-y-8 w-full h-full ">
        {ProductsData.map((item, idx) => {
          return (
            <div
              key={idx}
              className="w-full relative p-2 flex flex-col justify-around items-center border-2 rounded-xl gap-2"
            >
              <motion.img whileHover={{scale: 1.05}} src={item.img} alt="img" className="w-4/6 md:w-3/6 lg:w-5/6" />

              <div className="flex flex-col justify-center items-center gap-1">
                <p className="text-[#44233B] text-md md:text-lg font-medium">
                  {item.title}
                </p>
                <p className="text-[#DB4242] font-semibold">₹{item.price}</p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-1 lg:p-2 bg-[#7E4555] rounded-lg px-4 text-white"
              >
                Add to Cart
              </motion.button>

              <motion.button
                onClick={() => toggleWishlist(idx)}
                whileHover={{ scale: 1.10 }}
                whileTap={{ scale: 0.94 }}
                className="absolute top-2 right-2"
              >
                
                <img
                  src={wishlistStates[idx] ? wishlistadd : wishlist}
                  alt=""
                  className="w-6  "
                />
              </motion.button>
            </div>
          );
        })}
      </div>

        </div>
    )
}

export default ProductsCards;