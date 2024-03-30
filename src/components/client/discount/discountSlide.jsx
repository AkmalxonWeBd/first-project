import "./discount.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./discountProduct";
import { useGetProductQuery } from "../../redux/slice/product";
import RateStar from "../rate/rate";
import { FaRegHeart } from "react-icons/fa";
import { LiaEyeSolid } from "react-icons/lia";

const Skeleton = () => (
  <div className="animate-pulse w-48 h-48 bg-gray-300 rounded-lg mr-20"></div>
);

function DiscountSlide() {
  const { data, isLoading } = useGetProductQuery();

  if (!data || isLoading) {
    const skeletonArray = new Array(5).fill(null);
    return (
      <div className="DiscountSlide flex items-center">
        {skeletonArray.map((_, index) => (
          <Skeleton key={index} />
        ))}
      </div>
    );
  }

  if (!Array.isArray(data)) {
    return <div>Data is not in the expected format.</div>;
  }

  const renderProducts = () => {
    return data.map(product => (
      <div key={product.id} className="product-item">
        <img className="product-image" src={product?.image} alt={product.title} />
        <div className="product-info">
          <div className="rate">
            <RateStar />
            <div className="flex flex-col items-start absolute right-10 top-2">
              <FaRegHeart />
              <LiaEyeSolid />
            </div>
          </div>
          <div className="ahs">
            <h2 className="flex gap-1">Mahsulot nomi:{product?.title}</h2>
            <p className="flex">Narxi:{product?.price} so'm</p>
            <p>description:{product?.description.length > 100 ? product.description.slice(0, 100) + "..." : product.description}</p>
          </div>
          <button className="add-to-basket">Add to Basket</button>
        </div>
      </div>
    ));
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="DiscountSlide">
      <Carousel responsive={responsive}>
        {renderProducts()}
      </Carousel>
    </div>
  );
}
export default DiscountSlide;
