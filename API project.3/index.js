// let mainDiv = document.getElementsByClassName("main");
// let API_URL = "https://api.openweathermap.org/data/2.5/weather"
// let API_KEY ="f70137cce8e1a3c022d06c479389d396"
// let btnSumbit = document.getElementById("btnSumbit")
// let bio=document.getElementById("bio")
// async function CallApi(city) {
//     try {
//         // const res = await fetch(url)
//         let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
//         const ans = await res.json()
//         console.log("data ", ans)
        
       
          
//             mainDiv[0].innerHTML += `<div>
//             <p>city : ${ans.name}
//             </p>
//              <p>latitude : ${ans.coord.lat};
//             </p>
//              <p>longitude : ${ans.coord.lon};
//             </p>
//              <p>wind speed : ${ans.wind.speed};
//             </p>
//             </div>`
        
        
       
//     }
//     catch (err) {
//         console.log("Api error in js file", err)
//     }
// }


// btnSumbit.addEventListener("click", (event)=>
// {
//     event.preventDefault()
//     let biovalue = bio.value
//     console.log(biovalue)
//     CallApi(biovalue);
// })


