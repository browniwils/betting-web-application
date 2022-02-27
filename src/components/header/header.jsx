import LoginForm from "./loginForm";
import UserCanvas from "../userCanvas";
import Logo from "../../img/loopbet.png";
const Header = () => {
  return (
    <header
      style={{ height: "60px", zIndex: "1000" }}
      className="container-fluid bg-warning d-flex align-items-center position-sticky top-0 shadow"
    >
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-between align-items-center">
            <div className="fs-3 fw-bold rounded-5">
              <img
                alt="logo"
                width="auto"
                height="40"
                src={Logo}
                className="d-inline-block align-text-top"
              />
            </div>
            <LoginForm />
            <UserCanvas />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
