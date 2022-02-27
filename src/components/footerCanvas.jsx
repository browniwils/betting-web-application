import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Footer from "./footer";

const OffCanvasExample = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Footer onClick={() => setShow(true)} />
      <Offcanvas
        className="bg-gradient bg-warning"
        show={show}
        onHide={() => setShow(false)}
        {...props}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Firstname</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>...</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const FooterCanvas = () => {
  return (
    <>
      {["bottom"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
};

export default FooterCanvas;
