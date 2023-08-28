export function createStyleElement(text) {
  const elem = document.createElement("style")
  elem.textContent = text
  return elem
}
