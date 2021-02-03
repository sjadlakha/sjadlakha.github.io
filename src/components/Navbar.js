import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* scroll krne pr bas name then navbar then neeche ka component dikhna chahiye. Upar scroll kro toh bas name , image desc, navbar */}
      <div className="container">
        <div className="row">
          <div className="col">General</div>
          <div className="col">Education</div>
          <div className="col">Projects</div>
          <div className="col">Extra Curricular</div>
          <div className="col">Goals</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
