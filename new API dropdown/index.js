let mainDiv = document.getElementsByClassName("main");


async function CallApi(url) {
    try {
        const res = await fetch(url)
        const ans = await res.json()
        console.log("data ", ans)

        let rating = document.getElementById("rating");
        let price = document.getElementById("price");
        let cat = document.getElementById("cat");
        let all = document.getElementById("active")
        ans.map((sinleObject) => {
            cat.removeAttribute("id");
            rating.removeAttribute("id");
            price.removeAttribute("id");
            all.setAttribute("id", "active")
            mainDiv[0].innerHTML += ` <div class="items">
            <img src="${sinleObject?.image}" alt="">
            <p><b>Title</b> ${sinleObject?.title.substring(0, 10)}</p>
            <p<b>Discription </b>${sinleObject?.description.substring(0, 20)
                }</p>
            <p><b>Price </b>${sinleObject?.price
                }</p>
            <p><b>Rating</b>   ${sinleObject?.rating?.rate}</p>
        </div>`
        }
        )
        all.addEventListener("click", () => {
            cat.removeAttribute("id");
            rating.removeAttribute("id");
            price.removeAttribute("id");
            all.setAttribute("id", "active")


            ans.map((sinleObject) => {
                cat.removeAttribute("id");
                rating.removeAttribute("id");
                price.removeAttribute("id");
                all.setAttribute("id", "active")
                mainDiv[0].innerHTML += ` <div class="items">
            <img src="${sinleObject?.image}" alt="">
            <p><b>Title</b> ${sinleObject?.title.substring(0, 10)}</p>
            <p<b>Discription </b>${sinleObject?.description.substring(0, 20)
                    }</p>
            <p><b>Price </b>${sinleObject?.price
                    }</p>
            <p><b>Rating</b>   ${sinleObject?.rating?.rate}</p>
        </div>`
            })
        })

        rating.addEventListener("click", () => {
            cat.removeAttribute("id");
            all.removeAttribute("id");
            price.removeAttribute("id");
            rating.setAttribute("id", "active")
            mainDiv[0].innerHTML = ''
            ans.filter((sinleObject) => {
                if (sinleObject.rating.rate >= 4) {
                    mainDiv[0].innerHTML += ` <div class="items">
                <img src="${sinleObject?.image}" alt="">
                <p><b>Title</b> ${sinleObject?.title.substring(0, 10)}</p>
                <p<b>Discription </b>${sinleObject?.description.substring(0, 20)
                        }</p>
                <p><b>Price </b>${sinleObject?.price
                        }</p>
                <p><b>Rating</b>   ${sinleObject?.rating?.rate}</p>
            </div>`
                }
            })
        })

        price.addEventListener("click", () => {
            all.removeAttribute("id");
            rating.removeAttribute("id");
            cat.removeAttribute("id");
            price.setAttribute("id", "active")
            mainDiv[0].innerHTML = ''
            ans.filter((sinleObject) => {
                if (sinleObject.price > 100) {
                    mainDiv[0].innerHTML += ` <div class="items">
                <img src="${sinleObject?.image}" alt="">
                <p><b>Title</b> ${sinleObject?.title.substring(0, 10)}</p>
                <p<b>Discription </b>${sinleObject?.description.substring(0, 20)
                        }</p>
                <p><b>Price </b>${sinleObject?.price
                        }</p>
                <p><b>Rating</b>   ${sinleObject?.rating?.rate}</p>
            </div>`
                }
            })
        })

        cat.addEventListener("click", () => {
            all.removeAttribute("id");
            rating.removeAttribute("id");
            price.removeAttribute("id");
            cat.setAttribute("id", "active")
            mainDiv[0].innerHTML = ''
            ans.filter((sinleObject) => {
                if (sinleObject.category === "jewelery") {
                    mainDiv[0].innerHTML += ` <div class="items">
                <img src="${sinleObject?.image}" alt="">
                <p><b>Title</b> ${sinleObject?.title.substring(0, 10)}</p>
                <p<b>Discription </b>${sinleObject?.description.substring(0, 20)
                        }</p>
                <p><b>Price </b>${sinleObject?.price
                        }</p>
                <p><b>Rating</b>   ${sinleObject?.rating?.rate}</p>
            </div>`
                }
            })
        })
    }
    catch (err) {
        console.log("Api error in js file", err)
    }
}

CallApi("https://fakestoreapi.com/products");