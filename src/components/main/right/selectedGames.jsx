import OutcomeSelected from "./outcomeSelected";
import PlaceBet from "./placeBet";

const SelectedGames = (props) => {
  return (
    <div className={props.isActive ? "w-100" : "d-none"}>
      {/* <!-- individual games  --> */}
      <OutcomeSelected />
      <OutcomeSelected />
      <OutcomeSelected />
      <PlaceBet />
    </div>
  );
};

export default SelectedGames;
