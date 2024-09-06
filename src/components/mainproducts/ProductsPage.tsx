import ProductsComp from "./productsitems/ProductsComp";
import ProductsMain from "./productsmain/ProductsMain";

function ProductsPage() {
  return (
    <div className="main_head">
      <ProductsMain />
      <ProductsComp />
    </div>
  );
}

export default ProductsPage;
