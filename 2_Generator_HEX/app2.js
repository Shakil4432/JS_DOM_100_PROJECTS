const clickBtn = document.getElementById("click_btn");
clickBtn.addEventListener('click', () => {
    const body = document.getElementById("body");
    const bodyColor = body.style.backgroundColor = generatorRGB();
    const input = document.getElementById("input");
    input.value = bodyColor;

    const heading = document.getElementById("heading");
    heading.style.textShadow = generatorRGB();
    heading.style.color = generatorRGB();
})

const generatorRGB = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `#${r.toString(16).toUpperCase()}${g.toString(16).toUpperCase()}${b.toString(16).toUpperCase()}`;
}

const createDomElement = () => {

    const input = document.getElementById("input");
    const inputValue = input.value;
    navigator.clipboard.writeText(inputValue);

    generateToastMsg(`${inputValue} copied`)

}

const generateToastMsg = (toastMsg) => {
    const toastMsgDiv = document.getElementById("toastMsgDiv");
    toastMsgDiv.innerHTML = "";
    toastMsgDiv.classList.add("toast-msg-slide-in");
    const div = document.createElement('div');
    div.innerHTML = `
        <div>
          <h1>${toastMsg}</h1>
        </div>
    `
    toastMsgDiv.appendChild(div);

    setTimeout(() => {

        toastMsgDiv.classList.remove("toast-msg-slide-in");
        toastMsgDiv.classList.add("toast-msg-slide-out");
        toastMsgDiv.innerHTML = "";
        
    }, 3000);
}