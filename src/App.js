import React from "react";

export default function App() {
  const onloadHandler = ev => {
    let input = ev.target;
    var freader = new FileReader();
    freader.onload = () => {
      const resultat = document.querySelector(".resultat");
      let preview = document.querySelector("#preview");
      preview.setAttribute("src", freader.result);
      resultat.innerHTML = freader.result;
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
      <img src="" id="preview" alt="" width="250" height="250" />

      <p className="resultat"></p>
    </div>
  );
}
