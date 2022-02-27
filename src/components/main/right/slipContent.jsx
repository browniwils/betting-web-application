import SelectedGames from "./selectedGames";
import MySlips from "./mySlips";

const SlipContent = (props) => {
  return (
    <div className="row">
      <div className="col-12 w-100 p-0">
        <div className="col">
          <div
            style={{ height: "calc(100vh - 207px)" }}
            className="mb-1 mx-2 py-2 overflow-auto"
          >
            <SelectedGames isActive={props.isActive} />
            {/* <!-- runing tickets  --> */}
            <MySlips isActive={!props.isActive} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlipContent;
