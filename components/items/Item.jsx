import "./item.css";

const Item = (props) => {
  return (
    <div className="item">
      <img className="itemImage" src={props.image} alt="Female_dress" />
      <p className="itemName">{props.name}</p>
      <div className="itemPrices">
        <div className="itemPriceNew">${props.newPrice}</div>
        <div className="itemPriceOld">${props.oldPrice}</div>
        <div className="itemCategory">{props.category}</div>
      </div>
    </div>
  );
};

export default Item;
