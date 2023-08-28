import { createStyleElement } from "./helpers.js"
import { cssInput, htmlInput, shadow } from "./elems.js"

console.log("script.js")

let currHtmlIn, currCssIn

function updateOutput() {
  shadow.innerHTML = currHtmlIn
  shadow.append(createStyleElement(currCssIn))
}

/**
 *  Temporary
 */

currHtmlIn = `<label for="name">Name (4 to 8 characters):</label>

<input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" />`
htmlInput.value = currHtmlIn
currCssIn = `label {
    display: block;
    font:
      1rem 'Fira Sans',
      sans-serif;
  }
  
  input,
  label {
    margin: 0.4rem 0;
  }
  `
cssInput.value = currCssIn
updateOutput()

/**
 *  Event Listeners
 */

htmlInput.addEventListener("change", (e) => {
  currHtmlIn = htmlInput.value
  //   console.log(currHtmlIn)
  updateOutput()
})

cssInput.addEventListener("change", (e) => {
  currCssIn = cssInput.value
  //   console.log(currCssIn)
  updateOutput()
})
