const params = new URLSearchParams(
    window.location.search
  )
  const productId = params.get('_id')
  const endpoint = "https://striveschool-api.herokuapp.com/api/product/"
  const options = {
    method: "GET",
    headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQyMmQ0YmUzZDAwMTU4NDVmZWYiLCJpYXQiOjE2NjgwODkxNDgsImV4cCI6MTY2OTI5ODc0OH0.jbcB-JH_ULcMckN37umnLHzOROT4h5H0Skxg1FakiI0",}
}
  async function getProduct() {

    const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/${product._id}`, options)
    const product = await response.json()
    return product
  }

  function renderProducts(product) {
    let row = document.querySelector(".row")
        const productCard = document.createElement("div")
        productCard.innerHTML = `
        <div class="card text-center">
        <img src="${product.imageUrl}" class="card-img-top mb-3" alt="${product.name}" />
        <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <h5 class="card-title">${product.brand}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">£${product.price}</p>
            <button type="button" class="btn btn-success" onclick="onEdit()">Edit Product</button>
            <button type="button" class="btn btn-danger" onclick="onDelete()">Delete Product</button>
        </div>
    </div>`
    row.appendChild(productCard) 
  }

  window.onload = async () => {
    const product = await getProduct()
    renderProducts(product)
  }

  async function onDelete() {

    try {

      if (confirm("Do you really want to delete this event?")) {
        const options = { method: 'DELETE' }
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/product/${product._id}`,
          options
        )
        if (response.ok) {
          // This is like an a tag, but in JavaScript
          window.location.assign('index.html')
        } else {
          alert("Error while deleting!")
        }
      }

    } catch (error) {
      alert(`Some erorr occured: ${error}`)
    }

  }

  function onEdit() {
    window.location.assign(`backoffice.html/product/${product._id}`)
  }