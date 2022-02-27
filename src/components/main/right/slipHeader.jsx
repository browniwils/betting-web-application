const SlipHeader = (props) => {
  return (
    <div className="row">
      <div className="col-12 p-0">
        <div
          style={{ zIndex: "990" }}
          className="btn-group w-100 shadow"
          role="group"
        >
          <button
            disabled={props.isActive ? true : false}
            type="button"
            onClick={props.activate}
            className={props.isActive ? "btn btn-warning" : "btn btn-light"}
          >
            Betslip
          </button>
          <button
            disabled={props.isActive ? false : true}
            type="button"
            onClick={props.activate}
            className={!props.isActive ? "btn btn-warning" : "btn btn-light"}
          >
            Bets
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlipHeader;
