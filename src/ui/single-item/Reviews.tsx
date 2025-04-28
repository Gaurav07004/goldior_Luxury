import { useEffect, useState } from "react";
import StarRating from "../general/StarRating";
import ProfileIcon from "../user/ProfileIcon";
import Footer from "../general/Footer";
import compressImage from "../../utils/compressImage";
import useAddReview from "../../data/reviews/useAddReview";
import { useNavigate, useParams } from "react-router-dom";
import DynamicStarRating from "../general/DynamicStar";

export default function Reviews({
  reviews,
  averageRating,
  isOpenReviewModal,
  setIsOpenReviewModal,
}: {
  reviews: any;
  averageRating: number;
  isOpenReviewModal: boolean;
  setIsOpenReviewModal: any;
}) {
  const totalReviews = reviews.length;
  const recommendedReviews = reviews.filter(
    (review: any) => review.isRecommended === true
  ).length;

  // Calculate the percentage
  const recommendationPercentage = Math.round(
    (recommendedReviews / totalReviews) * 100
  );

  // Calculate counts for each star (1 to 5)
  const starCounts = [1, 2, 3, 4, 5].reduce((acc, star) => {
    acc[star] = reviews.filter(
      (review: any) => Math.round(review.rating) === star
    ).length;
    return acc;
  }, {} as Record<number, number>); // Initial accumulator as an object {1: 0, 2: 0, ...}

  return (
    <>
      <div className="w-full px-2 sm:px-16 md:px-[2rem] lg:px-[2rem] gap-10 flex-col mt-0 md:mt-8 py-4">
        {reviews.length > 0 && (
          <>
            <p className="mt-1 text-[2.5rem] font-medium text-center font-serif text-slate-700 leading-[4.25rem]">
              Ratings & Reviews
            </p>
            <RatingSummary
              reviews={reviews}
              averageRating={averageRating}
              starCounts={starCounts}
              recommendationPercentage={recommendationPercentage}
              isOpenReviewModal={isOpenReviewModal}
              setIsOpenReviewModal={setIsOpenReviewModal}
            />
          </>
        )}
        <ReviewList reviews={reviews} />
      </div>
      <Footer />
    </>
  );
}

function ReviewList({ reviews }: { reviews: any }) {
  return (
    <div className="w-full">
      {reviews.map((review: any, index: number) => (
        <ReviewListItem review={review} key={index} />
      ))}
    </div>
  );
}

function ReviewListItem({ review }: { review: any }) {
  const [readMore, setReadMore] = useState<boolean>(false);

  console.log("review: ", review);

  function handleToggleReadMore() {
    setReadMore(!readMore);
  }
  return (
    <div className="flex gap-6 items-start mb-8 mt-12">
      <ProfileIcon username={review?.user_id?.username} />
      <div className="w-full">
        <div className="flex w-full items-center justify-between mb-3">
          <div>
            <p className="text-lg font-semibold text-gray-800">
              {review?.user_id?.username}
            </p>
            <StarRating
              rating={review?.rating}
              size="normal"
              fillColor="var(--rating-yellow)"
            />
          </div>
        </div>

        <p className="text-justify text-gray-800 mt-2">
          {readMore || review.text.length <= 500
            ? review.text
            : `${review.text.slice(0, 500)}...`}
        </p>

        {review.text.length > 500 && (
          <button
            className="text-[var(--theme-brown)] font-semibold mt-2 hover:text-[var(--theme-dark-brown)] transition-all duration-300"
            onClick={handleToggleReadMore}
          >
            {readMore ? "Read Less" : "Read More"}
          </button>
        )}

        {review.img_url && (
          <div className="mt-4 max-w-full overflow-hidden rounded-lg">
            <img
              src={review.img_url}
              height={200}
              width={300}
              alt="review image"
              className="w-[30%] h-auto object-cover rounded-lg"
            />
          </div>
        )}

        <div className="mt-4">
          <span className="font-semibold text-gray-500">
            Posted on{" "}
            {new Date(review.createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </div>
  );
}

function RatingSummary({
  // recommendationPercentage,
  averageRating,
  starCounts,
  reviews,
  isOpenReviewModal,
  setIsOpenReviewModal,
}: {
  recommendationPercentage: number;
  averageRating: number;
  starCounts: Record<number, number>;
  reviews: any;
  isOpenReviewModal: boolean;
  setIsOpenReviewModal: any;
}) {
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [recommend, setRecommend] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { productId } = useParams();
  const userEmail = localStorage.getItem("user_email_goldior_luxury");

  const { isAddingReview, addReview } = useAddReview();

  const navigate = useNavigate();
  console.log(isSubmitting);

  useEffect(() => {
    console.log("data url: ", imageUrl);
  }, [imageUrl]);

  async function handleFile(e: any) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.addEventListener("load", async () => {
      const compressedDataUrl = await compressImage(reader.result);
      setImageUrl(compressedDataUrl);
    });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (reviewText.trim() === "") {
      alert("Please write a review before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Directly call addReview from here with the parameters
      await addReview(
        productId,
        "6725fa63522a42d96ed9a6a6",
        rating,
        true, // Parent review (optional, null if no parent)
        reviewText,
        imageUrl,
        "", // No video URL (optional)
        recommend
      );
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setIsSubmitting(false);
      setIsOpenReviewModal(false);
      setRating(5);
      setReviewText("");
      setImageUrl("");
      setRecommend(false);
    }
  }

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8 mt-6">
      {/* Rating Distribution Section */}
      <div className="w-full md:w-[60%]">
        {[5, 4, 3, 2, 1].map((star) => {
          const percentage = ((starCounts[star] || 0) / reviews.length) * 100;

          return (
            <div key={star} className="flex items-center gap-4 my-4">
              <p className="text-sm font-semibold text-gray-700 w-20">
                {star} Star{star > 1 && "s"}
              </p>

              <div className="relative w-full bg-gray-300 h-3 rounded-full">
                <div
                  className="absolute top-0 left-0 h-full bg-[var(--theme-brown)] rounded-full"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>

              <p className="text-sm font-semibold text-gray-700 w-20 text-right">
                {percentage.toFixed(1)}%
              </p>
            </div>
          );
        })}
      </div>

      {/* right side  */}
      {isOpenReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white p-8 rounded-lg shadow-lg lg:w-1/3">
            <button
              onClick={() => setIsOpenReviewModal(false)}
              className="absolute top-2 right-2 text-3xl text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">Add a Review</h2>
            <form>
              {/* Rating Range Input */}
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rating (1-5)
              </label>
              <span className="text-lg">{rating}</span>
              {/* <input
                id="rating"
                type="range"
                min="1"
                max="5"
                step={0.1}
                value={rating}
                onChange={(e: any) => {
                  setRating(e.target.value);
                }}
                className="w-full h-4 bg-gray-200 rounded-lg cursor-pointer mb-4"
              /> */}
              <DynamicStarRating
                maxRating={5}
                defaultRating={rating}
                color="#fcc419"
                size={48}
                messages={["Poor", "Fair", "Good", "Very Good", "Excellent"]}
                onSetRating={setRating}
              />
              {/* Review Text Input */}
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Review
              </label>
              <textarea
                id="reviewText"
                value={reviewText}
                onChange={(e: any) => {
                  setReviewText(e.target.value);
                }}
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
                placeholder="Write your review here..."
              ></textarea>

              {/* Image URL Input */}
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image (Optional)
              </label>
              <input
                id="image"
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={(e: any) => {
                  handleFile(e);
                }}
                className="w-full p-1 border border-gray-300 rounded-lg mb-4"
              />
              {imageUrl && (
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-700">
                    Image Preview:
                  </h3>
                  <img
                    src={imageUrl}
                    alt="Preview"
                    className="mt-1 w-full max-w-[150px] h-auto max-h-[100px] object-cover rounded-lg border"
                  />
                </div>
              )}

              {/* Recommend/Not Recommend Radio Buttons */}
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Would you recommend this product?
              </label>
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="recommendCheckbox"
                  checked={recommend}
                  onChange={(e) => setRecommend(e.target.checked)} // Toggle boolean state
                  className="mr-2"
                />
                <label className="mr-4 text-sm">
                  Yes, I recommend this product
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-[var(--theme-brown)] text-white rounded-lg"
                  onClick={(e) => handleSubmit(e)}
                >
                  {isAddingReview ? "Submitting..." : "Submit Review"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left w-full md:w-[35%]">
        <div className="flex items-center justify-center mb-4">
          <StarRating
            rating={averageRating}
            size="large"
            fillColor="var(--theme-brown)"
          />
          <span className="text-base font-semibold text-slate-500 ml-2">
            {averageRating} out of 5
          </span>
        </div>

        <p className="text-base text-gray-600 mb-2">
          99% users recommend this product
        </p>
        <span className="text-base text-gray-500 mb-4">
          {reviews.length} reviews
        </span>

        <button
          onClick={() =>
            userEmail ? setIsOpenReviewModal(true) : navigate("/login")
          }
          className="bg-[var(--theme-brown)] text-white text-md rounded-lg p-2 hover:bg-[var(--buttonHover)] transition duration-300"
        >
          + Add a review
        </button>
      </div>
    </div>
  );
}
