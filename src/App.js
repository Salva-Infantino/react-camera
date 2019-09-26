import React from "react";

export default function App() {
  const onloadHandler = ev => {
    let input = ev.target;
    var freader = new FileReader();
    freader.onload = () => {
      const p = document.querySelector(".resultat");
      let preview = document.querySelector("#preview");
      preview.setAttribute("src", freader.result);
      p.innerHTML = freader.result.replace("data:image/jpeg;base64,", "");
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
      <img src="" id="preview" alt="" />

      <p className="resultat"></p>
    </div>
  );
}
