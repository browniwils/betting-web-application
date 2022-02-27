const Footer = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        width: "30px",
        height: "30px",
        position: "fixed",
        left: "20px",
        bottom: "20px",
      }}
      className="rounded-circle bg-gradient bg-warning fst-italic fw-bold d-flex justify-content-center align-items-center"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasBottom"
      aria-controls="offcanvasBottom"
    >
      i
    </div>
  );
};

export default Footer;
