import Upgame from "./upgame";

const Left = () => {
  return (
    <div
      style={{ height: "calc(100vh - 60px)" }}
      className="col-2 bg-light border-end py-2 position-fixed postion-relative bottom-0 overflow-auto"
    >
      <div className="row">
        <div className="col my-1">
          <div className="fs-6 w-100 badge bg-warning text-dark">
            Upcoming games
          </div>
        </div>
      </div>
      <Upgame />
      <Upgame />
      <Upgame />
      <Upgame />
      <Upgame />
      <Upgame />
    </div>
  );
};

export default Left;
