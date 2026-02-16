const loadAllProductsLevel = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((result) => displayAllCategories(result));
};

const productByCategory = (category) => {
  const url = `https://fakestoreapi.com/products/category/${category}`;
  fetch(url)
    .then((res) => res.json())
    .then((result) => displayProductCategories(result));
};

const displayProductCategories = (productCategory) => {
  console.log(productCategory);
  const productCategoryContainer =
    document.getElementById("category-container");
  productCategoryContainer.innerHTML = "";

  for (const product of productCategory) {
    console.log(product);

    const maxTitleLength=30;
    const title=product.title.length>maxTitleLength
    ?product.title.slice(0, maxTitleLength) + 
    "..." : product.title;

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
              <button
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
    console.log(category);
    const categoryDiv = document.createElement("div");
    const btn = document.createElement("button");

    btn.textContent = category;
    btn.className =
      "hover:bg-[#4F39F6] hover:text-white border border-gray-300 rounded-full px-5 py-1";

    btn.addEventListener("click", () => {
      productByCategory(category);
    });

    categoryDiv.append(btn);
    categoriesContainer.append(categoryDiv);
  }
};
loadAllProductsLevel();
