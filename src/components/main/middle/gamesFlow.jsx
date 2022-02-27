const GamesFlow = ({ info }) => {
  return (
    <div className="d-flex justify-content-start align-items-center py-1 border-bottom">
      <div className="w-25 fs-6 text-start px-3 overflow-hidden fw-bold">
        <div
          className="small fst-italic fw-light small border-bottom text-muted d-flex justify-content-between"
          style={{ fontSize: "x-small" }}
        >
          <span>
            Game ID: <span>12345</span>
          </span>
          <span>NS</span>
        </div>
        <div className="px-3">chelsea</div>
        <div className="px-3">arsenal</div>
        <div className="small fst-italic fw-normal fw-light border-top text-end text-muted">
          <span style={{ fontSize: "x-small" }}>21-Feb-2022 12:15</span>
        </div>
      </div>
      <div className="d-flex justify-content-evenly w-75">
        <div className="fs-6 text-center p-0">
          <div className="mx-0 text-center justify-content-between d-flex">
            <div
              style={{ width: "60px" }}
              className="bg-gradient bg-warning py-1 rounded"
            >
              <span className="text-center">2.50</span>
            </div>
            <div
              style={{ width: "60px" }}
              className="border-start border-end bg-gradient bg-warning py-1 rounded"
            >
              <span className="text-center">2.50</span>
            </div>
            <div
              style={{ width: "60px" }}
              className="bg-gradient bg-warning py-1 rounded"
            >
              <span className="text-center">2.50</span>
            </div>
          </div>
        </div>
        <div className="fs-6 text-center p-0">
          <div className="mx-0 text-center justify-content-between d-flex">
            <div
              style={{ width: "70px" }}
              className="bg-gradient bg-warning py-1 rounded"
            >
              <span className="text-center">1.5</span>
            </div>
            <div
              style={{ width: "70px" }}
              className="border-start border-end bg-gradient bg-warning py-1 rounded"
            >
              <span className="text-center">2.51</span>
            </div>
            <div
              style={{ width: "70px" }}
              className="bg-gradient bg-warning py-1 rounded"
            >
              <span className="text-center">2.51</span>
            </div>
          </div>
        </div>
        <div className="fs-6 text-center p-0">
          <div className="mx-0 text-center justify-content-between d-flex">
            <div
              style={{ width: "60px" }}
              className="bg-gradient bg-warning py-1 border-end rounded"
            >
              <span className="text-center">2.55</span>
            </div>
            <div
              style={{ width: "60px" }}
              className="bg-gradient bg-warning py-1 rounded"
            >
              <span className="text-center">2.55</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GamesFlow;
