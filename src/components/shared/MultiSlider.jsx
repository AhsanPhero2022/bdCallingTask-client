import { useRef, useEffect, useCallback } from "react";

// eslint-disable-next-line react/prop-types
const MultiSlider = ({ min, max, minVal, maxVal }) => {
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(maxValRef.current.valueAsNumber);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(minValRef.current.valueAsNumber);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  return (
    <div className="relative w-full pt-10">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        readOnly
        className="absolute w-full h-0 appearance-none pointer-events-none"
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        readOnly
        className="absolute w-full h-0 appearance-none pointer-events-none"
      />

      <div className="relative w-full h-2 -mt-1 bg-gray-300 rounded-full">
        <div ref={range} className="absolute h-2 bg-[#EEEEEE] rounded-full" />
        <div
          className="absolute top-[-5px] w-6 h-6 bg-[#EE6611] rounded-full border-2 border-[#EEEEEE]"
          style={{ left: `calc(${getPercent(minVal)}% - 6px)` }}
        />
        <div
          className="absolute top-[-5px] w-6 h-6 bg-[#EE6611] rounded-full border-2 border-[#EEEEEE]"
          style={{ left: `calc(${getPercent(maxVal)}% - 18px)` }}
        />
      </div>

      <div className="flex justify-between mt-2">
        <span>${minVal}k</span>
        <span>${maxVal}k</span>
      </div>
    </div>
  );
};

export default MultiSlider;
