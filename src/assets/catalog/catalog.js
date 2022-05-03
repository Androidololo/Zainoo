
async function getCatalog() {
  let response = await fetch('https://fakestoreapi.com/products?limit=12')
  let content = await response.json()

let key;

for(key in content) {
  products.innerHTML +=
  '<div id="product" class="product"><img src="${content[key].image}" alt="">  <span class="description">${content[key].description}</span>  <span class="price">${content[key].price}</span>  <div class="footer">      <span class="rating">stars</span>      <button class="product__add"> <img src="./assets/img/heart.svg" alt=""  style="vertical-align:middle">              <span class="button-text">Add to cart</span>          </button>  </div></div>'

}

console.log(content)
}

getCatalog()
