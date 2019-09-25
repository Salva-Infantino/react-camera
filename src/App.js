import React, { Component } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

export default function App() {
  const onTakePhoto = dataUri => {
    // Do stuff with the dataUri photo...
    console.log(dataUri);
  };

  return (
    <div className="App">
      <Camera
        onTakePhoto={dataUri => {
          onTakePhoto(dataUri);
        }}
      />
    </div>
  );
}
