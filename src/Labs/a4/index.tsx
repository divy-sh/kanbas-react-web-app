import React from "react";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariable";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import StringStateVariables from "./StringStateVariable";
import DateStateVariable from "./DateStateVariable";

const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
      }
    
  return(
    <>
      <h1>Assignment 4</h1>
      <ReduxExamples/>
      <ClickEvent/>
      <PassingDataOnEvent/>
      <PassingFunctions theFunction={sayHello}/>
      <EventObject/>
      <Counter/>
      <BooleanStateVariables/>
      <StringStateVariables/>
      <DateStateVariable/>
      <ObjectStateVariable/>
      <ArrayStateVariable/>
      <ParentStateComponent/>      
    </>
  );
};
export default Assignment4;