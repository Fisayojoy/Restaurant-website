// This script handles interactive features on the menu page.

// Toggle visibility of menu categories
document.addEventListener('DOMContentLoaded', function () {
    const categoryHeaders = document.querySelectorAll('.menu-category h2');

    categoryHeaders.forEach(header => {
        // Add a click event listener to each category header
        header.addEventListener('click', function () {
            // Toggle the visibility of the menu items under the clicked category
            const category = header.nextElementSibling;  // This should be the div containing the items
            category.classList.toggle('hidden');
            
            // Change the text of the header to indicate open/close state
            if (category.classList.contains('hidden')) {
                header.innerHTML = header.innerHTML.replace('−', '+');
            } else {
                header.innerHTML = header.innerHTML.replace('+', '−');
            }
        });
    });
});

// Optional: Filter Menu Items based on Price Range (if needed)
// Example of a simple filter implementation for price range
function filterByPrice(minPrice, maxPrice) {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        const price = parseFloat(item.querySelector('span').innerText.replace('$', '')); // Extract the price
        if (price >= minPrice && price <= maxPrice) {
            item.style.display = 'flex'; // Show item
        } else {
            item.style.display = 'none'; // Hide item
        }
    });
}

// Example Usage: Filter items between $8.99 and $22.99
filterByPrice(8.99, 22.99);
