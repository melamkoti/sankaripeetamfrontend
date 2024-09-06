import cart from "../../../assets/svg/cart.svg";
import { motion } from "framer-motion";

function EmptyCart() {
    return(
        <div className="flex flex-col justify-center items-start gap-6 h-[60vh] p-8 md:p-16 lg:p-24">

            <div className="flex items-center gap-4">
                <img src={cart} alt="cart" className="w-6 md:w-8" />
                <p className="text-lg md:text-2xl lg:text-3xl font-medium">Your Cart is Currently Empty</p>
            </div>
            <hr className="border-black border-t-4 w-full" />


            <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className="mt-8 p-2 px-6 text-white rounded-2xl text-lg bg-[#7E4555]">Return to shop</motion.button>

        </div>
    )
}

export default EmptyCart;