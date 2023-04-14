import { Alert, Col } from "react-bootstrap";

const TodoItem = ({ item }) => (
  <Col role="listitem">
    <Alert variant="info" onClose={() => {}} dismissible>
      {item}
    </Alert>
  </Col>
);

export default TodoItem;
