import React from "react";

export default function App() {
  const onloadHandler = ev => {
    let input = ev.target;
    var freader = new FileReader();
    freader.onload = () => {
      const p = document.querySelector(".resultat");
      let preview = document.querySelector("#preview");
      preview.setAttribute("src", freader.result);
      p.innerHTML = freader.result;
      //console.log(freader.result);
    };
    freader.readAsDataURL(input.files[0]);
  };
  return (
    <div className="App">
      <h1>Image upload preview</h1>
      <input
        type="file"
        name="file"
        accept="image/*"
        capture="camera"
        onChange={onloadHandler}
      />
      <img src="" id="preview" alt="" max-width="150" max-height="150" />

      <p className="resultat"></p>
    </div>
  );
}
