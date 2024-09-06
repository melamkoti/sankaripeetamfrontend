import CartItems from "./cartitems/CartItems";
import CartMain from "./CartMain";
import EmptyCart from "./emptycart/EmptyCart";
import WishListItems from "./wishlist/WishList";

function CartPage() {
  return (
    <div>
      <CartMain />
      <EmptyCart />
      <CartItems />
      <WishListItems />
    </div>
  );
}

export default CartPage;
