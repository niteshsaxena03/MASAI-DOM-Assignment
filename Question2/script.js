document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('product-form');
    const priceGraph = document.getElementById('price-graph');
    const ratingGraph = document.getElementById('rating-graph');
    const sortPriceBtn = document.getElementById('sort-price');
    const sortRatingBtn = document.getElementById('sort-rating');

    let products = [];

    // Event Listener for Form Submission
    productForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const price = parseFloat(document.getElementById('price').value);
        const rating = parseFloat(document.getElementById('rating').value);

        const product = { name, price, rating };
        products.push(product);

        updateGraphs();
        productForm.reset();
    });

    // Function to Update the Graphs
    function updateGraphs() {
        priceGraph.innerHTML = '';
        ratingGraph.innerHTML = '';

        products.forEach(product => {
            // Create Price Graph Bar
            const priceBar = document.createElement('div');
            priceBar.classList.add('graph-bar');
            priceBar.innerHTML = `
                <span>${product.name}</span>
                <div class="bar" style="width: ${product.price * 10}px;"></div>
                <span>$${product.price}</span>
            `;
            priceGraph.appendChild(priceBar);

            // Create Rating Graph Bar
            const ratingBar = document.createElement('div');
            ratingBar.classList.add('graph-bar');
            ratingBar.innerHTML = `
                <span>${product.name}</span>
                <div class="bar bar-rating" style="width: ${product.rating * 50}px;"></div>
                <span>${product.rating}★</span>
            `;
            ratingGraph.appendChild(ratingBar);
        });
    }

    // Sorting Functions
    sortPriceBtn.addEventListener('click', () => {
        products.sort((a, b) => a.price - b.price);
        updateGraphs();
    });

    sortRatingBtn.addEventListener('click', () => {
        products.sort((a, b) => b.rating - a.rating);
        updateGraphs();
    });
});
