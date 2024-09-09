
import { useState } from "react";
import { ProductsData } from "../../home/products/ProductsData";
import { motion } from "framer-motion";
import deleteimg from "../../../assets/svg/delete.png";

function WishListItems() {
  const [cartItems, setCartItems] = useState(
    ProductsData.map((item) => ({ ...item, quantity: 1 }))
  );

//   const handleQuantityIncrement = (id) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const handleQuantityDecrement = (id) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };

  // Handle deleting an item from the cart
  const handleDeleteCartItem = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.id !== id)
    );
  };

  return (
    <div className="flex flex-col justify-center items-center p-12 lg:p-24 gap-12">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {cartItems.map((item, idx) => (
          <div
            key={idx}
            className="flex w-full border border-slate-200 md:gap-4 gap-3 items-center justify-between rounded-md shadow-md relative p-4"
          >
              <div className="w-3/6 ">
                <img
                  src={item.img}
                  alt="addeditem"
                  className="rounded-lg w-full "
                />
              </div>
              
            

            <div className="flex flex-col justify-center gap-2 md:gap-4 items-start lg:items-center w-3/6">

            <p className="md:text-lg lg:text-2xl font-semibold text-md">
                  {item.title}
                </p>
              <p className="text-sm lg:text-lg">MRP: {item.price}/-</p>

              <div className="absolute top-2 right-2">
                <motion.button
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <img
                    src={deleteimg}
                    alt="delete"
                    className="w-6 flex items-center cursor-pointer"
                    onClick={() => handleDeleteCartItem(item.id)}
                  />
                </motion.button>
              </div>

              <motion.button whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}  className="rounded-lg text-xs md:text-md p-1 px-2 md:px-2 md:p-2 bg-[#7E4555] text-white">Add to Cart</motion.button>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
}

export default WishListItems;