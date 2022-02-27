import Left from "./left/left";
import Middle from "./middle/middle";
import Right from "./right/right";

const Main = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* <!-- upcoming games pane  --> */}
        <Left />
        {/* <!-- middle pane  --> */}
        <Middle />
        {/* <!-- bet slip and my bet pane  --> */}
        <Right />
      </div>
    </div>
  );
};

export default Main;
