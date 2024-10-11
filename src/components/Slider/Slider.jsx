import { useState } from "react";

function Slider({ label }) {
  const [value, setValue] = useState(8);

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col slider">
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
        </div>
        <div className="col slider-label">
          <label for="customRange3" class="form-label text-white">
            {label}: {value}
          </label>
        </div>
      </div>
    </div>
  );
}

export default Slider;
