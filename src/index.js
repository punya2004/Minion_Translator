import "./styles.css";

var txtInput = document.querySelector("#input");
var btnTranslate = document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getServerURL(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandeler(error) {
  console.log("error ocured", error);
}

function clickHandler() {
  var inText = txtInput.value;
  console.log(inText);

  fetch(getServerURL(inText))
    .then((response) => response.json())
    .then((json) => {
      var outputValue = json.contents.translated;
      console.log(outputValue);
      txtOutput.innerText = outputValue;
    })
    .catch(errorHandeler);
}

btnTranslate.addEventListener("click", clickHandler);
