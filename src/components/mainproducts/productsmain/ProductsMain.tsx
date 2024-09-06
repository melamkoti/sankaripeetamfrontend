import productsmain from "../../../assets/images/productsmain.jpg";

function ProductsMain() {
  return (
    <div
      className="h-[60vh] md:h-[100vh] flex justify-center items-center "
      style={{
        backgroundImage: `url(${productsmain})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <p className="text-6xl font-bold text-white">Products</p>
    </div>
  );
}

export default ProductsMain;