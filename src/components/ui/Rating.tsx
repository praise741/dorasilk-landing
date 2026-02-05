import React from "react";
import { Star, StarHalf } from "lucide-react";

interface RatingProps {
  rating: number; // between 1 and 5, can be decimal
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<Star key={i} fill="#D4AF37" stroke="#D4AF37" />);
    } else if (rating >= i - 0.5) {
      stars.push(<StarHalf key={i} fill="#D4AF37" stroke="#D4AF37" />);
    } else {
      stars.push(<Star key={i} fill="none" stroke="#807C7C" />);
    }
  }

  return <div style={{ display: "flex", gap: "2px" }}>{stars}</div>;
};

export default Rating;
