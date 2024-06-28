import "../styles/resume.css";

function Resume({ formData }) {
  return (
    <div className="resume">
      <div className="header">
        <p className="name">{formData.name}</p>
        <p className="Position">{formData.position}</p>
      </div>
      <div className="Details">
        <p className="details-title">{"▪️"} Educational Details:</p>
        <p className="school">School: {formData.school}</p>
        <p className="studied">Studied: {formData.studied}</p>
        <div className="dates">
          <p>
            <b>Studied from:</b>
          </p>
          {formData.studiedFrom} to: {formData.studiedTill}
        </div>
      </div>
      <div className="Details">
        <p className="details-title">{"▪️"} Practical Details:</p>
        <p className="company">Company: {formData.company}</p>
        <p className="responsibility">
          Responsibility: {formData.responsibility}
        </p>
        <div className="dates">
          <p>
            <b>Worked from:</b>
          </p>
          {formData.workedFrom} to: {formData.workedTill}
        </div>
      </div>
      <div className="contact">
        <p className="contact-title"></p>
        <p className="email">email: {formData.email}</p>
        <p className="phone">phone number: {formData.phone}</p>
      </div>
    </div>
  );
}

export default Resume;
