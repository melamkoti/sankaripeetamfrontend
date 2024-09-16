import { useState, ChangeEvent } from "react";

function ProductsComp() {
  const [sortOption, setSortOption] = useState<string>("Default Sorting");

  const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };
  return (
    <div className="flex p-8 lg:p-12">
      <div className="flex flex-col w-full gap-12 ">
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center">
          <p className="text-xl font-medium">Showing 8 of 20 products </p>

          <select
            value={sortOption}
            onChange={handleSortChange}
            className="border p-2 rounded-lg outline-none font-medium border-slate-400 focus:border-[#7e4555] focus:border-2"
          >
            <option value="Default Sorting">Default Sorting</option>
            <option value="Latest release">Latest release</option>
            <option value="Price: High to Low">Price: High to Low</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Popular Sorting">Popular Sorting</option>
          </select>
        </div>

        <div className="p-2 md:p-10 lg:p-16 flex justify-center items-center"></div>
      </div>
    </div>
  );
}

export default ProductsComp;
