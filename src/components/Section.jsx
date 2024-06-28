import "../styles/Section.css";

function Section({ title, children }) {
  return (
    <div className="Section">
      <p className="title">{title}</p>
      {children}
    </div>
  );
}

export default Section;
