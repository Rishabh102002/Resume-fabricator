import "../styles/inputDate.css";

function InputDate({ setState, state }) {
  const handleChangeFrom = (e) => {
    if (state === "schoolDate") {
      setState((prev) => ({
        ...prev,
        studiedFrom: e.target.value,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        workedFrom: e.target.value,
      }));
    }
  };

  const handleChangeTill = (e) => {
    if (state === "schoolDate") {
      setState((prev) => ({
        ...prev,
        studiedTill: e.target.value,
      }));
    } else {
      setState((prev) => ({
        ...prev,
        workedTill: e.target.value,
      }));
    }
  };

  return (
    <div className="dateSection">
      <div className="date-sub">
        <input
          className="dateBox"
          type="date"
          required
          onChange={handleChangeFrom}
        />
        <p className="label">From</p>
      </div>
      <div className="date-sub">
        <input
          className="dateBox"
          type="date"
          required
          onChange={handleChangeTill}
        />
        <p className="label">till</p>
      </div>
    </div>
  );
}

export default InputDate;
