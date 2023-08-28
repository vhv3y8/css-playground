/**
 *  Elements
 */

export const [htmlInput, cssInput] = [
  document.getElementById("htmlInput"),
  document.getElementById("cssInput")
]

// console.log(htmlInput, cssInput)

/**
 *  Set Shadow DOM
 *  shadow root is => shadow
 */
export const out = document.getElementById("outRoot")
export const shadow = out.attachShadow({ mode: "open" })

// console.log("hi from elems")
