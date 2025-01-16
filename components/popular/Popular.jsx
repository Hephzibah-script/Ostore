import "./popular.css";
import productData from "../Assets/ProductData";
import Items from "../items/Item";

const Popular = () => {
  return (
    <div className="popular">
      <h1>WOMEN FASHION TRENDS</h1>
      <hr />
      <div className="popularItems">
        {productData.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              newPrice={item.newPrice}
              oldPrice={item.oldPrice}
              category={item.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
