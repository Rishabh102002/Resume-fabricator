import { useState } from "react";
import Section from "./components/Section";
import Form from "./components/form";
import InputDate from "./components/inputDate";
import Inputfield from "./components/inputField";
import Resume from "./components/resume";
import "./styles/App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "example@gmail.com",
    phone: "982134111",
    school: "ABC University",
    studied: "Computer Science",
    studiedFrom: "10-01-2010",
    studiedTill: "01-04-2014",
    company: "XYZ Company",
    position: "Software Developer",
    responsibility: "Developing software",
    workedFrom: "12-06-2014",
    workedTill: "09-07-2018",
  });

  const [handleSubmit, setHandleSubmit] = useState(false);

  console.log("handleSubmit", handleSubmit);
  return (
    <>
      <Form setHandleSubmit={setHandleSubmit}>
        <Section title="General Information">
          <Inputfield
            label="Name"
            placeHolder="Enter your name"
            setState={setFormData}
            state="name"
          />
          <Inputfield
            label="Email"
            placeHolder="Enter your email"
            setState={setFormData}
            state="email"
          />
          <Inputfield
            label="Phone"
            placeHolder="Enter your Phone Number"
            setState={setFormData}
            state="phone"
          />
        </Section>
        <Section title="Educational Experience">
          <Inputfield
            label="School"
            placeHolder="Enter your School's name"
            setState={setFormData}
            state="school"
          />
          <Inputfield
            label="Studied"
            placeHolder="Enter title of subject you studied"
            setState={setFormData}
            state="studied"
          />
          <InputDate setState={setFormData} state="schoolDate" />
        </Section>
        <Section title="Practical Experience">
          <Inputfield
            label="Company"
            placeHolder="Enter your Company's name"
            setState={setFormData}
            state="company"
          />
          <Inputfield
            label="Position"
            placeHolder="Enter position in the company"
            setState={setFormData}
            state="position"
          />
          <Inputfield
            label="Responsibility"
            placeHolder="Enter main responsibilities of your jobs"
            setState={setFormData}
            state="responsibility"
          />
          <InputDate setState={setFormData} state="workedDate" />
        </Section>
      </Form>
      <img src="../public/assets/right-arrow.png" height={48} />
      {handleSubmit ? (
        <Resume formData={formData} />
      ) : (
        <Resume
          formData={{
            name: "John Doe",
            email: "example@gmail.com",
            phone: "982134111",
            school: "ABC University",
            studied: "Computer Science",
            studiedFrom: "10-01-2010",
            studiedTill: "01-04-2014",
            company: "XYZ Company",
            position: "Software Developer",
            responsibility: "Developing software",
            workedFrom: "12-06-2014",
            workedTill: "09-07-2018",
          }}
        />
      )}
    </>
  );
}

export default App;
