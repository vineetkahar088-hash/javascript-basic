let mainDiv = document.getElementsByClassName("main");

async function CallApi(url) {
    try {
        const res = await fetch(url);
        const ans = await res.json();
        console.log("data ", ans);

        let rating = document.getElementById("rating");
        let price = document.getElementById("price");
        let cat = document.getElementById("cat");
        let all = document.getElementById("active");
        const createCard = (obj) => `
            <div class="items">
                <img src="${obj?.image}" alt="">
                <p><b>Title</b> ${obj?.title.substring(0, 10)}</p>
                <p><b>Description</b> ${obj?.description.substring(0, 20)}</p>
                <p><b>Price</b> ${obj?.price}</p>
                <p><b>Rating</b> ${obj?.rating?.rate}</p>
            </div>
        `;
        const render = (filterFn = () => true) => {
            mainDiv[0].innerHTML = ans
                .filter(filterFn)
                .map(createCard)
                .join("");
        };
        const setActive = (activeBtn) => {
            [all, cat, rating, price].forEach(btn => btn.removeAttribute("id"));
            activeBtn.setAttribute("id", "active");
        };
        render()
        all.addEventListener("click", () => {
            setActive(all);
            render();
        });

        rating.addEventListener("click", () => {
            setActive(rating);
            render(item => item.rating.rate >= 4);
        });

        price.addEventListener("click", () => {
            setActive(price);
            render(item => item.price > 100);
        });

        cat.addEventListener("click", () => {
            setActive(cat);
            render(item => item.category === "jewelery");
        });

    } catch (err) {
        console.log("Api error in js file", err);
    }
}

CallApi("https://fakestoreapi.com/products");
