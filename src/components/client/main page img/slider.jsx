import React from "react";
import { Carousel } from "antd";
import { useGetBannersQuery } from "../../redux/slice/banner";

const contentStyle = {
  color: "#fff",
  textAlign: "center",
  background: "#010308",
  height: "345px",
};

function Slider() {
  const { data, error, isLoading } = useGetBannersQuery();
  console.log(data);

  return (
    <Carousel autoplay className="w-[890px] h-[345px]">
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <h3 style={contentStyle}><img src={item.thumbnail_image} alt="" /></h3>
          </div>
        ))}
    </Carousel>
  );
}

export default Slider;
