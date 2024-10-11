import { useState } from "react";

function Slider({ label }) {
  const [value, setValue] = useState(8);

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <label for="customRange3" class="form-label text-white">
        {label}: {value}
      </label>
      <input
        type="range"
        class="form-range"
        min="8"
        max="20"
        step="1"
        id="customRange3"
        value={value}
        onChange={handleSliderChange}
      ></input>
    </>
  );
}

export default Slider;
