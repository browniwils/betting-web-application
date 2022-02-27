import FeatMatch from "./featMatch";

const FeaturedCarouselMatch = (props) => {
  return (
    <div className={"carousel-item" + props.isActive ? "active" : null}>
      <div className="d-flex justify-content-center">
        <FeatMatch />
        <FeatMatch />
        <FeatMatch />
      </div>
    </div>
  );
};

export default FeaturedCarouselMatch;
