//assess the tags


//2. asses the btns 
let addbtnId = document.getElementById("addbtnId");
let dltbtnEle = document.getElementById("dltbtnId");

//attach event listners to add buttons
addbtnId.addEventListener("click", () => {
    let isBhandara=true;
    let divEle = document.getElementsByClassName("div1");
    let childDiv = document.createElement("div");
    console.log("clicked")

    //creating para
    let pEle = document.createElement("p");

    //adding content to the para
    pEle.textContent = "this is a para";
    

    //creating update button
    let updEle = document.createElement("button");
    updEle.textContent = "update button";
    updEle.setAttribute("class", "updBtn")
    //creating delete button
    let dltEle = document.createElement("button");
    dltEle.textContent = "delete button";
    dltEle.setAttribute("class", "dltBtn")

    childDiv.appendChild(pEle)
    childDiv.appendChild(updEle)
    childDiv.appendChild(dltEle)


    childDiv.setAttribute("class", "parathana")
    divEle[0]?.appendChild(childDiv);

    updEle.addEventListener("click", () => {
        if(isBhandara){
        pEle.textContent = "this is a para";
    }
    else
        pEle.textContent = "chalo bhandara chle";
        // pEle.textContent = "chalo bhandara chle";
        isBhandara=!isBhandara
    }
    )
    dltEle.addEventListener("click",()=>{
         divEle[0]?.removeChild(childDiv);
    })

}
)

// dltbtnEle.addEventListener("click",()=>{

// })