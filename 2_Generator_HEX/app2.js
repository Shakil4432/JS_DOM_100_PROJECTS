const clickBtn = document.getElementById("click_btn");
clickBtn.addEventListener('click', () =>{
    const body = document.getElementById("body");
    const bodyColor = body.style.backgroundColor = generatorRGB();
    const input = document.getElementById("input");
    input.value = bodyColor;

    const heading = document.getElementById("heading");
    heading.style.textShadow = generatorRGB();
    heading.style.color = generatorRGB();
})

const generatorRGB = () =>{
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `#${r.toString(16).toUpperCase()}${g.toString(16).toUpperCase()}${b.toString(16).toUpperCase()}`;
}