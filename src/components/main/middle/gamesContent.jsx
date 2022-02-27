import CountryLeague from "./countryLeague";
import SortedGames from "./sortedGames";

const GamesContent = () => {
  return (
    <div className="d-flex justify-content-between">
      <CountryLeague />
      {/* <!-- sorted games  --> */}
      <SortedGames />
    </div>
  );
};

export default GamesContent;
