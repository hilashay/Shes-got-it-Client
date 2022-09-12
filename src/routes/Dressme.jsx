import { useSelector, useDispatch } from "react-redux";
import { updateDetails } from "./redux/detailsSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AlwaysWearInputContainer from "./Components/AlwaysWearInputContainer";
import DressMeIntro from "./Components/DressMeIntro";
import ErrorPage from "./Components/ErrorPage";
import Header from "./Components/Header";
import NeverWearInputContainer from "./Components/NeverWearInputContainer";
import PhoneValidation from "./Components/PhoneValidation";
import RangeInputAndValidation from "./Components/RangeInputAndValidation";
import SelectInput from "./Components/SelectInput";
import TextInput from "./Components/TextInput";
import TextInputAndValidation from "./Components/TextInputAndValidation";
import Container from "./Components/UI/InputAndValidationContainer";
import Success from "./success";
// import { Counter } from "./counter/Counter";

function DressMe(props) {
  const navigate = useNavigate();
  const detailsRedux = useSelector((state) => state.details.value);
  const dispatch = useDispatch();
  const onChangeForFieldName = (fieldName) => (e) =>
    dispatch(updateDetails({ value: e.target.value, fieldName }));
  console.log("detailsRedux ", detailsRedux);

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
      true
      // details.phone.length > 1 &&
      // details.name.length > 1 &&
      // details.lastName.length > 1 &&
      // details.address.length > 1 &&
      // details.budget > 0
    ) {
      event.preventDefault();

      try {
        // const res = await fetch("http://localhost:8000/dressme", {
        //   method: "POST", // or 'PUT'
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     ...details,
        //     alwaysWear: alwaysWearSelect,
        //     neverWear: neverWearSelect,
        //   }),
        // });
        // const body = await res.json();
        // console.log("body ", body);
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
        <Form onSubmit={handleSubmit}>
          <Column1>
            <TextInputAndValidation
              labelText="Name: "
              fieldName="name"
              value={detailsRedux.name}
              shouldShowError={submitButtonClicked}
              onChange={onChangeForFieldName("name")}
            />
            <TextInputAndValidation
              labelText="Last Name: "
              fieldName={"lastName"}
              value={detailsRedux.lastName}
              onChange={onChangeForFieldName("lastName")}
              shouldShowError={submitButtonClicked}
            />
            <Container>
              <TextInput
                label="Phone Number: "
                fieldName={"phone"}
                onChange={onChangeForFieldName("phone")}
                value={detailsRedux.phone}
                minlength="10"
              />
              <PhoneValidation phone={details.phone} shouldValidate={submitButtonClicked} />
            </Container>
            <TextInputAndValidation
              labelText=" Full Address: "
              fieldName={"address"}
              onChange={onChangeForFieldName("address")}
              value={detailsRedux.address}
              shouldShowError={submitButtonClicked}
            />
            <Container>
              <RangeInputAndValidation
                fieldName={"Budget"}
                step={100}
                id="budget"
                name="budget"
                onChange={onChangeForFieldName("budget")}
                max={10000}
                shouldShowError={submitButtonClicked}
                value={detailsRedux.budget}
              />
            </Container>
          </Column1>
          {/* <Column2>
            <AlwaysAndNeverWearContainer>
              Never Wear:
              <NeverWearInputContainer neverWearChangeHandler={neverWearChangeHandler} />
              <br></br>
              Always Wear:
              <AlwaysWearInputContainer alwaysWearChangeHandler={alwaysWearChangeHandler} />
            </AlwaysAndNeverWearContainer>
          </Column2> */}
          <Column3>
            <SelectInput
              label="Shirt Size:"
              onChange={onChangeForFieldName("shirtSize")}
              value={detailsRedux.shirtSize}
              sizes={["", "XS", "S", "M", "L", "XL", "XXL"]}
            />
            <SelectInput
              label="Pants Size:"
              onChange={onChangeForFieldName("pantsSize")}
              sizes={["", "36", "38", "40", "42", "44", "46"]}
            />
          </Column3>
          <SubmitContainer>
            <Submit>Submit</Submit>
          </SubmitContainer>
        </Form>
      </div>
    </div>
  );
}

export default DressMe;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-left: 20px;
  flex: 3;
  padding: 15px;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    margin: 0 0 0 0;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 20px;
  flex: 1;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    flex-direction: row;
    justify-content: space-around;
    margin: 0 0 0 0;
  }
`;

const AlwaysAndNeverWearContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 220px;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    flex-direction: row;
  }
`;

const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  margin-right: 20px;
  margin-bottom: 20px;
  flex: 0.5;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    margin: 0 0 0 0;
  }
`;

const Form = styled.form`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 50%;
  height: 450px;
  background-color: white;
  border: thin;
  border-radius: 10px;
  border-style: solid;
  background-color: #dddddd3b;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    height: 1000px;
    flex-direction: column;
  }
`;

const Submit = styled.button`
  position: absolute;
  bottom: 20px;
  right: 10px;
  background-color: #7777f3;
  height: 50px;
  border: none;
  color: black;
  padding: 16px 32px;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  line-height: 0px;

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    position: initial;
  }
`;

const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: end;
  margin-right: 20px;
  margin-bottom: 20px;

  @media (min-width: 320px) and (max-width: 480px) {
    align-items: unset;
    margin: 0 0 0 0;
  }
`;

const Div1 = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  @media (min-width: 320px) and (max-width: 480px) {
  }
`;
const Div2 = styled.div`
  width: 100px;
  height: 100px;
  background-color: gray;
  @media (min-width: 320px) and (max-width: 480px) {
  }
`;
