import { fireEvent, render, screen, act } from "@testing-library/react";
import TodoList from "../todo-list";

describe("<TodoList />", () => {
  it("should render component", () => {
    // arrange
    render(<TodoList />);

    const todoList = screen.getByTestId("todolist");
    // assert
    expect(todoList).toBeInTheDocument();
  });

  it("should be able input item", () => {
    // arrange
    render(<TodoList />);

    const input = screen.getByPlaceholderText("item");

    // act
    fireEvent.change(input, { target: { value: "test" } });
    // assert
    expect(input).toHaveValue("test");
  });

  it("should be showing value on item component", async () => {
    // arrange
    jest.useFakeTimers();
    render(<TodoList />);

    const input = screen.getByPlaceholderText("item");

    // act
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      fireEvent.change(input, { target: { value: "test" } });
      fireEvent.submit(input);

      jest.advanceTimersByTime(1000);
    });

    const items = await screen.findAllByRole("listitem");
    expect(items).toHaveLength(1);
  });
});
