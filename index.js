function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Love is a feeling pure and true,",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "1574b6ct4faf434f9d26b8fb5826o0be";
  let context = `Generate poem about${instructionsInput.value}`;
  let prompt =
    "You are a poet who understand love ,Add a emoji after every qoute you generate in the theme of quote.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt='${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = (document = document.querySelector("#poem"));
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳Generating quote for you about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayQuote);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
