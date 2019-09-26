/*import React from "react";

export default function App() {
  const onloadHandler = ev => {
    let input = ev.target;
    var freader = new FileReader();
    freader.onload = () => {
      const p = document.querySelector(".resultat");
      let preview = document.querySelector("#preview");
      preview.setAttribute("src", freader.result);
      p.innerHTML =
        "'" + freader.result.replace("data:image/jpeg;base64,", "") + "'";
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
      <img src="" id="preview" alt="" width="150" height="150" />

      <p className="resultat"></p>
    </div>
  );
}*/

import React from "react";
import ReactDOM from "react-dom";
import Resizer from "react-image-file-resizer";

export default function App() {
  //const fileChangedHandler = fileChangedHandler.bind(this);

  const fileChangedHandler = event => {
    const p = document.querySelector(".p");
    p.replace(p, "");
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
          document.querySelector("img").setAttribute("src", uri);
          p.innerHTML = uri.replace("data:image/jpeg;base64,", "");
          console.log(uri.replace("data:image/jpeg;base64,", ""));
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
