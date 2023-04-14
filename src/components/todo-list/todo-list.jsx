import { useState } from "react";
import TodoItem from "./todo-item";
import Form from "react-bootstrap/Form";
import { Container, Row } from "react-bootstrap";
import useLoading from "../../hooks/use-loading";

const TodoList = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const { loading, on, off } = useLoading();

  const handleSubmit = (e) => {
    e.preventDefault();

    on();

    setTimeout(() => {
      const list = [...todos, title];

      setTodos(list);
      setTitle("");
      off();
    }, 1000);
  };

  const handleChange = (e) => {
    const { value } = e.target;

    setTitle(value);
  };

  return (
    <Container data-testid="todolist">
      {loading && <p>loading...</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Label htmlFor="title">Todo Item</Form.Label>
        <Form.Control
          type="text"
          placeholder="item"
          value={title}
          onChange={handleChange}
        />
      </Form>
      {todos.length > 0 && (
        <Row style={{ marginTop: "1rem", flexDirection: "column" }}>
          {todos.map((todo) => (
            <TodoItem key={todo} item={todo} />
          ))}
        </Row>
      )}
    </Container>
  );
};

export default TodoList;
