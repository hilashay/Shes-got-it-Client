import { Slide } from "react-slideshow-image";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";

const slideImages = [
  {
    url: "https://i.pinimg.com/564x/20/cb/9d/20cb9d7625af835cc29b0c621f395dd9.jpg", //filled a form
    caption: "You filled the form on my web",
  },
  // {
  //   url: "https://i.pinimg.com/564x/6f/65/0f/6f650f78b66c225ba672bc2cb64e7e40.jpg",
  //   caption: "We can make a conversion",
  // },
  {
    url: "https://i.pinimg.com/564x/fa/c1/70/fac170d58d7e88bfe318516a362e2fee.jpg", //girl search
    caption: "Im searching the cloths for you",
  },
  {
    url: "https://i.pinimg.com/564x/52/79/78/5279780331d558bae78791e303f237ac.jpg",
    caption: "Send it to your homes",
  },
  {
    url: "https://i.pinimg.com/564x/2f/47/e2/2f47e2474579fdffda8fb590d8f2939c.jpg",
    caption: "You get the delivery",
  },
  {
    url: "https://i.pinimg.com/564x/96/c7/1c/96c71c2eeb5abc83aaf97b9c0c945113.jpg", //try the cloths
    caption: "You try your cloths on",
  },
  {
    url: "https://i.pinimg.com/564x/ef/1f/f3/ef1ff339e91f7de91d180549f3a4208a.jpg",
    caption: "If you like everything - enjoy with your new cloths",
  },
];

const SlideShow = () => {
  return (
    <div className="slide-container">
      <Text> How it works?</Text>
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <Img src={slideImage.url}></Img>
            {/* <div style={{ backgroundImage: `url(${slideImage.url})` }}> */}
            <span>{slideImage.caption}</span>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SlideShow;

const Img = styled.img`
  width: 200px;
  height: 250px;
  border-radius: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
`;

const Text = styled.div`
  font-size: larger;
`;
