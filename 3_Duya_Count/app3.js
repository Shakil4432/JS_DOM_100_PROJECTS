function incrementBtn(increment,counter){
    document.getElementById(increment).addEventListener('click',() =>{
        const count_duya = document.getElementById(counter);
        if(count_duya.innerText === "33"){
         return alert("you are end of your counting");
        }
       count_duya.innerText = parseInt(count_duya.innerText)+1;
    })
}

function decrementBtn(decrement,counter){
    document.getElementById(decrement).addEventListener('click',() =>{
        const count_duya = document.getElementById(counter);
        if(count_duya.innerText === "0"){
            return alert("you are end of your decrement counting");
        }
       count_duya.innerText = parseInt(count_duya.innerText)-1;
    })
}

const resetAll = document.getElementById("reset_all").addEventListener('click', () =>{
    const count_duya = document.getElementById("counter_1");
    const count_duya2 = document.getElementById("counter_2");
    const count_duya3 = document.getElementById("counter_3");
    count_duya.innerText = "0";
    count_duya2.innerText = "0";
    count_duya3.innerText = "0";
})

incrementBtn('increment_btn_1','counter_1');
incrementBtn('increment_btn_2','counter_2');
incrementBtn('increment_btn_3','counter_3');

decrementBtn('decrement_btn_1','counter_1');
decrementBtn('decrement_btn_2','counter_2');
decrementBtn('decrement_btn_3','counter_3');
