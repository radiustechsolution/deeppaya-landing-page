import StarRatings from "react-star-ratings";

interface Type {
  rating: number;
  color?: string;
  starSize?: string;
}

export const RatingComp = ({ starSize, rating, color }: Type) => {
  return (
    <StarRatings
      rating={rating}
      starRatedColor={color ? color : "#E59C02"}
      numberOfStars={5}
      name="rating"
      starDimension={starSize ? starSize : "15px"}
      starSpacing="2px"
    />
  );
};
