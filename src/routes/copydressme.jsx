// import { useEffect, useState } from "react";
// import DressMeIntro from "./Components/DressMeIntro";
// import SelectInput from "./Components/SelectInput";
// import TextInput from "./Components/TextInput";
// import Success from "./success";
// import CheckboxInput from "./Components/CheckboxInput";
// import Header from "./Components/Header";
// import ErrorValidation from "./Components/ErrorValidation";
// import PhoneValidation from "./Components/PhoneValidation";

// function DressMe(props) {
//   const [details, setDetails] = useState({
//     name: "",
//     lastName: "",
//     phone: "",
//     address: "",
//     shirtSize: "",
//     pantsSize: "",
//     budget: "",
//   });

//   const [alwaysWearSelect, setAlwaysWearSelect] = useState({
//     skinny: "",
//     tight: "",
//     loose: "",
//     slim: "",
//     someColor: "",
//     other: "",
//   });

//   const [neverWearSelect, setNeverWearSelect] = useState({
//     skinny: "",
//     tight: "",
//     loose: "",
//     slim: "",
//     someColor: "",
//     other: "",
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [submitButtonClicked, setSubmitButtonClicked] = useState(false);
//   const neverWearChangeHandler = (e) => {
//     setNeverWearSelect({ ...neverWearSelect, [e.target.name]: e.target.value });
//     console.log("e1:", e.target.name, e.target.value);
//   };

//   const alwaysWearChangeHandler = (e) => {
//     setAlwaysWearSelect({ ...alwaysWearSelect, [e.target.name]: e.target.value });
//     console.log("e2:", e.target.name, e.target.value);
//   };

//   const handleSubmit = async (event) => {
//     setSubmitButtonClicked(true);
//     if (
//       details.phone.length > 1 &&
//       details.name.length > 1 &&
//       details.lastName.length > 1 &&
//       details.address.length > 1 &&
//       details.budget > 0
//     ) {
//       event.preventDefault();

//       try {
//         const res = await fetch("http://localhost:8080/dressme", {
//           method: "POST", // or 'PUT'
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(details),
//         })
//           .then((response) => response.json())
//           .then((details) => {
//             console.log("Success:", details).then((alwaysWearSelect) => {
//               console.log("alwaysWearSelect: ", alwaysWearSelect);
//             });
//           });
//       } catch (error) {
//         console.error("Error:", error);
//       }

//       // think of what to do with the things you get in res (that's the response)
//       // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#checking_that_the_fetch_was_successful

//       setIsSubmitted(true);
//     } else {
//       event.preventDefault();
//     }
//   };
//   return isSubmitted ? (
//     <Success
//       details={details}
//       alwaysWearSelect={alwaysWearSelect}
//       neverWearSelect={neverWearSelect}
//     />
//   ) : (
//     <div>
//       <Header />
//       <div className="main-container">
//         <DressMeIntro />
//         <div className="input-container">
//           <form onSubmit={handleSubmit}>
//             <TextInput
//               label="Name: "
//               onChange={(e) => setDetails({ ...details, name: e.target.value })}
//             />
//             {submitButtonClicked ? (
//               <ErrorValidation field={details.name} />
//             ) : (
//               <span class="required">*Required</span>
//             )}
//             <TextInput
//               label="Last Name: "
//               onChange={(e) => setDetails({ ...details, lastName: e.target.value })}
//             />
//             {submitButtonClicked ? (
//               <ErrorValidation field={details.lastName} />
//             ) : (
//               <span class="required">*Required</span>
//             )}
//             <TextInput
//               label="Phone Number: "
//               onChange={(e) => setDetails({ ...details, phone: e.target.value })}
//               minlength="10"
//             />
//             {submitButtonClicked ? (
//               <PhoneValidation phone={details.phone} />
//             ) : (
//               <span class="required">*Required</span>
//             )}
//             <TextInput
//               label=" Full Address: "
//               onChange={(e) => setDetails({ ...details, address: e.target.value })}
//             />
//             {submitButtonClicked ? (
//               <ErrorValidation field={details.address} />
//             ) : (
//               <span class="required">*Required</span>
//             )}
//             <SelectInput
//               label="Shirt Size:"
//               onChange={(e) => setDetails({ ...details, shirtSize: e.target.value })}
//               sizes={["", "XS", "S", "M", "L", "XL", "XXL"]}
//             />
//             <SelectInput
//               label="Pants Size:"
//               onChange={(e) => setDetails({ ...details, pantsSize: e.target.value })}
//               sizes={["", "36", "38", "40", "42", "44", "46"]}
//             />
//             Never Wear:
//             <br />
//             <CheckboxInput
//               value="skinny"
//               name="skinny"
//               label="Skinny"
//               onChange={neverWearChangeHandler}
//             />
//             <CheckboxInput
//               value="tight"
//               name="tight"
//               label="Tight"
//               onChange={neverWearChangeHandler}
//             />
//             <CheckboxInput
//               value="loose"
//               name="loose"
//               label="Loose"
//               onChange={neverWearChangeHandler}
//             />
//             <CheckboxInput
//               value="slim"
//               name="slim"
//               label="Slim"
//               onChange={neverWearChangeHandler}
//             />
//             <CheckboxInput
//               value="color"
//               name="color"
//               label="Some Color"
//               onChange={neverWearChangeHandler}
//             />
//             <CheckboxInput
//               value="other"
//               name="other"
//               label="Other "
//               onChange={neverWearChangeHandler}
//             />
//             <br />
//             Always Wear:
//             <br />
//             <CheckboxInput
//               value="skinny"
//               name="skinny"
//               label="Skinny"
//               onChange={alwaysWearChangeHandler}
//             />
//             <CheckboxInput
//               value="tight"
//               name="tight"
//               label="Tight"
//               onChange={alwaysWearChangeHandler}
//             />
//             <CheckboxInput
//               value="loose"
//               name="loose"
//               label="Loose"
//               onChange={alwaysWearChangeHandler}
//             />
//             <CheckboxInput
//               value="slim"
//               name="slim"
//               label="Slim"
//               onChange={alwaysWearChangeHandler}
//             />
//             <CheckboxInput
//               value="color"
//               name="color"
//               label="Some Color"
//               onChange={alwaysWearChangeHandler}
//             />
//             <CheckboxInput
//               value="other"
//               name="other"
//               label="Other "
//               onChange={alwaysWearChangeHandler}
//             />
//             <br />
//             <label for="budget">Budget</label>
//             <input
//               type="range"
//               step={100}
//               id="budget"
//               name="budget"
//               onChange={(e) => setDetails({ ...details, budget: e.target.value })}
//               min={0}
//               max={10000}
//             />
//             {submitButtonClicked ? (
//               <ErrorValidation field={details.budget} />
//             ) : (
//               <span class="required">*Required</span>
//             )}
//             <div style={{ display: "inline" }}>{details.budget}</div>
//             <br></br>
//             <br></br>
//             <input type="submit" value="Submit" />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DressMe;
