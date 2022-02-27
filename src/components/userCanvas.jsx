import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import UsernameIcon from "./header/usernameIcon";

const OffCanvasExample = ({ name, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <UsernameIcon onClick={handleShow} />
      <Offcanvas
        className="bg-gradient bg-warning"
        show={show}
        onHide={handleClose}
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

const UserCanvas = () => {
  return (
    <>
      {["end"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
};

export default UserCanvas;
