import React from "react";
import ReactDOM from "react-dom";
import Resizer from "react-image-file-resizer";

export default function App() {
  //const fileChangedHandler = fileChangedHandler.bind(this);

  const fileChangedHandler = event => {
    const p = document.querySelector(".p");
    p.innerHTML.replace(p, "");
    var fileInput = false;
    if (event.target.files[0]) {
      fileInput = true;
    }
    if (fileInput) {
      Resizer.imageFileResizer(
        event.target.files[0],
        100,
        100,
        "JPEG",
        75,
        90,
        uri => {
          let uriNew = uri.replace("data:image/jpeg;base64,", "");
          document.querySelector("img").setAttribute("src", uri);
          p.innerHTML = uriNew;
          //console.log(uriNew);
        },
        "base64"
      );
    }
  };

  return (
    <div className="App">
      <h1>title</h1>
      <img src="" alt="" max-width="200" height="200" />
      <input
        type="file"
        accept="image/*"
        capture
        onChange={fileChangedHandler}
      />
      <p className="p"></p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
