const options = {
    method: "GET",
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQyMmQ0YmUzZDAwMTU4NDVmZWYiLCJpYXQiOjE2NjgwODkxNDgsImV4cCI6MTY2OTI5ODc0OH0.jbcB-JH_ULcMckN37umnLHzOROT4h5H0Skxg1FakiI0" 
    }
}

async function getProducts() {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", options)
    const products = await response.json()
    return products
}

function renderProducts(listOfProducts){
    let row = document.querySelector(".row")
    
    listOfProducts.forEach((product) => {
        const productCard = document.createElement("div")
        productCard.innerHTML = `
        <div class="card text-center">
        <img src="${product.imageUrl}" class="card-img-top mb-3" alt="${product.name}" />
        <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <h5 class="card-title">${product.brand}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">£${product.price}</p>
            <a href="details.html/product/${product._id}"><button class="btn btn-primary">See Details</button></a>
        </div>
    </div>`
    row.appendChild(productCard) 
    })
}

window.onload = async () => {
    const products = await getProducts()
    renderProducts(products)
}