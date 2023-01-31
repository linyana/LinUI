import React from "react";

import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";
import Component5 from "./Component5";

import "@/components/Components/index.css";

const Button = () => {
  return (
    <div>
      <div className="component_big_title">按钮 <span>Button</span></div>
      <Component1 />
      <Component2 />  
      <Component3 />
      <Component4 />
      <Component5 />
    </div>
  );
};

export default Button;
