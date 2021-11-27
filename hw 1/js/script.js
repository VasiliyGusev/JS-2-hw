
class GoodsItem {
  constructor(title, price, image) {
    this.title = title;
    this.price = price;
    this.image = image;
  }
  render() {
    return `<div class="goods-item">
      <img src="${this.image}" alt="image">
      <h3>${this.title}</h3>
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
  }
  fetchGoods() {
    this.goods = [
      { title: 'Shirt', price: 150, image: 'https://cdn3.iconfinder.com/data/icons/fashion-beauty-vol-1/512/z1-shirt_formal_apparel_clothes-128.png' },
      { title: 'Socks', price: 50, image: 'https://cdn1.iconfinder.com/data/icons/clothing-and-accessories-4/136/socks_6-128.png' },
      { title: 'Jacket', price: 350, image: 'https://cdn3.iconfinder.com/data/icons/fashion-beauty-vol-1/512/z4-suit_jacket_formal_business-128.png' },
      { title: 'Shoes', price: 250, image: 'https://cdn1.iconfinder.com/data/icons/basketball-in-cartoon-style/500/SingleCartoonBasketballYulia_3-128.png' },
    ];
  }
  calcSumm() {
    return this.goods.reduce((prev, item) => {
      return prev + item.price;
    }, 0)
  }
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price, good.image);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
}
const list = new GoodsList();
list.fetchGoods();
list.render();

/* 
  Класс корзины
  Метод показа корзины
  Метод для рендера корзины 
*/
  class Cart {
    show() {}
    render() {}
  }

/* 
Класс наполнения корзины
Метод увеличения и уменьщения количества товара
Метод удаления из корзины
Метод рендер
*/

class CartItem {
  calcCount() {}
  delete() {}
  render() {}
}