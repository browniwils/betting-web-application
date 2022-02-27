import { useState } from "react";
import SlipHeader from "./slipHeader";
import BookCode from "./bookCode";
import SlipAction from "./slipAction";
import SlipContent from "./slipContent";

const Right = () => {
  const [show, setShow] = useState(true);
  return (
    <div
      style={{ height: "calc(100vh - 60px)" }}
      className="col-2 bg-warning border-start position-fixed postion-relative bottom-0 end-0 overflow-none"
    >
      <SlipHeader activate={() => setShow(!show)} isActive={show} />
      {/* <!-- booking code --> */}
      <BookCode isActive={show} />
      {/* <!-- clear slip button and select all toggle --> */}
      <SlipAction isActive={show} />
      {/* <!-- selected games in slip --> */}
      <SlipContent isActive={show} />
    </div>
  );
};

export default Right;
