import { useState } from "react";
import ToggleFullSlip from "./toggleFullSlip";

const MySlips = (props) => {
  const [toggleSlip, setToggleSlip] = useState(false);
  return (
    <div
      className={
        props.isActive
          ? "bg-warning bg-gradient shadow-sm mb-2 w-100 rounded-3"
          : "d-none"
      }
    >
      <div className="card-body pt-1 pt-2">
        <div className="d-flex justify-content-between">
          <div className="rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg "
              width="16 "
              height="16 "
              fill="currentColor "
              className="bi bi-printer-fill"
              viewBox="0 0 16 16 "
            >
              <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z " />
              <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z " />
            </svg>
          </div>
          <p className="card-text small fs-6 p-0 m-0">
            Bet ID:
            <span className="fw-bold fst-italic">123456789</span>
          </p>
        </div>
        <div className="card-title">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="small">2022-02-15 14:36</div>
            </div>
            <div className="fs-6 fw-bold fst-italic text-success">Won</div>
          </div>
        </div>
        <h6 className="card-subtitle text-dark mb-1">
          <span onClick={() => setToggleSlip(!toggleSlip)}>
            <div className="rounded">
              {!toggleSlip ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg "
                  width="16 "
                  height="16 "
                  fill="currentColor "
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16 "
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z " />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              )}
            </div>
          </span>
          Multi(10)
        </h6>
        <div className={!toggleSlip ? "text-nowrap overflow-hidden" : "d-none"}>
          <p className="small mb-0">
            <span className="text-success">chelsea | </span>
            <span className="text-danger">chelsea | </span>
            <span>chelsea | </span>
            <span>chelsea | </span>
          </p>
        </div>
        <hr className="mt-0 mb-2" />
        {/* <!-- toggling full bet  --> */}
        {toggleSlip ? <ToggleFullSlip /> : null}
        <div className="w-100">
          <div className="d-flex justify-content-between w-100">
            <p className="mb-0">Odds:</p>
            <p className="mb-0">12.69</p>
          </div>
          <div className="d-flex justify-content-between w-100">
            <p className="mb-0">Stake:</p>
            <p className="mb-0">100.00</p>
          </div>
          <div className="d-flex justify-content-between w-100">
            <p className="mb-0">Bonus:</p>
            <p className="mb-0">10.00</p>
          </div>
          <hr className="mt-0 mb-0" />
          <div className="d-flex justify-content-between w-100">
            <p className="mb-0 fw-bold">Total:</p>
            <p className="mb-0 fw-bold">1269.00</p>
          </div>
          <hr className="mt-0 mb-0" />
        </div>
      </div>
    </div>
  );
};

export default MySlips;
