/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from "../ui/general/Navbar.tsx";
// import perfume from '../assets/old-fashion-perfume-black-gold.png';
import { useState, useEffect, useMemo } from "react";
import QuantityAdjuster from "../ui/cart/QuantityAdjuster.tsx";
import RoundButton from "../ui/general/RoundButton.tsx";
import { FcLike } from "react-icons/fc";
import { PiHeart, PiShootingStarThin } from "react-icons/pi";
import Notes from "../Types/Notes.ts";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { BiSolidStar } from "react-icons/bi";
import Reviews from "../ui/single-item/Reviews.tsx";
import { useParams } from "react-router-dom";
import useGetProductById from "../data/products/useGetProductById.ts";
import Spinner from "../ui/general/Spinner.tsx";
import useGetReviewForProduct from "../data/reviews/useGetReviewForProduct.ts";
import { handleSaveToLocalStorage } from "../data/wishlist/useSetFavItems.ts";

import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  // decreaseQuantity,
  getCart,
  // increaseQuantity
} from "../Features/cart/cartSlice.ts";
import { getWishlist } from "../data/wishlist/getWishlist.ts";
import { handleRemoveFromLocalStorage } from "../data/wishlist/useRemoveFavItem.ts";
// import { useWatch } from "react-hook-form";

interface CartItem {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  imgUrl: string;
}

export default function SingleProduct() {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const [perfumeCapacities, setPerfumeCapacities] = useState<any[]>([]);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(
    perfumeCapacities[0]?.quantity || 50
  );
  const { productId } = useParams();

  const [isOpenReviewModal, setIsOpenReviewModal] = useState(false);

  const { product, isGettingProduct } = useGetProductById(productId);
  const {
    reviews,
    isGettingReviews,
    refetch: refetchReviews,
  } = useGetReviewForProduct(productId);

  useEffect(() => {
    if (isOpenReviewModal == false) {
      refetchReviews();
    }
  }, [isOpenReviewModal, refetchReviews]);

  useEffect(() => {
    if (product && product.capacityInML) {
      setPerfumeCapacities(product.capacityInML); // Set the perfumeCapacities when product data is available
      setSelectedQuantity(product.product.capacityInML[0]?.quantity || 0); // Initialize selectedQuantity with the first item
    }
    console.log(
      "produicts: ",
      product,
      "selected: ",
      product?.product?.capacityInML[0].quantity
    );
  }, [product, productId]);

  const totalRating = reviews?.reduce(
    (sum: number, review: any) => sum + review?.rating,
    0
  );
  const averageRating = Number((totalRating / reviews?.length).toFixed(1));
  console.log("reviews: ", reviews);

  return (
    <>
      {isGettingProduct || isGettingReviews || !product ? (
        <Spinner />
      ) : (
        <>
          <Navbar />
          <ProductInfo
            isOpenReviewModal={isOpenReviewModal}
            setIsOpenReviewModal={setIsOpenReviewModal}
            averageRating={averageRating}
            reviews={reviews}
            product={product?.product}
            selectedQuantity={selectedQuantity}
            setSelectedQuantity={setSelectedQuantity}
          />
        </>
      )}
    </>
  );
}

function ProductInfo({
  isOpenReviewModal,
  setIsOpenReviewModal,
  averageRating,
  reviews,
  product,
  selectedQuantity = 50,
  setSelectedQuantity,
}: {
  isOpenReviewModal: boolean;
  setIsOpenReviewModal: any;
  averageRating: number;
  reviews: any;
  product: any;
  selectedQuantity: number;
  setSelectedQuantity: any;
}) {
  const [size, setSize] = useState("sm");
  const [selectedCapacity, setSelectedCapacity] = useState(null);
  const [actualPrice, setActualPrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0);
  const cart = useSelector(getCart);
  const favorites = getWishlist();

  console.log(selectedCapacity);

  const [productExistsInWishList, setProductExistsInWishList] = useState(
    favorites.some((item: any) => item._id === product?._id)
  );

  const currentItemId = product?._id;

  const [inCart, setInCart] = useState(false);
  console.log(inCart);

  useEffect(() => {
    setProductExistsInWishList(
      favorites.some((item: any) => item._id === product?._id)
    );
  }, [product]);

  useEffect(() => {
    const x = product?.capacityInML?.find(
      (capacity: any) => capacity.quantity === selectedQuantity
    );

    setSelectedCapacity(x);
    setActualPrice(x?.price);
    setSalePrice(
      x?.price - (x?.price * (product?.discountPercentage || 0)) / 100
    );
  }, [selectedQuantity, product?.capacityInML, product?.discountPercentage]);

  useEffect(() => {
    const itemInCart = cart.some((item: CartItem) => item.id === currentItemId);
    setInCart(itemInCart);
  }, [cart, currentItemId]);
  const dispatch = useDispatch();

  function handleAddToCart(id: string, name: string, price: number) {
    const newItem = {
      price: null,
      id,
      name,
      quantity: 1,
      unitPrice: price,
      imgUrl: product?.imgUrl,
      totalPrice: price * 1,
      discountPercentage: product?.discountPercentage,
    };
    dispatch(addItem(newItem));
    setInCart(true);
  }

  const checkScreenWidth = () => {
    const width = window.innerWidth;
    if (width >= 1280) {
      setSize("xl"); // Extra large screens (≥ 1280px)
    } else if (width >= 1024) {
      setSize("large"); // Large screens (≥ 1024px)
    } else if (width >= 768) {
      setSize("medium"); // Medium screens (≥ 768px)
    } else {
      setSize("small"); // Small screens (below 768px)
    }
  };
  useEffect(() => {
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  const handleToggleWishlist = () => {
    if (productExistsInWishList) {
      handleRemoveFromLocalStorage(product?._id);
      setProductExistsInWishList(false);
    } else {
      handleSaveToLocalStorage(product);
      setProductExistsInWishList(true);
    }
  };

  return (
    <div>
      <div className="w-full px-4 sm:px-8 md:px-[2rem] lg:px-28 xl:px-32 gap-10 items-start flex flex-col sm:flex-row sm:gap-5 xl:gap-10 pt-[10rem]">
        {/* Perfume Image */}
        <div className="bg-white rounded-xl duration-500 cursor-pointer border-2 border-gray-200 mb-8 p-6">
          <div className="flex justify-between items-center mb-4">
            {product?.discountPercentage > 0 && (
              <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded mb-0">
                {product?.discountPercentage}% OFF
              </div>
            )}
          </div>
          <div className="flex justify-center py-2">
            <img
              src={product?.imgUrl}
              className="h-[22rem] w-[22rem] object-cover rounded-xl"
              onError={(e) =>
                (e.currentTarget.src = "https://via.placeholder.com/400x400")
              }
            />
          </div>
        </div>

        {/* Perfume Info */}
        <div className="h-full w-full sm:w-[65%] p-3 xs:p-0 space-y-4">
          <div>
            <span className="xl:text-[1.25rem] sm:text-xl font-semibold text-gray-800 flex justify-between items-center xl:w-[30%]">
              {product?.name}
              <div className="bg-white p-2 rounded-full ml-auto cursor-pointer border-2 border-gray-300">
                {!productExistsInWishList ? (
                  <PiHeart
                    className="text-2xl text-stone-500"
                    onClick={handleToggleWishlist}
                  />
                ) : (
                  <FcLike className="text-2xl" onClick={handleToggleWishlist} />
                )}
              </div>
            </span>
            <p className="mt-1 text-sm text-slate-500">Goldior Luxury</p>
          </div>

          <div>
            <p className="mb-1 text-sm text-gray-700 font-semibold">
              Description
            </p>
            <p className="text-[0.95rem] text-slate-500 capitalize text-justify">
              {/* {product?.description} */}
              An enchanting blend of rich florals and warm musky undertones,
              creating a timeless allure. Infused with delicate notes of citrus
              and vanilla, it offers a refreshing yet sophisticated aroma.
              Perfect for any occasion, this fragrance leaves a lasting
              impression of elegance and charm.
            </p>
          </div>

          {/* <div className="flex flex-wrap items-center gap-3 lg:gap-6 xs:gap-0 sm:gap-0"> */}
          {/* <TfiLayoutLineSolid className="rotate-90 text-2xl sm:text-3xl text-slate-300" /> */}

          {/* <div className="flex items-center cursor-pointer">
              <BiSolidStar className="xl:text-2xl sm:text-lg text-amber-400" />
              <span className="xl:text-base ml-1 sm:text-xs text-slate-500 xs:text-xs ">
                {averageRating
                  ? `${averageRating}`
                  : "Be the first one to review!"}{" "}
                (110 Review)
              </span>
            </div> */}

          {/* <TfiLayoutLineSolid className="rotate-90 text-2xl sm:text-3xl text-slate-300" />

            <div className="bg-gray-200 px-2 sm:px-3 py-1 sm:py-2 rounded-full flex items-center">
              <PiShootingStarThin className="text-slate-600 xl:text-base xs:text-xs sm:text-xs" />
              <span className="xl:text-base text-slate-600 ml-1 xs:text-xs sm:text-xs">
                New in
              </span>
            </div> */}
          {/* </div> */}

          <div>
            <div className="mb-0 text-sm text-gray-700 font-semibold">
              Select Size
            </div>
            <div className="flex flex-wrap gap-3">
              {product?.capacityInML?.map((item: any) => (
                <SizePics
                  key={item}
                  capacity={item}
                  selectedQuantity={selectedQuantity}
                  setSelectedQuantity={setSelectedQuantity}
                  imgUrl={product?.imgUrl}
                />
              ))}
            </div>
          </div>
          <section className="flex items-center justify-between xl:w-[30%] xs:w-[90%] md:w-[65%] lg:w-[54%] ">
            <div className="flex flex-col">
              <div className="mb-0 text-sm text-gray-700 font-semibold">
                Price
              </div>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-slate-700">
                  ₹ {Math.round(salePrice)}
                </p>
                {product?.discountPercentage > 0 && (
                  <del className="ml-2 text-sm text-gray-600">
                    ₹ {actualPrice}
                  </del>
                )}
              </div>
            </div>
            <QuantityAdjuster id={product?._id} />
          </section>

          <div className="flex flex-wrap space-x-2 mt-5 w-full xs:text-sm xl:text-base">
            <RoundButton
              onClick={() =>
                handleAddToCart(product?._id, product?.name, salePrice)
              }
              text="Add to cart"
              size={size}
            />
          </div>
        </div>
      </div>

      {/* product info  */}
      <div className="w-full px-4 sm:px-12 md:px-16 lg:px-24 xl:px-32 mt-12 flex flex-col gap-6">
        {/* Title Section */}
        <p className="mt-1 text-[2rem] font-medium text-left font-serif text-slate-700 leading-[4.25rem] uppercase">
          Product Detail
        </p>
        {/* Description Section */}
        <div className="py-1">
          <ul className="space-y-4 text-slate-500 text-sm sm:text-base leading-relaxed">
            {product?.description2
              .split(".")
              .filter(Boolean)
              ?.map((sentence: string, index: number) => (
                <li key={index}>{sentence.trim()}.</li>
              ))}
          </ul>
        </div>
      </div>

      {/* key notes  */}
      <KeyNotes notes={product?.keynotes} />
      {/* reviews  */}
      <Reviews
        averageRating={averageRating}
        reviews={reviews}
        isOpenReviewModal={isOpenReviewModal}
        setIsOpenReviewModal={setIsOpenReviewModal}
      />
    </div>
  );
}

function KeyNotes({ notes }: { notes: Notes[] }) {
  return (
    <div className="w-full px-4 sm:px-12 md:px-16 lg:px-24 xl:px-32 mt-12 flex flex-col gap-6">
      {/* Title Section */}
      <p className="mt-1 text-[2rem] font-medium text-left font-serif text-slate-700 leading-[4.25rem] uppercase">
        Key Notes
      </p>

      {/* Notes Grid */}
      <div className="grid grid-cols-3 gap-[13rem]">
        {notes?.map((item: Notes, index) => (
          <div key={index} className="flex flex-col items-center border-solid">
            <img
              className="rounded-xl object-cover h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 xl:h-72 xl:w-72"
              src={item?.image}
              alt="image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function SizePics({
  capacity,
  selectedQuantity,
  setSelectedQuantity,
  imgUrl,
}: {
  capacity: any;
  selectedQuantity: number;
  setSelectedQuantity: any;
  imgUrl: string;
}) {
  return (
    <button
      onClick={() => setSelectedQuantity(capacity?.quantity)}
      aria-label={`Select ${capacity?.quantity} ml`}
      className={`mt-2 flex w-[7rem] flex-col items-center justify-center bg-white rounded-xl duration-500 cursor-pointer border-2 border-gray-400 p-3 ${
        selectedQuantity === capacity?.quantity
          ? "bg-green-50 border border-green-500"
          : ""
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        <img
          src={imgUrl}
          alt="Perfume"
          className="w-[4rem] h-auto object-cover rounded-md"
        />
        <span className="text-gray-600 text-sm font-bold rounded mt-2">
          {capacity?.quantity} ML
        </span>
      </div>
    </button>
  );
}
