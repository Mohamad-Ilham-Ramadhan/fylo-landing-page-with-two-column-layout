export default function centeringPathInSvg(path) {
  const pathRect = path.getBoundingClientRect();
  const pathHeight = pathRect.height;
  const pathWidth = pathRect.width;

  const parentSvg = path.parentElement;
  const parentSvgRect = parentSvg.getBoundingClientRect();
  const parentSvgHeight = parentSvgRect.height;
  const parentSvgWidth = parentSvgRect.width;

  path.style.transform = `translate(${Math.round(
    (parentSvgWidth - pathWidth) / 2
  )}px, ${Math.round((parentSvgHeight - pathHeight) / 2)}px)`;
}
