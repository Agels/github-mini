import { Card, } from "react-bootstrap";

const Cards = (props) => {
  return (
    <Card
      key={props.index}
      className="h-100"
      style={{ cursor: "pointer" }}
      onClick={() => {
         props.onClick();
         props.setShow();
       }}
    >
      <Card.Body>
        <div className="d-flex">
          <div className="fs-5">{props.name}</div>
          <div className="ms-auto fs-6">
            <i>{`(${props.id})`}</i>
          </div>
        </div>

        <div className="pt-5">{`</> ${
          props.language ? props.language : ""
        }`}</div>
      </Card.Body>
    </Card>
  );
};

export default Cards;