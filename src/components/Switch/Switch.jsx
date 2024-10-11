function Switch({ label, checked, onChange }) {
  return (
    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        checked={checked}
        onChange={onChange}
      />
      <label class="form-check-label" for="flexSwitchCheckDefault">
        <div className="text-white">{label}</div>
      </label>
    </div>
  );
}

export default Switch;
