// const popup = document.getElementById('mypopup'),
//       popupTogle = document.getElementById('myBtn'),
//       popupClose = document.querySelector('.close');

// popupTogle.onclick = () => {
//   popup.style.display = "block";
// }
// popupClose.onclick = () => {
//   popup.style.display = "none";
// }
// window.onclick = (e) => {
//   if (e.target == popup) {
//     popup.style.display = "none";
//   }
// }


const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const image = 'https://cdn.icon-icons.com/icons2/1416/PNG/128/basic-webpage-img-txt_97846.png'

class GoodsItem {
  constructor(title, price, image) {
    this.product_name = title;
    this.price = price;
    this.image = image;
  }
  render() {
    return `
      <div class="goods-item">
      <img src="${image}" alt="image">
      <h3>${this.product_name}</h3>
      <p>${this.price} $</p>
      <div class="product__button">
        <button type="button">Добавить</button>
      </div>
    </div>`;
  }
}


class GoodsList {
  constructor() {
    this.goods = [];
    this._fetchGoods()
      .then(data => {
        this.goods = [...data];
        this.render()
      })
  }
  /*
  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150, image: 'https://cdn3.iconfinder.com/data/icons/fashion-beauty-vol-1/512/z1-shirt_formal_apparel_clothes-128.png' },
      { title: 'Socks', price: 50, image: 'https://cdn1.iconfinder.com/data/icons/clothing-and-accessories-4/136/socks_6-128.png' },
      { title: 'Jacket', price: 350, image: 'https://cdn3.iconfinder.com/data/icons/fashion-beauty-vol-1/512/z4-suit_jacket_formal_business-128.png' },
      { title: 'Shoes', price: 250, image: 'https://cdn1.iconfinder.com/data/icons/basketball-in-cartoon-style/500/SingleCartoonBasketballYulia_3-128.png' },
    ];
  }
  */
  _fetchGoods() {
    return fetch(`${API_URL}/catalogData.json`)
      .then(result => result.json())
      .catch(error => {
        console.log(error);
      }) 
  }

  // calcSumm() {
  //   return this.goods.reduce((prev, item) => {
  //     return prev + item.price;
  //   }, 0)
    // let s = 0;
    // this.goods.forEach(item => {
    //   s += item.price;
    // })
  // }
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.product_name, good.price, good.image);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
}
const list = new GoodsList();
// list.fetchGoods();
// list.render();

/* 
  Класс корзины
  Метод получения содержания корзины
  Метод для рендера корзины 
  Метод появления корзины
*/
  class Cart {
    constructor(container = '.popup') {
      this.container = container;
      this.goods = [];

      this._clickBasket();
      this._getBasketItem()
        .then(data => {
          this.goods = [...data.contents];
          this.render()
        });
    }
    
    _getBasketItem() {
      return fetch(`${API_URL}/getBasket.json`)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    }

    render() {
      const block = document.querySelector(this.container);
      for (let product of this.goods) {
        const productObj = new CartItem();

        block.insertAdjacentHTML('beforeend', productObj.render(product));
      }
    }

    _clickBasket() {
      document.querySelector(".cart-text").addEventListener('click', () => {
        document.querySelector(this.container).classList.toggle('invisible');
      });
    }
  }

/* 
Класс наполнения корзины
Метод увеличения и уменьщения количества товара
Метод удаления из корзины
Метод рендер
*/

class CartItem {
  render(product) {
    return `
      <div class="goods-item">
      <img src="${image}" alt="image">
      <h3>${product.product_name}</h3>
      <p>${product.price} $</p>
      <p>Колличество товара: ${product.quantity}</p>
      <p class = "calcSumm">Общая сумма заказа: ${product.quantity * product.price} $</p>
      <div class="product__button">
        <button type="button" class = "addProduct">Убрать</button>
        <button type="button" class = "minusProduct">Добавить</button>
      </div>
      <button class = "delBtn">&times;</button>
    </div>`;
  }
}

const basket = new Cart();