import "./newCollections.css";
import newCollection from "../Assets/ProductData";
import Item from "../items/Item";

const NewCollections = () => {
  return (
    <div className="NewCollections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {newCollection.map((item, i) => {
          return (
            <Item
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

export default NewCollections;
