import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
  getCurrentQuantityById,
} from "../../Features/cart/cartSlice";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

export default function QuantityAdjuster({ id }: { id: string }) {
  const dispatch = useDispatch();

  // Retrieve the current quantity for the given product ID
  const quantity = useSelector((state: { cart: any }) =>
    getCurrentQuantityById(id)(state)
  );

  // Handle decreasing the quantity
  const onClickMinus = () => {
    if (quantity <= 1) {
      dispatch(deleteItem(id));
    } else {
      dispatch(decreaseQuantity(id));
    }
  };

  // Handle increasing the quantity
  const onClickPlus = () => {
    if (quantity < 10) {
      dispatch(increaseQuantity(id));
    } else {
      alert("You cannot add more than 10 items of this product.");
    }
  };

  return (
    <div className="flex items-center justify-between w-[8rem] border rounded-md px-2 py-1 bg-gray-200">
      <button
        onClick={onClickMinus}
        disabled={quantity <= 1}
        className={`text-3xl transition-colors ${
          quantity > 1
            ? "text-gray-500 hover:text-gray-800"
            : "text-gray-300 cursor-not-allowed"
        }`}
      >
        <CiCircleMinus />
      </button>

      <span className="text-lg font-medium text-gray-800">{quantity}</span>

      <button
        onClick={onClickPlus}
        disabled={quantity >= 10}
        className={`text-3xl transition-colors ${
          quantity < 10
            ? "text-gray-500 hover:text-gray-800"
            : "text-gray-300 cursor-not-allowed"
        }`}
      >
        <CiCirclePlus />
      </button>
    </div>
  );
}
