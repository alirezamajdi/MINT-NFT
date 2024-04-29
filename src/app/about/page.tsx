"use client"
import React from "react";
import Draggable, { DraggableCore } from "react-draggable";

const Page = () => {
  return (
    <div>
      <Draggable >
        <div>I can now be moved around!</div>
      </Draggable>
      <Draggable>
        <div>I can now be moved around!</div>
      </Draggable>
      <Draggable>
        <div>I can now be moved around!</div>
      </Draggable>
    </div>
  );
};

export default Page;
