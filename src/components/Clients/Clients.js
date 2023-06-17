import * as React from "react";
// Antd Components
import { Carousel } from "antd";

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "black",
  lineHeight: "160px",
  textAlign: "center",
};

function Clients() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
}
export default Clients;
