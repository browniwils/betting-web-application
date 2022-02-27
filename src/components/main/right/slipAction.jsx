const SlipAction = (props) => {
  return (
    <div className={props.isActive ? "row" : "d-none"}>
      <div className="col-12 w-100 p-0 shadow-sm" style={{ zIndex: "988" }}>
        <div className="col">
          <div className="input-group justify-content-between mb-1 py-2">
            <div className="form-check form-switch ms-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault "
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault "
              >
                Select all
              </label>
            </div>
            <div className="me-3 shadow-sm">
              <button type="button " className="btn btn-light btn-sm">
                Clear slip
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlipAction;
