// console.log("Start");
// let h1Tag=document.createElement("h1")
// h1Tag.innerText="this is heading h1"
// console.log(h1Tag)
// document.body.append(h1Tag)


// const divEle = document.getElementById("div-one");
// let p = document.createElement("p");
// let span = document.createElement("span");
// span.innerText = "This is a span tag"
// p.textContent = "This is a paragraph"
// console.log(p)

//appendChild is used to append single element at atime
// divEle.appendChild(p);

//append is used to append multiple element at atime
// divEle.append(p,span)

// divEle.after(p)

// divEle.before(p)

// const divSecond = document.getElementsByClassName("div-second");
// console.log(divSecond);
// let h1Ele = divSecond[0].children[0];
// let h4 = document.createElement("h4");
// h4.innerText = "This is a heading 4";
//this add on 1st place in any parent inside
// divSecond[0].prepend(h4);
//this add on last place any parent inside
// divSecond[0].appendChild(h4)


//append in desire position
// divSecond[0].appendChild(h4)
// divSecond[0].children[0].appendChild(h4);
// <h4>​This is a heading 4​</h4>
// divSecond[0].children[1].after(h4);
// divSecond[0].children[1].before(h4);
// divSecond[0].children[0].removeChild(h1)
//this is for removing the element
// divSecond[0].removeChild(h1Ele)
//update the content of any desire element
// h1Ele.innerText = "this is"


//Event-> Event is action which is performed via us.
//event-> click, scroll, resize, keypress,keyup.
//click and scroll and resize

//addeventListner is a method which is always apply on element/tag
//it takes 2 parameteres, eventName and callback function
// callback function is responsible for performing task 



const mypara1 = document.getElementById("mypara1");
const mypara2 = document.getElementById("mypara2");
function msg() {
    console.log("i am printing when click on para1")
}

mypara1.addEventListener("click", msg);
// mypara1.removeEventListener("click", msg); ye galt hai


//right vala code 
// mypara2.addEventListener("click", () => {
//     mypara1.removeEventListener('click', msg);
//     console.log("We have removed out event click in para1")
// })


//ye wala galt hai 
// setTimeout(() => {
//     mypara1.removeEventListener('click', msg);
//     console.log("hat gya ")
// },5000)