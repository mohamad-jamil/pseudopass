function Slider({ label, length, onChange }) {
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
            value={length}
            onChange={onChange}
          ></input>
        </div>
        <div className="col slider-label">
          <label for="customRange3" class="form-label text-white">
            {label}: {length}
          </label>
        </div>
      </div>
    </div>
  );
}

export default Slider;
