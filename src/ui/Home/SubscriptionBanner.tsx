const SubscriptionBanner = () => {
  return (
    <div className="bg-white px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 xs:pt-0 sm:pt-0 sm:py-12 md:py-16">
      <div className="relative flex flex-col items-center justify-center w-full p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 bg-[#fdf6ed] rounded-bl-[1.5rem] rounded-tr-[1.5rem] rounded-tl-[6rem] rounded-br-[6rem]">
        <h2 className="text-sm xs:text-sm xs:pt-4 sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700 mb-4 text-center">
          Stay Connected with{" "}
          <span className="text-[var(--theme-brown)]">Glodior Luxury</span>
        </h2>
        <p className="text-xs xs:text-xs sm:text-base md:text-lg lg:text-xl xl:text-base xl:w-[30%] text-slate-400 text-center mb-6">
          Receive exclusive offers, first looks at new fragrances, and
          invitations to special events.
        </p>

        <div className="relative flex items-center sm:w-[60%] lg:w-[50%] mb-6">
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-200 w-full rounded-md p-3 pr-20 focus:outline-none placeholder:text-gray-500 placeholder:text-sm text-slate-700"
          />
          <button className="absolute right-0 top-0 h-full bg-[var(--theme-brown)] text-white px-4 sm:px-6 rounded-md rounded-l-none hover:bg-[var(--buttonHover)] transition-all duration-300 ease-in-out">
            Subscribe
          </button>
        </div>

        <div className="absolute -top-[1.5rem] -right-[1.5rem] xs:-top-[0.5rem] xs:-right-[0.5rem] sm:-top-[1.2rem] sm:-right-[1.2rem] p-[2rem] sm:p-[3rem] border-t-[3px] border-r-[3px] border-dotted border-orange-300 rounded-tr-[1.5rem]"></div>
        <div className="absolute -bottom-[1.5rem] -left-[1.5rem] xs:-bottom-[0.5rem] xs:-left-[0.5rem] sm:-bottom-[1.2rem] sm:-left-[1.2rem] p-[2rem] sm:p-[3rem] border-b-[3px] border-l-[3px] border-dotted border-orange-300 rounded-bl-[1.5rem]"></div>
      </div>
    </div>
  );
};

export default SubscriptionBanner;
