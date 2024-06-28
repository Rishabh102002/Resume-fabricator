import "../styles/form.css";

function Form({ setHandleSubmit, children, formData }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setHandleSubmit(true);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <p className="mainTitle">Enter Your Details</p>
      {children}
      <div className="buttonSection">
        <button type="reset">Reset</button>
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default Form;
