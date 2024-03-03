import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box } from "@mui/material";
import BodyCard from "./BodyCard";
import PropTypes from "prop-types";
import ExecrcisesCard from "./ExecrcisesCard";
const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, BodyParts }) => {
  console.log("isBodyPart", BodyParts);
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
            {BodyParts ? (
              <BodyCard
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            ) : (
              <ExecrcisesCard exercise={item} />
            )}
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
  isBodyPart: PropTypes.bool,
};
