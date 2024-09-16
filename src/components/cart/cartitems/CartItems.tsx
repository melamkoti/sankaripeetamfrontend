import { useState, useEffect } from "react";
import EmptyCart from "../emptycart/EmptyCart";

type CartProductType = {
  id: number;
  qty: number;
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
};

function CartItems() {
  const [cartItems, setCartItems] = useState<CartProductType[]>([]);
  const userId = 1;

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch(`http://localhost:3000/cart/${userId}`);
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  const handleQuantityIncrement = async (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, qty: (item.qty ?? 0) + 1 } : item
      )
    );

    const currentItem = cartItems.find((item) => item.id === id);
    if (currentItem) {
      try {
        await fetch(`http://localhost:3000/cart/update/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ qty: (currentItem.qty ?? 0) + 1 }),
        });
      } catch (error) {
        console.error("Error updating cart quantity:", error);
      }
    }
  };

  const handleQuantityDecrement = async (id: number) => {
    setCartItems((prevItems) => {
      const currentItem = prevItems.find((item) => item.id === id);

      if (currentItem && currentItem.qty === 1) {
        try {
          fetch(`http://localhost:3000/cart/delete/${id}`, {
            method: "DELETE",
          });
        } catch (error) {
          console.error("Error deleting cart item:", error);
        }
        return prevItems.filter((item) => item.id !== id);
      }

      if (currentItem && currentItem.qty > 1) {
        try {
          const updatedQty = currentItem.qty - 1;
          fetch(`http://localhost:3000/cart/update/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ qty: updatedQty }),
          });
        } catch (error) {
          console.error("Error updating cart quantity:", error);
        }

        return prevItems.map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        );
      }

      return prevItems;
    });
  };

  return (
    <div className="cart-container p-6 md:p-12 lg:p-20">
      <h2 className="text-4xl font-semibold text-center mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-6 ">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="cart-item p-4 m-2 border  shadow-lg rounded-lg "
            >
              <img
                src={`http://localhost:3000${item.product.image}`}
                alt={item.product.title}
                className="w-60 h-60 object-cover rounded-md  mx-auto"
              />
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h3 className="text-lg font-semibold">
                    {item.product.title}
                  </h3>
                  <p className="text-md">Price: ₹{item.product.price}</p>
                </div>

                <div className="flex items-center">
                  <button
                    className="px-3 py-1 border rounded-l bg-gray-300"
                    onClick={() => handleQuantityDecrement(item.id)}
                    disabled={item.qty === 0}
                  >
                    -
                  </button>
                  <p className="px-4">{item.qty}</p>
                  <button
                    className="px-3 py-1 border rounded-r bg-gray-300"
                    onClick={() => handleQuantityIncrement(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartItems;
