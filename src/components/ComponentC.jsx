import React from "react";
import { useContext } from "react";
import contextData from "./contextApi";
import UserContext from "./contextApi/ContextUser";

const ComponentC = () => {
  const dataContext = useContext(contextData);

  const userContext = useContext(UserContext);

  const changeData = () => {
    userContext("Avi");
  };

  return (
    <div>
      ComponentC
      <h3>the fname from app component is {dataContext}</h3>
      <button onClick={changeData}>click</button>
    </div>
  );
};

export default ComponentC;
