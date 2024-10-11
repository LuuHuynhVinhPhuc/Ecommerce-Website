// Sample product data
const products = [
    { id: 1, name: "Laptop gaming", brand: "Asus", price: 25000000, category: "Điện tử", image: "./assets/items/electric/laptop1.png" },
    { id: 2, name: "Iphone 16 xanh lưu ly", brand: "Apple", price: 30000000, category: "Điện tử", image: "./assets/items/electric/iphone-16-xanh-luu-ly.png" },
    { id: 3, name: "Áo thun nam", brand: "Nike", price: 450000, category: "Thời trang", image: "./assets/items/fashion/ao-pop-vai-dry.png" },
    { id: 4, name: "Quần kaki nam", brand: "Levi's", price: 850000, category: "Thời trang", image: "./assets/items/fashion/-17768-slide-products-63b56092e0.png" },
    { id: 5, name: "Tủ lạnh Panasonic", brand: "Panasonic", price: 9300000, category: "Đồ gia dụng", image: "./assets/items/household/tu-lanh-panason_main_840_1020.pn.png" },
    { id: 6, name: "Iphone 16 pro titan sa mạc", brand: "Apple", price: 25000000, category: "Điện tử", image: "./assets/items/electric/iphone-16-pro-titan-sa-mac_3.png" },
    { id: 7, name: "Máy nước nóng", brand: "Beko", price: 3300000, category: "Đồ gia dụng", image: "./assets/items/household/may-nuoc-nong-t_main_499_1020.pn.png" },
    { id: 8, name: "Áo khoác nữ", brand: "Zara", price: 1200000, category: "Thời trang", image: "./assets/items/fashion/ao-khoac-co-hong.png" },
    { id: 9, name: "Máy hút bụi", brand: "Electrolux", price: 7500000, category: "Đồ gia dụng", image: "./assets/items/household/may-hut-bui-kho_main_365_1020.pn.png" },
    { id: 10, name: "Tai cầm chơi game", brand: "Sony", price: 2800000, category: "Điện tử", image: "./assets/items/electric/tay-cam-choi-game-den.png" },
    { id: 11, name: "Giày thể thao", brand: "Adidas", price: 1800000, category: "Thời trang", image: "./assets/items/fashion/giay-bong-da.png" },
    { id: 12, name: "Nồi chiên không dầu", brand: "Ferroll", price: 3500000, category: "Đồ gia dụng", image: "./assets/items/household/noi-chien-khong_main_430_450.png.png" },
    { id: 13, name: "Máy ảnh DSLR", brand: "Canon", price: 15000000, category: "Điện tử", image: "./assets/items/electric/may-anh-canon.png" },
    { id: 14, name: "Áo vest trắng", brand: "Brada", price: 1500000, category: "Thời trang", image: "./assets/items/fashion/quan-kaki-tui-kieu-trang-tri-day.png" },
    { id: 15, name: "Máy xay sinh tố", brand: "Fafal", price: 2500000, category: "Đồ gia dụng", image: "./assets/items/household/may-xay-sinh-to_main_42_450.png.png" },
    { id: 16, name: "Iphone 14 pro max 256GB", brand: "Apple", price: 2500000, category: "Điện tử", image: "./assets/items/electric/iphone-14-pro-max-256gb.png" },
    { id: 17, name: "Áo cotton vải gân", brand: "Zara", price: 800000, category: "Thời trang", image: "./assets/items/fashion/ao-cotton-vai-gan.png" },
    { id: 18, name: "Samsung S24 Ultra", brand: "Samsung", price: 25500000, category: "Điện tử", image: "./assets/items/electric/samsung-galaxy-s24-ultra-xam.png" }
];

// Function to display products
function displayProducts(productList) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = ''; // Clear existing products

    productList.forEach(product => {
        const productCard = `
            <div class="col-md-4 mb-3">
                <div class="card h-100">
                    <div class="card-img-wrapper">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text filter">${product.brand}</p>
                        <p class="card-text flex-grow-1">
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-half text-warning"></i>
                        </p>
                        <p class="card-text"><strong>Giá: ${product.price.toLocaleString('vi-VN')}đ</strong></p>
                        <a href="./details.html" class="btn btn-primary mt-auto">Xem chi tiết sản phẩm</a>
                    </div>
                </div>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });
}

// Initial display of all products
displayProducts(products);

// // Function to populate brand filter options
// function populateBrandFilter() {
//     const brandFilter = document.getElementById('brand-filter');
//     const brands = [...new Set(products.map(product => product.brand))];
    
//     // Clear existing options
//     brandFilter.innerHTML = '<option value="" selected disabled>Thương hiệu</option>';
    
//     // Add brand options
//     brands.forEach(brand => {
//         const option = document.createElement('option');
//         option.value = brand;
//         option.textContent = brand;
//         brandFilter.appendChild(option);
//     });
// }

// // Call the function to populate brand filter
// populateBrandFilter();

// // Show brand options when customer chooses a category
// document.getElementById('category-filter').addEventListener('change', function() {
//     const selectedCategory = this.value;
//     const brandFilter = document.getElementById('brand-filter');
    
//     // Clear existing brand options
//     brandFilter.innerHTML = '<option value="" selected disabled>Thương hiệu</option>';
    
//     // Filter brands based on the selected category
//     const brandsInCategory = [...new Set(products
//         .filter(product => product.category === selectedCategory)
//         .map(product => product.brand))];
    
//     // Add filtered brand options
//     brandsInCategory.forEach(brand => {
//         const option = document.createElement('option');
//         option.value = brand;
//         option.textContent = brand;
//         brandFilter.appendChild(option);
//     });
    
//     // Enable the brand filter
//     brandFilter.disabled = false;
// });


// // Event listener for apply filter button
// document.getElementById('apply-filter').addEventListener('click', function() {
//     const selectedBrand = document.getElementById('brand-filter').value;
//     const selectedCategory = document.getElementById('category-filter').value;
//     const selectedPrice = document.getElementById('price-filter').value;

//     if (!selectedCategory || !selectedPrice) {
//         alert('Please input all filter options');
//         return;
//     }

//     let filteredProducts = products;

//     if (selectedBrand !== 'Thương hiệu') {
//         filteredProducts = filteredProducts.filter(product => product.brand === selectedBrand);
//     }

    

//     displayProducts(filteredProducts);
// });

// Function to filter products based on search input
function filterProducts(searchTerm) {
    const filteredProducts = products.filter(product => {
        const searchString = `${product.name} ${product.brand} ${product.category}`.toLowerCase();
        return searchString.includes(searchTerm.toLowerCase());
    });
    displayProducts(filteredProducts);
}

// Event listener for search input
const searchInput = document.querySelector('.search .form-control');
const searchButton = document.querySelector('.search .btn-primary');

searchInput.addEventListener('input', function() {
    filterProducts(this.value);
});

searchButton.addEventListener('click', function() {
    filterProducts(searchInput.value);
});

// Event listener for Enter key in search input
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        filterProducts(this.value);
    }
});


