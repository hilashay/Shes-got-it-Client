import { Slide } from "react-slideshow-image";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";

const slideImages = [
  {
    url: "https://i.pinimg.com/564x/20/cb/9d/20cb9d7625af835cc29b0c621f395dd9.jpg", //filled a form
    caption: "You filled the form on my web",
  },
  {
    url: "Imgs/img2.png",
    caption: "We can make a conversion",
  },
  {
    url: "https://i.pinimg.com/564x/fa/c1/70/fac170d58d7e88bfe318516a362e2fee.jpg", //girl search
    caption: "Im searching the cloths for you",
  },
  {
    url: "Imgs/img2.png",
    caption: "Slide 4",
  },
  {
    url: "Imgs/img2.png",
    caption: "Slide 5",
  },
  {
    url: "https://i.pinimg.com/564x/96/c7/1c/96c71c2eeb5abc83aaf97b9c0c945113.jpg", //try the cloths
    caption: "Slide 6",
  },
  {
    url: "Imgs/img2.png",
    caption: "Slide 7",
  },
];

const SlideShow = () => {
  return (
    <div className="slide-container">
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
`;
