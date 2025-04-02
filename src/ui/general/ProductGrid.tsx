/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ProductCard from "./ProductCard";
import { IoIosArrowUp } from "react-icons/io";

/* eslint-disable @typescript-eslint/no-explicit-any */
function ProductGrid({
  products,
  heading,
  showFilters = false,
}: {
  products: { products: any[] };
  heading: string;
  showFilters?: boolean;
}) {
  const [selectedGender, setSelectedGender] = useState("Gender");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Price: Low to High");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSortSelection = (sortOption: string) => {
    setSelectedSort(sortOption);
    setIsOpen(false); // Close dropdown after selection
  };

  const buttonBaseClass =
    "py-2 px-4 text-[0.8rem] rounded-md border transition-all font-medium";
  const activeClass =
    "bg-[var(--theme-brown)] text-white border-[var(--theme-brown)]";
  const inactiveClass =
    "bg-gray-100 text-gray-700 border-gray-400 hover:bg-gray-200";

  return (
    <div className="px-8 xs:px-4 sm:px-8 lg:px-12 xl:px-32 py-16 pt-[8rem]">
      <p className="mt-1 text-[2.5rem] my-4 font-medium text-center font-serif text-slate-700 leading-[4.25rem]">
        {heading}
      </p>

      {showFilters && (
        <div>
          <hr className="mb-4" />
          <div className="flex flex-col xs:flex-col sm:flex-row lg:flex-row items-start justify-between gap-6 lg:gap-10 w-full">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:flex-row lg:items-center">
              <span className="text-sm text-gray-800">Filter</span>
              <div className="flex gap-2">
                {["Men", "Women", "Others", "Gifting"].map((gender) => (
                  <button
                    aria-label={`Filter by ${gender}`}
                    key={gender}
                    className={`${buttonBaseClass} ${
                      selectedGender === gender ? activeClass : inactiveClass
                    }`}
                    onClick={() => setSelectedGender(gender)}
                  >
                    {gender}
                  </button>
                ))}
                {selectedGender !== "Gender" && (
                  <button
                    className={`py-2 px-4 text-[0.8rem] rounded-md border transition-all font-medium 
                  bg-red-500 text-white border-red-500 hover:bg-red-600`}
                    onClick={() => setSelectedGender("Gender")}
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
            <div className="w-fit flex justify-between items-center gap-4">
              <span className="text-sm text-gray-800 sm:w-[10%] sm:hidden">
                Sort By
              </span>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="py-2 px-4 text-[0.8rem] rounded-lg border border-gray-400 bg-gray-100 text-gray-700 font-medium shadow-sm transition-all flex items-center"
                >
                  {selectedSort}
                  <IoIosArrowUp
                    className={`ml-2 transform text-[0.875rem] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="absolute mt-2 w-[10rem] rounded-lg border border-gray-400 bg-white shadow-lg z-10">
                    <ul className="py-2 text-[0.8rem]">
                      {["Price: Low to High", "Price: High to Low"].map(
                        (option) => (
                          <li
                            key={option}
                            onClick={() => handleSortSelection(option)}
                            className={`px-4 py-2 cursor-pointer hover:bg-[var(--buttonHover)] hover:text-white mt-2 ${
                              selectedSort === option
                                ? "bg-[var(--theme-brown)] text-white"
                                : ""
                            }`}
                          >
                            {option}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-14">
          {products?.products?.map((item, index) => (
            <ProductCard
              key={index}
              imageUrl={item.imgUrl}
              name={item.name}
              price={item.capacityInML[0].price}
              quantity="100ml"
              id={item._id}
              discountPercentage={item?.discountPercentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;
