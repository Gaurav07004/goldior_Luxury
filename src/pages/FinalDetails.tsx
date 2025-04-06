import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../ui/general/Navbar";

const FinalDetails = () => {
  const { state } = useLocation();
  const { userDetails, cartItems } = state || {};

  const total = cartItems
    ? cartItems.reduce(
        (acc: number, product: { totalPrice: number }) =>
          acc + product.totalPrice,
        0
      )
    : 0;

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-[#fdf6ed] via-white to-[#fbead1] min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-2xl mx-auto bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-300">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-center text-gray-700 mb-6 sm:mb-8 font-serif tracking-wide uppercase">
            Order Summary
          </h1>

          {userDetails ? (
            <>
              {/* User & Address Section */}
              <div className="mb-6 border border-orange-200 p-4 sm:p-5 rounded-lg bg-orange-50/30">
                <div className="font-medium text-gray-700 text-sm sm:text-base">
                  <p>
                    <span className="font-semibold uppercase">Ordered by:</span>{" "}
                    {userDetails?.name || "Ms. Riya Sharma"}
                  </p>
                  <p className="mt-2 text-gray-600 text-xs sm:text-sm">
                    {[
                      userDetails?.addressLine1 || "24, Green Park",
                      userDetails?.addressLine2 || "Near Lotus Hospital",
                      userDetails?.city || "Mumbai",
                      userDetails?.state || "Maharashtra",
                      userDetails?.pinCode || "400001",
                    ].join(", ")}
                  </p>
                </div>
                <div className="text-xs sm:text-sm text-right text-gray-500 mt-3">
                  Date: {new Date().toLocaleDateString()}
                </div>
              </div>

              {/* Cart Items */}
              <div className="divide-y divide-orange-100 border-t border-b border-gray-200 py-4 sm:py-6">
                {cartItems?.map(
                  (
                    product: { name: React.ReactNode; totalPrice: number },
                    index: React.Key
                  ) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 sm:py-3"
                    >
                      <span className="text-sm sm:text-base text-gray-700">
                        {product.name}
                      </span>
                      <span className="text-sm sm:text-base font-medium text-gray-700">
                        ₹ {product.totalPrice.toFixed(2)}
                      </span>
                    </div>
                  )
                )}
                <div className="flex justify-between items-center pt-4 text-base sm:text-lg font-bold text-gray-700">
                  <span>Total</span>
                  <span>₹ {total.toFixed(2)}</span>
                </div>
              </div>

              {/* Payment Button */}
              <button className="w-full uppercase mt-6 sm:mt-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold bg-[var(--theme-brown)] hover:bg-[var(--buttonHover)] text-white rounded-md shadow-md transition duration-300 ease-in-out">
                Proceed to Payment
              </button>
            </>
          ) : (
            <p className="text-center text-lg sm:text-xl text-slate-600">
              No order details found.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default FinalDetails;
