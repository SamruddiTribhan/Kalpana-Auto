import React, { useState } from "react";

const ReviewComponent = () => {
  const [rating, setRating] = useState(0); // Current rating input
  const [reviews, setReviews] = useState([]); // Stored reviews
  const [hover, setHover] = useState(0); // Hover effect for stars

  // Submit the current rating as a review
  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating) {
      setReviews([...reviews, { rating }]);
      setRating(0);
    }
  };

  // Group reviews by rating
  const groupedReviews = {
    5: reviews.filter((review) => review.rating === 5),
    4: reviews.filter((review) => review.rating === 4),
    3: reviews.filter((review) => review.rating === 3),
    2: reviews.filter((review) => review.rating === 2),
    1: reviews.filter((review) => review.rating === 1),
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-black text-white p-6">
      {/* Header */}
      <h2 className="text-3xl font-bold mb-4 text-center">Rate Our Service</h2>

      {/* Rating Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={`w-10 h-10 cursor-pointer transition-colors ${
                star <= (hover || rating) ? "text-red-500" : "text-gray-400"
              }`}
              fill="currentColor"
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(star)}
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.431 8.232 1.182-5.95 5.786 1.406 8.197L12 18.896l-7.356 3.864 1.406-8.197-5.95-5.786 8.232-1.182z" />
            </svg>
          ))}
        </div>
        <button
          type="submit"
          className="block mx-auto bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-lg transition-all"
        >
          Submit
        </button>
      </form>

      {/* Reviews Section */}
      <div className="w-full max-w-6xl mt-8">
        <h3 className="text-xl font-bold mb-4 text-center">Reviews</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Object.keys(groupedReviews)
            .reverse()
            .map((key) =>
              groupedReviews[key].length > 0 &&
              groupedReviews[key].map((review, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-lg shadow-lg bg-gray-800 text-white"
                >
                  {/* Display stars */}
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-6 h-6 ${
                          star <= review.rating ? "text-red-500" : "text-gray-400"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.431 8.232 1.182-5.95 5.786 1.406 8.197L12 18.896l-7.356 3.864 1.406-8.197-5.95-5.786 8.232-1.182z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm font-light">Rating: {review.rating} Star(s)</p>
                </div>
              ))
            )}
        </div>
      </div>
    </div>
  );
};

export default ReviewComponent;