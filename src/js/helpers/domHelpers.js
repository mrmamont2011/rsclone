export default function createDomElem(tag, cssClass, source) {
  const image = document.createElement(`${tag}`);
  image.classList.add(`${cssClass}`);
  image.setAttribute('src', `${source}`);
  return image;
}