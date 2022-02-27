const FeatMatch = (props) => {
  return (
    <div className="d-inline-block">
      <div className="bg-light border border-warning rounded mx-4 my-2 shadow-sm">
        <div className="card-body align-middle">
          <div className="d-inline-block">
            <p className="small px-2 m-0 text-muted">
              chelsea
              <span className="px-2">
                <img
                  className="img-thumbnail"
                  src="https://www.flashscore.com/res/image/data/GMmvDEdM-2B0QucIK.png"
                  alt=""
                  width="42"
                  height="auto"
                />
              </span>
            </p>
          </div>
          <div className="d-inline-block">
            <p className="small m-0 text-muted fw-bold">12:15</p>
            <p className="small m-0 text-muted">Today</p>
          </div>
          <div className="d-inline-block">
            <p className="small px-2 m-0 text-muted">
              <span className="px-2">
                <img
                  className="img-thumbnail"
                  src="https://www.flashscore.com/res/image/data/pfchdCg5-pU2IsJm8.png"
                  alt=""
                  width="42"
                  height="auto"
                />
              </span>
              arsenal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatMatch;
