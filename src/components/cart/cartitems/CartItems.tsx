import { useState } from 'react';
import { ProductsData } from "../../home/products/ProductsData";
import { motion } from "framer-motion";
import quantityDecrement from "../../../assets/svg/quantityDecrement.png";
import quantityIncrement from "../../../assets/svg/quantityIncrement.png";
import deleteimg from "../../../assets/svg/delete.png";

function CartItems() {
  const [cartItems, setCartItems] = useState(
    ProductsData.map((item) => ({ ...item, quantity: 1 }))
  );

  const handleQuantityIncrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleQuantityDecrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Handle deleting an item from the cart
  const handleDeleteCartItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem.id !== id));
  };

  return (
    <div className="flex flex-col justify-center items-center p-8 md:p-16 lg:p-24 gap-12">


      <div className="w-full flex flex-col gap-4">
        {cartItems.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row w-full p-2  border-slate-200 h-full md:gap-6 gap-3 items-center justify-between rounded-md shadow-md"
          >
            <div className="flex items-center justify-start w-full md:w-2/6 h-full md:gap-4">
              <div className="w-1/3 md:w-2/4 lg:w-1/4 h-full">
                <img
                  src={item.img}
                  alt="addeditem"
                  className="rounded-lg w-full "
                />
              </div>
              <div className="flex md:w-3/6 items-start justify-start">
                <p className="text-lg lg:text-2xl font-semibold text-md">{item.title}</p>
              </div>
            </div>
  
            <div className="flex flex-col w-full md:w-3/6 lg:w-2/6  items-center justify-center">
              <div className="flex justify-between gap-8 items-center w-full">
                <div className="flex  justify-around lg:justify-between items-center w-full lg:w-3/5">
                  <div className="flex justify-center border border-slate-500 px-2 rounded-full shadow-md">
                    <div className="flex flex-col items-center justify-center">
                      <img
                        src={quantityDecrement}
                        alt="decrement"
                        className="w-4 cursor-pointer"
                        onClick={() => handleQuantityDecrement(item.id)}
                      />
                    </div>
                    <div className="flex justify-center items-center">
                      <input
                        type="number"
                        value={item.quantity}  // Using item.quantity instead of item.qty
                        className="focus:outline-none appearance-none text-center ml-4 w-8 lg:w-12"
                        readOnly
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <img
                        src={quantityIncrement}
                        alt="increment"
                        className="w-4 cursor-pointer"
                        onClick={() => handleQuantityIncrement(item.id)}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-md lg:text-lg">MRP: {item.price}/-</p>
                  </div>
                </div>

                <div>
                  <motion.button
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 1.3 }}
                  >
                    <img
                      src={deleteimg}
                      alt="delete"
                      className="w-8 flex items-center cursor-pointer"
                      onClick={() => handleDeleteCartItem(item.id)}
                    />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='flex w-full '>
        <input placeholder='Apply Coupon Code' type='text' className='w-full outline-none border-2 focus:border-[#FFA12B] border-slate-300 p-2 rounded-l-lg'  />
        <button type='button' className='p-3 text-lg px-4 border-y-2 border-r-2 font-semibold border border-slate-300 rounded-r-lg'>Apply</button>
      </div>

      <div className='w-full flex flex-col gap-3'>
        <div className='flex w-full justify-between items-center'>
            <p className='text-2xl font-semibold'>SubTotal</p>
            <p className='text-lg font-medium'>₹ 999.00 </p>

        </div>
        <div className='flex w-full justify-between items-center'>
            <p className='text-2xl font-semibold'>Discount</p>
            <p className='text-lg font-medium'>- ₹100.00 </p>

        </div>
        <div className='flex w-full justify-between items-center'>
            <p className='text-2xl font-semibold'>Tax</p>
            <p className='text-lg font-medium'>₹ 50.00 </p>

        </div>
        <div className='flex w-full justify-between items-center mt-8'>
            <p className='text-2xl font-semibold'>Total</p>
            <p className='text-lg font-medium'>₹ 849.00 </p>

        </div>
      </div>

      <div className='w-full flex flex-col gap-2'>
        <button className='rounded-lg p-3 w-full bg-[#7E4555] text-white'>Proceed to checkout</button>
        <button className='p-3 rounded-lg border-slate-300 border-2 w-full'>Continue Shopping</button>
      </div>


    </div>
  );
}

export default CartItems;