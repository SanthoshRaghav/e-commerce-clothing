import React from "react";
import SHOP_DATA from "./shop.data.js";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(collection => (
          <CollectionPreview {...collection} key={collection.id} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
