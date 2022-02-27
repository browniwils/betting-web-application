import DateColumn from "./dateColumn";
import GameFlow from "./gamesFlow";

const SortedGames = () => {
  return (
    <div className="w-100 overflow-auto">
      {/* <!-- outcome labels  --> */}
      <div className="position-sticky d-flex justify-content-start shadow-sm">
        <div className="w-25 fs-6 text-center bg-warning fst-italic">
          <span>Matches</span>
        </div>
        <div className="d-flex justify-content-evenly fst-italic w-75">
          <div className="fs-6 text-center p-0 bg-warning">
            <div className="mx-0 text-center justify-content-between d-flex">
              <div style={{ width: "60px" }} className="border-start">
                <span className="px-2 text-center">1</span>
              </div>
              <div
                style={{ width: "60px" }}
                className="border-start border-end"
              >
                <span className="px-2 text-center">X</span>
              </div>
              <div style={{ width: "60px" }} className="border-end">
                <span className="px-2 text-center">3</span>
              </div>
            </div>
          </div>
          <div className="fs-6 text-center p-0 bg-warning">
            <div className="mx-0 text-center justify-content-between d-flex">
              <div style={{ width: "70px" }} className="border-start">
                <span className="text-center">Goals</span>
              </div>
              <div
                style={{ width: "70px" }}
                className="border-start border-end"
              >
                <span className="text-center">Over</span>
              </div>
              <div style={{ width: "70px" }} className="border-end">
                <span className="text-center">Under</span>
              </div>
            </div>
          </div>
          <div className="fs-6 text-center p-0 bg-warning">
            <div className="mx-0 text-center justify-content-between d-flex">
              <div style={{ width: "60px" }} className="border-start">
                <span className="text-center">GG</span>
              </div>
              <div style={{ width: "60px" }} className="border-start">
                <span className="text-center">NG</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- games filtered  --> */}
      <div className="py-2">
        <DateColumn />
        <GameFlow info={[]} />
        <GameFlow info={[]} />
        <GameFlow info={[]} />
        <GameFlow info={[]} />
        <GameFlow info={[]} />
      </div>
    </div>
  );
};

export default SortedGames;
