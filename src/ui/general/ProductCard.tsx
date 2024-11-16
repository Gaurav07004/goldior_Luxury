import { useNavigate } from "react-router-dom";
import "./productcard.css";

function ProductCard({
  price,
  imageUrl,
  quantity,
  name,
  id,
  discountPercentage
}: {
  price?: string;
  quantity?: string;
  imageUrl?: string;
  name?: string;
  id: string;
  discountPercentage: number
}) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/product/" + id)}
      className="bg-gray-200 rounded-lg p-4 shadow-md h-full w-30 flex flex-col items-center px-14 product-card"
    >
      <div className="overflow-hidden rounded-lg mb-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-contain product-image"
        />
      </div>

      <h2 className="text-xl font-bold mb-2 text-center">{name}</h2>

      <div className="flex justify-between w-full text-lg font-semibold mb-2">
        <span>
          Price: ${Math.round(Number(price) * (1 - discountPercentage / 100))}
        </span>

        <span>Quantity: {quantity}</span>
      </div>
    </button>
  );
}

export default ProductCard;
