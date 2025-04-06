// import perfume from "../../assets/landing-page-perfume.png";
import { handleRemoveFromLocalStorage } from "../../data/wishlist/useRemoveFavItem";
import { AiOutlineDelete } from "react-icons/ai";

function WishlistCard({
  id,
  favorites,
  setFavourites,
  imageUrl,
  quantity,
  name,
}: {
  id: string;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  favorites: any;
  setFavourites: any;
  // price?: string;
  // discountPercentage: string,
  quantity?: string;
  imageUrl?: string;
  name?: string;
}) {
  const handleRemove = () => {
    handleRemoveFromLocalStorage(id);
    const favs = favorites?.filter((item: any) => id !== item._id);
    setFavourites(favs);
  };

  return (
    <div className="relative flex items-center bg-white">
      {/* <RxCross2
        size={18}
        className="absolute top-2 right-2 cursor-pointer text-gray-600"
        onClick={() => handleRemove()}
      />
      <div className="w-1/4 p-2">
        <img
          src={imageUrl}
          alt="Unable to load image"
          className="w-full h-[120px] object-cover rounded-md mix-blend-multiply"
        />
      </div>
      <div className="flex flex-col flex-1 px-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600 text-sm">Quantity: {quantity}</p>
        <button className="bg-[#A0522D] text-white px-4 py-2 mt-2 rounded-md text-sm">
          Add to cart
        </button>
      </div> */}
      <div className="border-2 rounded-xl p-4 mb-4 w-full">
        <div className="flex flex-col sm:flex-row items-start sm:gap-10 md:gap-2">
          {/* Image Container */}
          <div className="rounded-xl w-full sm:w-[35%] md:w-[9rem] xl:w-[40%] h-auto">
            <img
              src={imageUrl}
              alt="Unable to load image"
              className="w-full h-auto object-cover rounded-md mix-blend-multiply"
            />
          </div>
          {/* Text and Buttons */}
          <div className="flex flex-col flex-grow mt-4 md:mt-0 md:ml-2 xl:ml-2 xs:w-full">
            <div className="text-left ">
              <div className="flex justify-between items-center w-full">
                <p className="text-sm sm:text-base font-semibold whitespace-nowrap text-slate-700">
                  {name}
                </p>
                <button
                  onClick={() => handleRemove()}
                  className="bg-red-100 w-[2rem] h-[2rem] rounded-md flex justify-center items-center"
                >
                  <AiOutlineDelete size={20} className="text-red-400" />
                </button>
              </div>
              <p className="text-xs sm:text-sm whitespace-nowrap text-slate-700 mt-1">
                Quantity: {quantity ? parseInt(quantity) : 0} ML
              </p>
            </div>
            <button className="mt-4 md:mt-6 text-xs sm:text-sm w-full bg-[var(--theme-brown)] hover:bg-[var(--buttonHover)] text-white py-2 px-4 rounded transition-colors duration-300 ease-in-out">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Price */}
      {/* <div className="flex flex-col items-end justify-between h-full">
        <span className="text-lg font-semibold text-gray-800">${Math.round(
          Number(price) *
          (1 - Number(discountPercentage) / 100)
        )}</span>
      </div> */}
    </div>
  );
}

export default WishlistCard;
