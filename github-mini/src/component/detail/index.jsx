import { Modal, Row, Col } from "react-bootstrap";

const Detail = (props) => {
  return (
    <Modal
      size="md"
      show={props.show}
      onHide={props.onHide}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton><h3>Detail</h3>
      </Modal.Header>
      <Modal.Body>
            <Row lg={12}>
              <Col lg={6}>id : </Col>
              <Col lg={6}>#{props.detail.id}</Col>
              <hr />
              <Col lg={6}>Name : </Col>
              <Col lg={6}> {props.detail.name}</Col>
              <hr />
              <Col lg={6}>language : </Col>
              <Col lg={6}>{props.detail.language}</Col><hr/>

              <Col lg={6}>created : </Col>
              <Col lg={6}>{props.detail.created_at}</Col><hr />
              <Col lg={6}>updated:</Col>
              <Col lg={6}>{props.detail.updated_at}</Col>
             
              <hr />

              <Col lg={6}>
                <p className="fw-bold">Description </p>
              </Col>
              <Col lg={6}>
                {props.detail.description ? props.detail.description : "-"}
              </Col>
            </Row>
      </Modal.Body>
    </Modal>
  );
};

export default Detail;
