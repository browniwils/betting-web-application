import { useState } from "react";

const CLeauge = (props) => {
  const [viewL, setViewL] = useState(false);

  return (
    <div className="fs-6 text-center">
      <div
        className="small border-bottom shadow-sm py-1"
        onClick={() => setViewL(!viewL)}
      >
        Argentina
      </div>
      <div
        className={!viewL ? " visually-hidden" : "mx-auto w-75 border-bottom "}
      >
        <div className="small py-1 shadow-sm">1. Liga</div>
        <div className="small py-1 shadow-sm">1. Liga</div>
        <div className="small py-1 shadow-sm">1. Liga</div>
        <div className="small py-1 shadow-sm">1. Liga</div>
        <div className="small py-1 shadow-sm">1. Liga</div>
      </div>
    </div>
  );
};

export default CLeauge;
