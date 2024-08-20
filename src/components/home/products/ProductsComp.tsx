import { ProductsData } from "./ProductsData";


function ProductsComp() {
  return (
    <div className="flex flex-col justify-center items-center p-20 gap-12">

        <p className="text-[#44233B] text-4xl font-semibold">Our Products</p>

        <div className="grid grid-cols-4 gap-2 w-full h-full "> 
            {ProductsData.map((item, idx) => {
                return(
                    <div key={idx} className="w-5/6 flex flex-col justify-around items-center border-2 gap-2">

                        <img src={item.img} alt="img" className="w-5/6" />

                        <div className="flex flex-col justify-center items-center gap-1">
                            <p className="text-[#44233B] text-lg font-medium">{item.title}</p>
                            <p className="text-[#DB4242] font-semibold">₹{item.price}</p>
                        </div>

                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default ProductsComp;
