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
        <div className="input-container">
          <form onSubmit={handleSubmit}>
            <TextInputAndValidation
              labelText="Name: "
              fieldName={details.name}
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              shouldShowError={submitButtonClicked}
            />
            <TextInputAndValidation
              labelText="Last Name: "
              fieldName={details.lastName}
              onChange={(e) => setDetails({ ...details, lastName: e.target.value })}
              shouldShowError={submitButtonClicked}
            />
            <TextInput
              label="Phone Number: "
              onChange={(e) => setDetails({ ...details, phone: e.target.value })}
              minlength="10"
            />
            <PhoneValidation phone={details.phone} shouldValidate={submitButtonClicked} />
            <TextInputAndValidation
              labelText=" Full Address: "
              fieldName={details.address}
              onChange={(e) => setDetails({ ...details, address: e.target.value })}
              shouldShowError={submitButtonClicked}
            />
            <RangeInputAndValidation
              fieldName="Budget"
              step={100}
              id="budget"
              name="budget"
              onChange={(e) => setDetails({ ...details, budget: e.target.value })}
              max={10000}
              shouldShowError={submitButtonClicked}
            />
            <div style={{ display: "inline" }}>{details.budget}</div>
            <br></br>
            <br></br>
            {/* <SelectInput
              label="Shirt Size:"
              onChange={(e) => setDetails({ ...details, shirtSize: e.target.value })}
              sizes={["", "XS", "S", "M", "L", "XL", "XXL"]}
            />
            <SelectInput
              label="Pants Size:"
              onChange={(e) => setDetails({ ...details, pantsSize: e.target.value })}
              sizes={["", "36", "38", "40", "42", "44", "46"]}
            /> */}
            Never Wear:
            <br />
            <CheckboxInput
              value="skinny"
              type="skinny"
              label="Skinny"
              onChange={neverWearChangeHandler}
            />
            <CheckboxInput
              value="tight"
              type="tight"
              label="Tight"
              onChange={neverWearChangeHandler}
            />
            <CheckboxInput
              value="loose"
              type="loose"
              label="Loose"
              onChange={neverWearChangeHandler}
            />
            <CheckboxInput
              value="slim"
              type="slim"
              label="Slim"
              onChange={neverWearChangeHandler}
            />
            <CheckboxInput
              value="color"
              type="color"
              label="Some Color"
              onChange={neverWearChangeHandler}
            />
            <CheckboxInput
              value="other"
              type="other"
              label="Other "
              onChange={neverWearChangeHandler}
            />
            <br />
            Always Wear:
            <br />
            <CheckboxInput
              value="skinny"
              type="skinny"
              label="Skinny"
              onChange={alwaysWearChangeHandler}
            />
            <CheckboxInput
              value="tight"
              type="tight"
              label="Tight"
              onChange={alwaysWearChangeHandler}
            />
            <CheckboxInput
              value="loose"
              type="loose"
              label="Loose"
              onChange={alwaysWearChangeHandler}
            />
            <CheckboxInput
              value="slim"
              type="slim"
              label="Slim"
              onChange={alwaysWearChangeHandler}
            />
            <CheckboxInput
              value="color"
              type="color"
              label="Some Color"
              onChange={alwaysWearChangeHandler}
            />
            <CheckboxInput
              value="other"
              type="other"
              label="Other "
              onChange={alwaysWearChangeHandler}
            />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default DressMe;
