import "../styles/inputField.css";

function Inputfield({ label, placeHolder, setState, state }) {
  const handleChange = (e) => {
    setState((prev) => ({
      ...prev,
      [state]: e.target.value,
    }));
  };
  return (
    <div className="inputSection">
      <input
        className="inputBox"
        type="text"
        placeholder={placeHolder}
        required
        onChange={handleChange}
      />
      <p className="label">{label}</p>
    </div>
  );
}

export default Inputfield;
