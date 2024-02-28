import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box } from "@mui/material";
import BodyCard from "./BodyCard";
import PropTypes from "prop-types";
import { register } from "swiper/element/bundle";

register();

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={4}
      style={{
        overflowX: "scroll",
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <Box m={"0 40px"} itemID={item.id || item} title={item.id || item}>
            <BodyCard
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HorizontalScrollBar;

HorizontalScrollBar.propTypes = {
  data: PropTypes.array.isRequired,
  bodyPart: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  setBodyPart: PropTypes.func.isRequired,
};
