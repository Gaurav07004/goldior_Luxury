import Navbar from "../ui/general/Navbar";
import { useNavigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCart, getTotalCartPrice } from "../Features/cart/cartSlice.ts";
import CartItem from "../ui/cart/CartItem.tsx";
import wishimg from "../assets/8.jpg"; // Assume you have an empty cart image

const CartPage = () => {
  const navigate = useNavigate();
  const cart = useSelector(getCart);
  const totalCost = useSelector(getTotalCartPrice);

  const handleCheckoutClick = () => {
    navigate("/personal-details");
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center w-full px-4 sm:px-8 md:px-16 lg:px-8 xl:px-24 py-16 sm:py-20 md:py-24 pt-16 sm:pt-20">
        {cart.length > 0 ? (
          <div className="flex w-full flex-col lg:flex-row gap-6">
            {/* Cart Items Section */}
            <div className="flex flex-col items-center justify-start p-4 sm:p-6 w-full lg:w-1/2 bg-white rounded-lg shadow-sm">
              {cart.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </div>

            {/* Order Summary Section */}
            <div className="flex flex-col justify-start p-4 sm:p-6 w-full lg:w-1/2 bg-white rounded-lg shadow-sm">
              <div className="w-full max-w-full md:max-w-md border-2 rounded-xl p-6 sm:p-8">
                <h2 className="text-lg sm:text-xl font-semibold mb-4 text-slate-700 uppercase">
                  Order Summary
                </h2>
                <ul className="space-y-3">
                  {cart.map((product) => (
                    <li
                      key={product.id}
                      className="flex justify-between text-gray-700"
                    >
                      <span className="flex-1 text-left text-sm sm:text-base">
                        {product.name}
                      </span>
                      <span className="font-semibold text-sm sm:text-base">
                        $
                        {product.totalPrice
                          ? product.totalPrice.toFixed(2)
                          : "0.00"}
                      </span>
                    </li>
                  ))}
                  <li className="border-t pt-4 mt-4 flex justify-between font-semibold text-slate-700">
                    <span className="uppercase text-sm sm:text-base">
                      Total
                    </span>
                    <span className="text-sm sm:text-base">
                      ${totalCost ? totalCost.toFixed(2) : "0.00"}
                    </span>
                  </li>
                </ul>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckoutClick}
                  className="mt-6 w-full bg-[var(--theme-brown)] hover:bg-[var(--buttonHover)] text-white font-semibold text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-300 ease-in-out"
                >
                  Go to Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center px-4 sm:px-8">
            {/* Empty Cart Image */}
            <img
              src={wishimg}
              alt="Empty Cart"
              className="w-[200px] sm:w-[250px] md:w-[300px] xl:w-[300px] h-auto object-cover mix-blend-multiply"
            />

            {/* Empty Cart Title */}
            <p className="text-2xl sm:text-3xl text-slate-700 font-bold text-center">
              Your Cart is Empty!
            </p>

            {/* Additional Text */}
            <p className="text-sm sm:text-base text-slate-500 text-center mt-4">
              It seems you haven't added anything to your cart yet. Start
              shopping now and add some exciting products to your cart!
            </p>

            {/* Shop Now Button */}
            <NavLink
              to="/Our-Luxury-Collection"
              className="mt-8 bg-[var(--theme-brown)] text-white text-sm sm:text-base font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 hover:bg-[var(--buttonHover)]"
            >
              Shop Now
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
