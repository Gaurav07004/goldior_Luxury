/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCart } from "../../Features/cart/cartSlice";

interface ProductProps {
  price: number;
  imageUrl: string;
  quantity?: string;
  name: string;
  id: string | number;
  discountPercentage: number;
  brand?: string;
}

function ProductCard({
  price,
  imageUrl,
  name,
  id,
  discountPercentage,
  brand = "Brand",
}: ProductProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const [inCart, setInCart] = useState(false);

  // Calculate the discounted price
  const discountedPrice = useMemo(() => {
    return (Number(price) * (1 - discountPercentage / 100)).toFixed(2);
  }, [price, discountPercentage]);

  // Check if item is already in the cart
  useEffect(() => {
    const itemInCart = cart.find((item) => item.id === id);
    setInCart(!!itemInCart);
  }, [cart, id]);

  // Function to add item to the cart
  function handleAddToCart() {
    const newItem = {
      id,
      name,
      quantity: 1,
      price,
      unitPrice: parseFloat(discountedPrice),
      imgUrl: imageUrl,
      totalPrice: parseFloat(discountedPrice),
      discountPercentage,
    };
    dispatch(addItem(newItem));
    setInCart(true);
  }

  return (
    <div
      className="relative w-full sm:w-[18rem] md:w-[18rem] lg:w-[18.8rem] xl:w-[24rem] bg-white rounded-xl duration-500 cursor-pointer border-2 border-gray-200 mb-8 p-6"
      onClick={() => navigate("/product/" + id)}
    >
      {/* Discount Badge */}
      {discountPercentage > 0 && (
        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded mb-4">
          {discountPercentage}% OFF
        </div>
      )}

      {/* Product Image */}
      <div className="flex justify-center py-6 border-b border-gray-200">
        <img
          src={imageUrl}
          alt={name}
          className="h-[15rem] w-[15rem] object-cover rounded-xl"
          onError={(e) =>
            (e.currentTarget.src = "https://via.placeholder.com/400x400")
          }
        />
      </div>

      {/* Product Details */}
      <div className="py-4 border-b border-gray-200">
        <p className="text-base font-bold text-slate-700 truncate capitalize">
          {name}
        </p>
        <p className="mt-1 text-sm text-slate-500">Goldior Luxury</p>
      </div>

      {/* Price & Button */}
      <div className="flex justify-between items-center pt-6">
        <div className="flex items-center">
          <p className="text-lg font-semibold text-slate-700">
            ${discountedPrice}
          </p>
          {discountPercentage > 0 && (
            <del>
              <p className="text-sm text-gray-600 ml-2">${price}</p>
            </del>
          )}
        </div>

        {inCart ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate("/cart");
            }}
            className="bg-green-500 text-white px-4 py-2 rounded text-sm hover:bg-green-600"
          >
            Go to Cart
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
            className="bg-[var(--theme-brown)] hover:bg-[var(--buttonHover)] text-white px-4 py-2 rounded text-sm"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
