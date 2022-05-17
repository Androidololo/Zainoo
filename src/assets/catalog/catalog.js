async function getCatalog() {
  let response = await fetch("https://fakestoreapi.com/products?limit=12");
  let content = await response.json();

  let key;
  const products = document.getElementById('products')
  for (key in content) {
    products.innerHTML += `
    <li id="product" class="product">
    <img class="product__img" src="${content[key].image}" alt="">
    <span class="product__name">${content[key].title}</span>
      <span class="product__price">&#36;${content[key].price}</span>      
      <span class="product__description">${content[key].description}</span>
        <div class="footer">
          <span class="rating">rating</span>
          <button class="product__add"> <img src="./assets/img/heart.svg" alt=""  style="vertical-align:middle">            
          <span class="button-text">Add to cart</span>        
          </button> 
        </div>
    </li>
        `;
  }
  console.log(content);
}

getCatalog();
