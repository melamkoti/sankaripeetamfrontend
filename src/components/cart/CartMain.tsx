import cartmain from "../../assets/images/cartmain.png"

function CartMain() {
    return(
        <div className="h-[80vh] flex justify-center items-center " style={{backgroundImage: `url(${cartmain})`, backgroundPosition: "center", backgroundSize: "cover"}}>

            <p className="text-8xl text-white font-bold">Cart</p>

        </div>
    )
}

export default CartMain;