function Switch({ label, checked, onChange }) {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label">
        <div className="text-white">{label}</div>
      </label>
    </div>
  );
}

export default Switch;
