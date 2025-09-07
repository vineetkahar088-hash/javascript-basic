console.log("***********************")

//ki agar aap divElement ko bahar access karte hai to div ke andar 6 child hai jo ki same hee rahenge har click

// let divEle = document.getElementsByClassName("div1");


const btnEle = document.getElementById("btnId");
// if (divEle[0].children.length > 1) {
btnEle.addEventListener('click', () => {
    //mene yha har click me dom ke hisab se div ko access keaya hai or har child delete hone par tumhara div kee element kee length change hogi
    let divEle = document.getElementsByClassName("div1");
    if (divEle[0].children.length > 1) {
        const pEle = divEle[0].children[0]
        divEle[0].removeChild(pEle);
        console.log("This is clicked", divEle[0].children.length)
        console.log(divEle.length, divEle)
    }
})
// }
