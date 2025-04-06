import { AiOutlineDelete } from "react-icons/ai";
import QuantityAdjuster from "./QuantityAdjuster";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../Features/cart/cartSlice";

export default function CartItem({ product }: { product: any }) {
  const dispatch = useDispatch();

  return (
    <div
      key={product.id}
      className="border-2 rounded-xl p-4 md:p-6 lg:p-8 mb-4 xl:w-[80%] xs:w-[100%] sm:w-[85%] lg:w-[100%]"
    >
      <div className="flex flex-col md:flex-row  sm:flex-row items-center xs:flex-col">
        {/* Product Image */}
        <div className="rounded-xl flex-shrink-0 w-full md:w-auto xs:w-fit">
          <img
            src={product?.imgUrl}
            alt={product?.name}
            className="xl:h-32 xl:w-32 sm:h-32 sm:w-32 xs:w-[15rem] xs:h-[15rem] md:h-36 md:w-36 lg:h-28 lg:w-28 object-cover rounded-lg mix-blend-multiply"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col md:ml-6 md:mt-0 sm:ml-4 xs:mt-4 lg:ml-5 flex-grow">
          {/* Product Name and Delete Button */}
          <div className="flex justify-between items-center">
            <p className="text-base sm:text-lg xs:text-base lg:text-xl font-semibold text-slate-700">
              {product?.name}
            </p>
            <button
              onClick={() => dispatch(deleteItem(product.id))}
              className="bg-red-100 w-[2rem] h-[2rem] rounded-md flex justify-center items-center hover:bg-red-200"
            >
              <AiOutlineDelete size={20} className="text-red-400" />
            </button>
          </div>

          {/* Product Quantity */}
          <p className="text-sm sm:text-base text-slate-700 xs:text-sm mt-1">
            Quantity: {product?.quantity}ML
          </p>

          {/* Price and Quantity Adjuster */}
          <div className="flex flex-col md:flex-row xs:flex-row xs:p-1 justify-between items-center gap-4 mt-6">
            {/* Price Button */}
            <button className="xs:py-[0.35rem] xs:p-4 xs:w-fit w-full md:w-full lg:w-full lg:p-1 xl:w-full border-2 border-green-500 rounded">
              <span className="text-green-500 text-sm sm:text-base lg:text-lg">
                $ {Math.round(product?.unitPrice)}
              </span>
            </button>

            {/* Quantity Adjuster */}
            <div className="w-full md:w-auto sm:w-fit">
              <QuantityAdjuster id={product?.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
