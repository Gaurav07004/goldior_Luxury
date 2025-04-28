function OrderSummary() {
  return (
    <div className="bg-slate-400 p-6 rounded-lg shadow-lg max-w-sm">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <ul>
        <li className="flex justify-between py-1">
          <span>Luxurious Elixir</span>
          <span>$250</span>
        </li>
        <li className="flex justify-between py-1">
          <span>The golden legacy</span>
          <span>$150</span>
        </li>
        <li className="flex justify-between py-1">
          <span>Auram aura</span>
          <span>$200</span>
        </li>
        <li className="flex justify-between py-1">
          <span>Delivery fees</span>
          <span>$30</span>
        </li>
        <li className="border-t pt-3 mt-3 flex justify-between">
          <span className="font-semibold">Total</span>
          <span className="font-semibold">$630</span>
        </li>
      </ul>
      <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded transition-colors duration-200 ease-in-out flex justify-center items-center">
        Go to Checkout →
      </button>
    </div>
  );
}

export default OrderSummary;
