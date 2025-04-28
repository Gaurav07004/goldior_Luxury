/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from "./ProductCard";

function ProductGrid({
  products,
  heading,
}: {
  products: any;
  heading: string;
  showFilters?: boolean;
}) {
  return (
    <div className="px-6 sm:px-8 lg:px-[3rem] xl:px-[8rem] py-[4rem]">
      <h1 className="text-[1.75rem] sm:text-[2rem] md:text-[2rem] xl:text-[3rem] font-serif text-brown-700 mb-8 text-left text-slate-700">
        {heading}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {products?.products?.map((item: any, index: number) => (
          <ProductCard
            key={index}
            imageUrl={item.imgUrl}
            name={item.name}
            price={item.capacityInML[0].price}
            quantity={"100ml"}
            id={item._id}
            discountPercentage={item?.discountPercentage}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
