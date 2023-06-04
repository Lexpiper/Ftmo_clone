import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Feedback = ({ reviews }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState([]);

  const reviewsRef = useRef(null);

  useEffect(() => {
    const updateVisibleReviews = () => {
      if (reviewsRef.current) {
        const containerWidth = reviewsRef.current.offsetWidth;
        const reviewWidth = 300; // Adjust this value as needed
        const numVisible = Math.floor(containerWidth / reviewWidth);
        setVisibleReviews(
          reviews.slice(activeIndex, activeIndex + numVisible + 1)
        );
      }
    };

    updateVisibleReviews();
    window.addEventListener("resize", updateVisibleReviews);
    return () => {
      window.removeEventListener("resize", updateVisibleReviews);
    };
  }, [activeIndex, reviews]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-center justify-center gap-2 mb-2">
        <h3 className="text-2xl font-semibold">Excellent</h3>
        <div className="flex items-center justify-center gap-1">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar key={index} className="text-yellow-500" />
          ))}
        </div>
        <div className="text-sm text-gray-500">Based on 4,893 reviews</div>
      </div>
      <div
        className="stars border bg-white flex-1 relative w-full overflow-hidden"
        ref={reviewsRef}
      >
        <div className="w-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-hidden">
          {visibleReviews.map((review, index) => (
            <div
              key={index}
              className="review bg-[#ffffff] rounded-lg p-4 flex flex-col items-center justify-center text-center"
            >
              <h3 className="text-lg font-semibold mb-2">{review.title}</h3>
              <p className="text-sm mb-4">{review.description}</p>
              <div className="flex items-center justify-center">
                {Array.from({ length: review.rating }, (_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">- {review.author}</p>
            </div>
          ))}
        </div>

        <button
          className="prev-button absolute top-1/2 transform -translate-y-1/2 left-4 bg-gray-800 text-white rounded-full p-2 focus:outline-none"
          onClick={prevSlide}
        >
          <FaChevronLeft className="text-white" />
        </button>
        <button
          className="next-button absolute top-1/2 transform -translate-y-1/2 right-4 bg-gray-800 text-white rounded-full p-2 focus:outline-none"
          onClick={nextSlide}
        >
          <FaChevronRight className="text-white" />
        </button>
      </div>
    </div>
  );
};

Feedback.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Feedback;
