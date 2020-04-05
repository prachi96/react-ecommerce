import React from "react";
import { SHOP_DATA } from "../../../data/ShoppingItems";
import CollectionPreview from "../../molecules/CollectionPreview";

class ShopPage extends React.Component {
  state = {
    shopData: SHOP_DATA
  };

  render() {
    const { shopData } = this.state;
    return (
      <div className="shop-page">
        {shopData &&
          shopData.map(({ id, ...otherShopDataProps }) => (
            <CollectionPreview key={id} {...otherShopDataProps} />
          ))}
      </div>
    );
  }
}

export default ShopPage;
