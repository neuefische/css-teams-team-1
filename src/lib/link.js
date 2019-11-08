export function addLink(element /*, pageName*/) {
  const aTag = document.createElement("a");
  aTag.setAttribute("href", "apple.html");
  aTag.appendChild(element);
  return aTag;
}
