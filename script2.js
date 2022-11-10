async function onFormSubmit(event) {
    event.preventDefault()

    const newProduct = {
        name: document.getElementById("item-name").value,
        description: document.getElementById("description").value, 
        brand: document.getElementById("brand-name").value,
        imageUrl: document.getElementById("image").value,
        price: document.getElementById("price").value
    }

    const options = {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjQyMmQ0YmUzZDAwMTU4NDVmZWYiLCJpYXQiOjE2NjgwODkxNDgsImV4cCI6MTY2OTI5ODc0OH0.jbcB-JH_ULcMckN37umnLHzOROT4h5H0Skxg1FakiI0",
        "Content-Type": "application/json" }
    }

    try {
        const endpoint = "https://striveschool-api.herokuapp.com/api/product/"

        const response = await fetch(endpoint, options)

        if (response.ok) {
            alert("Product successfully added")
        }else{
            throw new Error("Error")
        }

} catch (error) {
    console.log(error)
}
}