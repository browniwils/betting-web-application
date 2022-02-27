const OutcomeSelected = (props) => {
  return (
    <div className="bg-warning bg-gradient shadow-sm mb-2 w-100 rounded-3">
      <div className="card-body pt-1 pt-2">
        <div className="d-flex justify-content-end">
          <a href="# " className="text-decoration-none link-dark rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg "
              width="20 "
              height="20 "
              fill="currentColor "
              className="bi bi-x"
              viewBox="0 0 16 16 "
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 10-.708z " />
            </svg>
          </a>
        </div>
        <div className="card-title">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="form-check my-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=" "
                  id="flexCheckDefault "
                  onChange={() => true}
                />
              </div>
              <div className="fs-6 fw-bold">Draw</div>
            </div>
            <div className="fs-6">3.10</div>
          </div>
          <hr className="m-0" />
        </div>
        <h6 className="card-subtitle mb-2 text-dark">
          arsenal<span> vs </span>chelsea
        </h6>
        <p className="card-text">1X2 - 3-Way</p>
      </div>
    </div>
  );
};

export default OutcomeSelected;
