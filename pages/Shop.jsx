import Hero from "../components/hero/hero";
import NewCollections from "../components/newCollections/NewCollections";
import Offers from "../components/offers/Offers";
import Popular from "../components/popular/Popular";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
    </div>
  );
};

export default Shop;
