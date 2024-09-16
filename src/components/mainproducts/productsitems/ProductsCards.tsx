// // export default ProductsCards;
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import wishlist from "../../../assets/svg/wishlist.png";
// import wishlistadd from "../../../assets/svg/wishlistadd.png";

// type ProductType = {
//   id: number;
//   image: string;
//   qty: string;
//   title: string;
//   price: string;
// };

// function ProductsCards() {
//   const [products, setProducts] = useState<ProductType[]>([]);
//   const [wishlistStates, setWishlistStates] = useState<boolean[]>([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/product")
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//         setWishlistStates(Array(data.length).fill(false)); // Initialize the wishlist states for each product
//       })
//       .catch((error) => console.error("Error fetching product data: ", error));
//   }, []);

//   function toggleWishlist(index: number) {
//     setWishlistStates((prevStates) => {
//       const newStates = [...prevStates];
//       newStates[index] = !newStates[index];
//       return newStates;
//     });
//     handlePostWishlist(index); // Call handlePostWishlist when toggling wishlist
//   }

//   // Logic to handle posting the wishlist state, e.g., sending it to the backend
//   function handlePostWishlist(index: number) {
//     const userId = 1; // Replace with the actual userId, possibly from authentication context
//     const productId = products[index].id; // Assuming the product has an `id` field

//     fetch("http://localhost:3000/wishlist/add", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         userId,
//         productId,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Wishlist updated successfully", data);
//       })
//       .catch((error) => console.error("Error updating wishlist:", error));
//   }

//   return (
//     <div className="flex justify-center items-center mx-auto">
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4 md:gap-x-8 md:gap-y-8 w-full h-full">
//         {products.map((item, idx) => (
//           <div
//             key={idx}
//             className="w-full relative p-2 flex flex-col justify-around items-center border-2 rounded-xl gap-2"
//           >
//             <motion.img
//               whileHover={{ scale: 1.05 }}
//               src={`http://localhost:3000${item.image}`}
//               alt="img"
//               className="w-4/6 md:w-3/6 lg:w-5/6"
//             />

//             <div className="flex flex-col justify-center items-center gap-1">
//               <p className="text-[#44233B] text-md md:text-lg font-medium">
//                 {item.title}
//               </p>
//               <p className="text-[#DB4242] font-semibold">₹{item.price}</p>
//             </div>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="p-1 lg:p-2 bg-[#7E4555] rounded-lg px-4 text-white"
//             >
//               Add to Cart
//             </motion.button>

//             <motion.button
//               onClick={() => toggleWishlist(idx)}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.94 }}
//               className="absolute top-2 right-2"
//             >
//               <img
//                 src={wishlistStates[idx] ? wishlistadd : wishlist}
//                 alt="wishlist"
//                 className="w-6"
//               />
//             </motion.button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductsCards;
