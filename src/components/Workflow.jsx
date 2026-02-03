import { useState, useEffect } from "react";
import bike1 from "../assets/recentWork/bike1.jpg";
import bike2 from "../assets/recentWork/bike2.jpg";
import bike3 from "../assets/recentWork/bike3.jpg";
import bike5 from "../assets/recentWork/bike5.jpg";
import bike6 from "../assets/recentWork/bike6.jpg";
import bike7 from "../assets/recentWork/bike7.jpg";
import bike8 from "../assets/recentWork/bike8.jpg";
import bike9 from "../assets/recentWork/bike9.jpg";
import bike10 from "../assets/recentWork/bike10.jpg";
import bike11 from "../assets/recentWork/bike11.jpg";
import bike12 from "../assets/recentWork/bike12.jpg";
import bike13 from "../assets/recentWork/bike13.jpg";
import bike14 from "../assets/recentWork/bike14.jpg";
import bike4 from "../assets/recentWork/bike4.jpg";




const Workflow = () => {
  const images = [bike1, bike2, bike3, bike4,bike5, bike6, bike7, bike8,bike9, bike10, bike11, bike12,bike13, bike14];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div className="relative  w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">

<div className="text-center mt-10 mb-10">
         
          <h2 className='mt-10 text-3xl sm:text-5xl lg:text-6xl'>
            Our&nbsp;
            <span className='bg-gradient-to-r from-red-500 to-red-900 text-transparent bg-clip-text'>
              Recent Work
            </span>
          </h2>
        </div>
      {/* Carousel Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full p-5 flex-shrink-0"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-fit object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? "bg-gray-800"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
          />
        ))}
      </div>

      {/* Optional Manual Navigation (Arrows) */}
      <button
        onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
      >
        &lt;
      </button>
      <button
        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
      >
        &gt;
      </button>
    </div>
  );
};

export default Workflow;
