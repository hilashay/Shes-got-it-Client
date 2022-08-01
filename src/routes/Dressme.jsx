import { useEffect, useState } from "react";
import DressMeIntro from "./Components/DressMeIntro";
import SelectInput from "./Components/SelectInput";
import TextInput from "./Components/TextInput";
import Success from "./success";
import CheckboxInput from "./Components/CheckboxInput";
import Header from "./Components/Header";
import ErrorValidation from "./Components/ErrorValidation";
import PhoneValidation from "./Components/PhoneValidation";
import ErrorPage from "./Components/ErrorPage";
import { useNavigate } from "react-router-dom";
import TextInputAndValidation from "./Components/TextInputAndValidation";
import RangeInputAndValidation from "./Components/RangeInputAndValidation";
function DressMe(props) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [details, setDetails] = useState({
    name: "",
    lastName: "",
    phone: "",
    address: "",
    shirtSize: "",
    pantsSize: "",
    budget: "",
  });
  const [isError, setIsError] = useState(false);
  const [alwaysWearSelect, setAlwaysWearSelect] = useState([]);
  const [neverWearSelect, setNeverWearSelect] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);

  const neverWearChangeHandler = (e) => {
    if (e.target.checked && !neverWearSelect.includes(e.target.value)) {
      setNeverWearSelect((prev) => [...prev, e.target.value]);
    } else if (!e.target.checked && neverWearSelect.includes(e.target.value)) {
      for (let i = 0; i < neverWearSelect.length; i++) {
        if (neverWearSelect[i] === e.target.value) {
          setNeverWearSelect((prev) => {
            const temp = [...prev];
            temp.splice(i, 1);
            return temp;
          });
        }
      }
    }
  };

  const alwaysWearChangeHandler = (e) => {
    if (e.target.checked && !alwaysWearSelect.includes(e.target.value)) {
      setAlwaysWearSelect((prev) => [...prev, e.target.value]);
    } else if (!e.target.checked && alwaysWearSelect.includes(e.target.value)) {
      //remove e.target.value from the array
      for (let i = 0; i < alwaysWearSelect.length; i++) {
        if (alwaysWearSelect[i] === e.target.value) {
          setAlwaysWearSelect((prev) => prev.filter((x) => x !== e.target.value));
        }
      }
    }
  };

  const handleSubmit = async (event) => {
    setSubmitButtonClicked(true);
    if (
      details.phone.length > 1 &&
      details.name.length > 1 &&
      details.lastName.length > 1 &&
      details.address.length > 1 &&
      details.budget > 0
    ) {
      event.preventDefault();

      try {
        const res = await fetch("http://localhost:8000/dressme", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...details,
            alwaysWear: alwaysWearSelect,
            neverWear: neverWearSelect,
          }),
        });
        const body = await res.json();
        console.log("body ", body);
        // navigate(`/dressme/success/${res.body._id}`);
      } catch (error) {
        console.log("Error:", error);
        setIsError(true);
      }

      // think of what to do with the things you get in res (that's the response)
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#checking_that_the_fetch_was_successful

      setIsSubmitted(true);
    } else {
      event.preventDefault();
    }
  };
  return isError ? (
    <ErrorPage />
  ) : isSubmitted ? (
    <Success
      details={details}
      alwaysWearSelect={alwaysWearSelect}
      neverWearSelect={neverWearSelect}
    />
  ) : (
    <div>
      <Header />
      <div className="main-container">
        <DressMeIntro />
        <div className="idan-container">
          <div className="column column1" style={{ backgroundColor: "white" }}>
            <div style={{ backgroundColor: "yellow", height: 40, width: 200 }}></div>
            <div style={{ backgroundColor: "yellow", height: 40, width: 200 }}></div>
            <div style={{ backgroundColor: "yellow", height: 40, width: 200 }}></div>
            <div style={{ backgroundColor: "yellow", height: 40, width: 200 }}></div>
          </div>
          <div className="column" style={{ backgroundColor: "blue" }}>
            idan
          </div>
          <div className="column" style={{ backgroundColor: "yellow" }}>
            sefi
          </div>
        </div>
      </div>
    </div>
  );
}

export default DressMe;
