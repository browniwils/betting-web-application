import Carousel from "./carousel";

const FeaturedMatch = () => {
  return (
    <div className="bg-light border-bottom">
      <div className="border-bottom border-warning w-100">
        <div className="w-25 rounded-bottom text-center mx-auto fs-5 fst-italic bg-gradient bg-warning">
          Featured Matches
        </div>
      </div>
      <Carousel />
    </div>
  );
};

export default FeaturedMatch;
