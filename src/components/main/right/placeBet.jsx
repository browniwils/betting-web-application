const PlaceBet = (props) => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between w-100 my-1 fw-bold">
        <p>Total odds:</p>
        <p>12.69</p>
      </div>
      <div className="d-flex justify-content-between w-100 mb-2">
        <p className="mb-0 fw-bold fst-italic">Staking:</p>
        <input
          type="text"
          className="form-control py-0 px-2 w-50 fs-6 small shadow-sm text-end fw-bold"
          value={10}
          onChange={() => true}
        />
      </div>
      <div className="d-flex justify-content-between w-100 fs-6 fst-italic">
        <p className="mb-0">Bonus:</p>
        <p className="mb-0">10.00</p>
      </div>
      <hr className="mt-0 mb-0" />
      <div className="d-flex justify-content-between w-100">
        <p className="mb-0 fw-bold">Total:</p>
        <p className="mb-0 fw-bold">1269.00</p>
      </div>
      <hr className="my-1" />
      <div className="d-flex justify-content-between w-100 my-1">
        <p className="small">
          By placing a bet, you accept the T&C's. Limits may be applicable on
          your winnings. A minimum bet of GHS 0.10 is required
        </p>
      </div>
      <div className="d-flex justify-content-between w-100 mb-3">
        <button type="button" className="btn btn-outline-dark">
          Book bet
        </button>
        <button type="button" className="btn btn-dark text-warning">
          Place Bet
        </button>
      </div>
      <hr className="mt-0 mb-0" />
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault "
          onChange={() => true}
        />
        <label
          className="form-check-label small"
          htmlFor="flexSwitchCheckDefault "
        >
          Accept all odds and line changes
        </label>
      </div>
      <hr className="mt-0 mb-0" />
    </div>
  );
};

export default PlaceBet;
