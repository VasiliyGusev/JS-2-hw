
const goods = [
  { title: 'Shirt', price: 150, image: 'https://cdn3.iconfinder.com/data/icons/fashion-beauty-vol-1/512/z1-shirt_formal_apparel_clothes-128.png'},
  { title: 'Socks', price: 50, image: 'https://cdn1.iconfinder.com/data/icons/clothing-and-accessories-4/136/socks_6-128.png'},
  { title: 'Jacket', price: 350, image: 'https://cdn3.iconfinder.com/data/icons/fashion-beauty-vol-1/512/z4-suit_jacket_formal_business-128.png'},
  { title: 'Shoes', price: 250, image: 'https://cdn1.iconfinder.com/data/icons/basketball-in-cartoon-style/500/SingleCartoonBasketballYulia_3-128.png'},
];

const renderGoodsItem = ({title = 'Название', price = '100000', image = 'https://cdn0.iconfinder.com/data/icons/feather/96/591259-image-128.png'}) => `
    <div class="goods-item">
      <img src="${image}" alt="image">
      <h3>${title}</h3>
      <p>${price} $</p>
      <div class="product__button">
        <button type="button">Добавить</button>
      </div>
    </div>
  `;

const renderGoodsList = (list) => {
  let goodsList = list.map(item => renderGoodsItem(item));
  document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

renderGoodsList(goods);

// onload = () => {
//   renderGoodsList(goods)
// }