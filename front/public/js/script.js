// Import fetch request
import * as ProductController from "./controllers/controllers.js";

document.addEventListener("DOMContentLoaded", async () => {
    // Import my request result.
    const productsArray = await ProductController.getProducts();
    const productsContainer = document.querySelector("#items");

    // Add and display products.
    productsArray.forEach((product) => {
        const productLink = document.createElement("a");

        productLink.setAttribute("href", `./product.html?id=${product._id}`);
        productLink.innerHTML = ` 
            <article>
                <img src="${product.imageUrl}" alt="${product.altTxt}">
                <h3 class="productName">${product.name}</h3>
                <p class="productDescription">${product.description}</p>
            </article>
        `;

        productsContainer.appendChild(productLink);
    });
});
