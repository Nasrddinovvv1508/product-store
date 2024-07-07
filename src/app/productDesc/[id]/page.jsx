let getData = async (id) => {
    let request = await fetch(`https://dummyjson.com/products/${id}`)

    let data = await request.json();

    return { data }
}

function ProductDecs({ params }) {
    let data = getData(params.id)

    return (
        <div>ProductDecs</div>
    )
}

export default ProductDecs