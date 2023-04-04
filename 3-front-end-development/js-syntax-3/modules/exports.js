function changeText(domElement, newText) {
    domElement.innerHTML = newText;
  }
   
  function changeToFunkyColor(domElement) {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
   
    domElement.style.color = `rgb(${r}, ${g}, ${b})`;
  }
   
  // export the functions here
  export { changeText, changeToFunkyColor }