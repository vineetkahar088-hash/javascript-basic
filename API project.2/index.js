let bioText = document.getElementById("bio");

let btnSumbit = document.getElementById("btnSumbit");

let formDataDiv = document.getElementsByClassName("formData");
formDataDiv[0].removeAttribute("id")

btnSumbit.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(bioText.value)
    if (bioText.value === "") {
        alert("Task Cannot empty");
        return;
    }
    let formDataDivContainer = document.createElement("div");
    let pEle = document.createElement("p");
    pEle.textContent = bioText.value

    let updateBtn = document.createElement("button");
    updateBtn.innerText = "Update"
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete"
    formDataDivContainer.append(pEle)
    formDataDivContainer.append(updateBtn, deleteBtn)
    formDataDivContainer.setAttribute("id", "form")

    bioText.value = ""
    formDataDiv[0].append(formDataDivContainer)
    deleteBtn.addEventListener("click", () => {
        formDataDiv[0].removeChild(formDataDivContainer)
    })
    updateBtn.addEventListener("click", () => {

        if (bioText.value === "") {

            bioText.focus()
            updateBtn.innerText = "save"
            return;
        } else {

            pEle.textContent = bioText.value
            updateBtn.innerText = "Update"
            formDataDivContainer.prepend(pEle);
            bioText.value = ""

        }

    })

})


// bioText.addEventListener("click", (event) => {

// })