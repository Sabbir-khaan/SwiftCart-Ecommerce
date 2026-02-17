const loadAllProductsLevel = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((result) => displayAllCategories(result));
};

const removeActiveClass = () => {
  const categoryButton = document.querySelectorAll(".category-btn");
  // console.log(categoryButton);
  categoryButton.forEach((btn) => btn.classList.remove("active"));
};

const productByCategory = (category) => {
  const url = `https://fakestoreapi.com/products/category/${category}`;
  fetch(url)
    .then((res) => res.json())
    .then((result) => {
      removeActiveClass();
      const activeBtn = document.getElementById(`${category}`);
      // console.log(activeBtn);
      activeBtn.classList.add("active");
      displayProductCategories(result);
    });
};

const singleProductDetails = (id) => {
  // console.log(id);
  const url = `https://fakestoreapi.com/products/${id}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((result) => displayProductDetails(result));
};

const displayProductDetails = (productDetails) => {
  console.log(productDetails);
  const productDetailsContainer = document.getElementById(
    "product-details-container",
  );
  productDetailsContainer.innerHTML = `<div class="modal-action">
                <form method="dialog">
                  <button class="btn"><i class="fa-solid fa-x"></i></button>
                </form>
              </div>
              <h1 class="text-2xl">
                <span class="font-bold">Title:</span> <span class="text-xl opacity-80">${productDetails.title}</span>
              </h1>
              <p class="mt-4">
                <span class="text-2xl font-bold">Description:</span> <span class="opacity-70 text-lg">${productDetails.description}</span>
              </p>
              <p class="mt-4 text-lg"><span class="text-xl font-bold">Price:</span> <span class="opacity-70">$${productDetails.price}</span></p>
              <p class="mt-4 text-lg"><span class="text-xl font-bold">Rating:</span> <i class="fa-solid fa-star text-yellow-400"></i> <span class="opacity-70">${productDetails.rating["rate"]}</span> <span class="opacity-70">(${productDetails.rating["count"]})</span></p>
              <div class="flex justify-between gap-3 items-center mt-8">
                <button
                  class="border bg-green-500 text-white border-gray-200 rounded-lg py-1.5 px-3.5 w-full"
                >
                  <i class="fa-solid fa-eye"></i> Buy Now
                </button>
                <button
                  class="text-white border border-gray-200 rounded-lg py-1.5 px-3.5 bg-[#4F39F6] w-full"
                >
                  <i class="fa-solid fa-cart-shopping"></i> Add To Cart
                </button>
              </div>`;
  document.getElementById("product_details_modal").showModal();
};

const displayProductCategories = (productCategory) => {
  // console.log(productCategory);
  const productCategoryContainer =
    document.getElementById("category-container");
  productCategoryContainer.innerHTML = "";

  for (const product of productCategory) {
    // console.log(product);

    const maxTitleLength = 30;
    const title =
      product.title.length > maxTitleLength
        ? product.title.slice(0, maxTitleLength) + "..."
        : product.title;

    const productCard = document.createElement("div");
    productCard.innerHTML = `<div class="border border-gray-200 rounded-xl">
            <img
              class="rounded-t-xl w-120 h-100 p-5 bg-gray-200"
              src="${product.image}"
              alt="Product Image"
            />
            <div class="flex justify-between items-center p-5">
              <h3
                class="text-[#4F39F6] border border-gray-200 rounded-full bg-[#DFE7FF] px-3 py-0.5"
              >
                ${product.category}
              </h3>
              <div class="flex justify-between gap-2 items-center">
                <h3 class="text-yellow-400">
                  <i class="fa-solid fa-star"></i>
                </h3>
                <h3 class="opacity-70">${product.rating["rate"]} (${product.rating["count"]})</h3>
              </div>
            </div>
            <p class="text-xl pl-5">${title}</p>
            <p class="text-xl font-bold pl-5 mt-2">$${product.price}</p>
            <div class="flex justify-between items-center p-5 mt-4">
              <button onclick="singleProductDetails(${product.id})"
                class="text-gray-600 border border-gray-200 rounded-lg py-1.5 px-3.5"
              >
                <i class="fa-solid fa-eye"></i> Details
              </button>
              <button
                class="text-white border border-gray-200 rounded-lg py-1.5 px-3.5 bg-[#4F39F6]"
              >
                <i class="fa-solid fa-cart-shopping"></i> Add
              </button>
            </div>
          </div>`;
    productCategoryContainer.append(productCard);
  }
};

const displayAllCategories = (allCategory) => {
  const categoriesContainer = document.getElementById("categories-container");
  categoriesContainer.innerHTML = "";

  for (const category of allCategory) {
    // console.log(category);
    const categoryDiv = document.createElement("div");
    const btn = document.createElement("button");

    btn.textContent = category;
    btn.id = `${category}`;
    btn.className =
      "hover:bg-[#4F39F6] hover:text-white border border-gray-300 rounded-full px-5 py-1 category-btn";

    btn.addEventListener("click", () => {
      productByCategory(category);
    });

    categoryDiv.append(btn);
    categoriesContainer.append(categoryDiv);
  }
};
loadAllProductsLevel();
