const clickBtn = document.getElementById("click_btn");
clickBtn.addEventListener('click', () =>{
    const body = document.getElementById("body");
    body.style.backgroundColor = generatorRGB();
})

const generatorRGB = () =>{
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}