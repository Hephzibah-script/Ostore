import "./item.css";

const Items = (props) => {
  return (
    <div className="item">
      <img src={props.productImage} alt="Female_dress" />
      <p>{props.productName}</p>
      <div className="itemPrices">
        <div className="itemPriceNew">{props.newPrice}</div>
        <div className="itemPriceOld">{props.oldPrice}</div>
        <div className="itemCategory">{props.category}</div>
      </div>
    </div>
  );
};

export default Items;
