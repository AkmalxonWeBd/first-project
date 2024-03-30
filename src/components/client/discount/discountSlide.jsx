import "./discount.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./discountProduct";
import { productData, responsive } from "./data";

function DiscountSlide() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.salePrice}
      description={item.description}
    />
  ));
  

  return (
    <div className="DiscountSlide">
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
export default DiscountSlide