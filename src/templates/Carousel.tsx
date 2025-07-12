import React, { useRef } from 'react';

export const Carousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const boxes = [1, 2, 3, 4, 5];

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full py-8">
      {/* Scrollable container */}
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory space-x-4 overflow-x-auto scroll-smooth px-[calc(50%-150px)]"
      >
        {boxes.map((num) => (
          <div
            key={num}
            className="flex h-40 min-w-[300px] shrink-0 snap-center items-center justify-center rounded-md bg-primary-200 text-white"
          >
            Box {num}
          </div>
        ))}
      </div>

      {/* Left arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700"
      >
        &#8592;
      </button>

      {/* Right arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700"
      >
        &#8594;
      </button>
    </div>
  );
};
