import React, { useState } from "react";

function AboutUs() {
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    border: ".5px solid black"
  });

  const toggleStyle = () => {
    const newStyle =
      myStyle.color === "black"
        ? { color: "white", backgroundColor: "black", border: ".5px solid white" }
        : { color: "black", backgroundColor: "white", border: ".5px solid black" };

    setMyStyle(newStyle);
    setBtnText((prevText) => (prevText === "Enable Dark Mode" ? "Enable Light Mode" : "Enable Dark Mode"));
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-4">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        {Array.from({ length: 3 }, (_, index) => index + 1).map((itemIndex) => (
          <div key={itemIndex} className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" style={myStyle}>
              <button
                className={`accordion-button ${itemIndex === 1 ? "": "collapsed"}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${itemIndex}`}
                aria-expanded={itemIndex === 1 ? "true" : "false"}
                aria-controls={`collapse${itemIndex}`}
                style={myStyle}
              >
                Accordion Item #{itemIndex}
              </button>
            </h2>
            <div
              id={`collapse${itemIndex}`}
              className={`accordion-collapse collapse ${itemIndex === 1 ? "show" : ""}`}
              data-bs-parent="#accordionExample"
              style={myStyle}
            >
              <div className="accordion-body" style={myStyle}>
                <strong>This is the {itemIndex === 1 ? "first" : itemIndex === 2 ? "second" : "third"} item's accordion body.</strong> It is
                {itemIndex === 1 ? " shown" : " hidden"} by default, until the collapse plugin adds the appropriate
                classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding
                via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just
                about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
