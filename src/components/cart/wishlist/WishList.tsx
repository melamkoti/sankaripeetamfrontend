import { motion } from "framer-motion";
import deleteimg from "../../../assets/svg/delete.png";
import { useState, useEffect } from "react";
type whishlistType = {
  image: string;
  qty: string;
  title: string;
  price: string;
};
function WishListItems() {
  const [wishlistState, setWishlistState] = useState<whishlistType[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/product/wishlist/add")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        return setWishlistState(data);
      });
  }, [wishlistState]);
  return (
    <div className="flex flex-col justify-center items-center p-12 lg:p-24 gap-12">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {wishlistState.map((item, idx) => (
          <div
            key={idx}
            className="flex w-full border border-slate-200 md:gap-4 gap-3 items-center justify-between rounded-md shadow-md relative p-4"
          >
            <div className="w-3/6 ">
              <img
                src={item.image}
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
                  />
                </motion.button>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg text-xs md:text-md p-1 px-2 md:px-2 md:p-2 bg-[#7E4555] text-white"
              >
                Add to Cart
              </motion.button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishListItems;
