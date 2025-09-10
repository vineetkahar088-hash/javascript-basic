let divContainer = document.getElementById("container");
console.log(divContainer.innerHTML)
async function apicalling(url) {
    try {
        divContainer.innerHTML = `<div class="spinner-border" style="margin-left: 44em; margin-top: 4em;"></div>`
        const data = await fetch(url);
        const res = await data.json();
        divContainer.innerHTML=''
        res.map((d) => {
            return (
                divContainer.innerHTML += `<div  class="card bg-secondary" style="width: 18rem;"> 
                         <img src=${d.img} class="card-img-top" alt="">
                <p class="card-text" >Name:${d.name}</p>
                <p class="card-text" >Discription:${d.dsc}</p>
                <p class="card-text" >Rate:${d.rate}</p>
                <p class="card-text" >Price:${d.price}</p>
                <p class="card-text" >Country:${d.country}</p>
        </div>`
            )
        })
    }
    catch (err) {
        console.log("error in fetching in data", err)
    }
}

apicalling("https://free-food-menus-api-two.vercel.app/bbqs")