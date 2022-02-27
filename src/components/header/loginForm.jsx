const LoginForm = () => {
  return (
    <div className="col-7 d-none d-xxl-inline">
      <form className="row g-1 justify-content-end" onChange={() => true}>
        <div className="col-4 me-2">
          <input
            type="text"
            className="form-control form-control"
            placeholder="Username"
          />
        </div>
        <div className="col-4 me-2">
          <input
            type="password"
            className="form-control form-control"
            placeholder="Password"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-dark text-warning">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
