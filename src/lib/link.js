export function addLink(element, pageName) {
  const aTag = document.createElement("a");
  aTag.setAttribute("href", pageName);
  aTag.appendChild(element);
  return aTag;
}
