import { useState } from "react";

const Dropdown = (props) => {


//two hooks one to pdate dopdown value after click and other check visibility while hovering
  const [ddval, setddval] = useState("Select");
  const [isInvisible, setisInvisible] = useState(true);

//update value after clicking
  function updrval(op) {
    setddval(op);
    setisInvisible(true)
  }


  return (
    <div className="container">
      <h2>Should you use a dropdown</h2>

      <div className="dropdown" onMouseLeave={() => setisInvisible(true)} onMouseEnter={() => { setisInvisible(false) }}>
        <button className="dropbtn">{ddval} <span style={{ "float": "right" }}>	&#x25BD;</span> </button>

        <div className="dropdown-content" style={{
          display: isInvisible ? 'none' : ''
        }} >
          {props.Options.map(function (option) {
            return <option onClick={() => updrval(option)}>{option}</option>
          })}
        </div>
      </div>

    </div>
  );
};

export default Dropdown;