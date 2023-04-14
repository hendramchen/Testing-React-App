import { fireEvent, render, screen } from "@testing-library/react"
import TodoList from "../todo-list"

describe('<TodoList />', () => {
    it('should render component', () => {
        // arrange
        render(<TodoList />);
        
        const todoList = screen.getByTestId('todolist');
        // assert
        expect(todoList).toBeInTheDocument();
    });

    it('should be able input item', () => {
        // arrange
        render(<TodoList />);
        
        const input = screen.getByPlaceholderText('item');
        
        // act
        fireEvent.change(input, { target: { value: 'test'}});
        // assert
        expect(input).toHaveValue('test');
    })

    it('should be showing value on item component', async() => {
        // arrange
        render(<TodoList />);
        
        const input = screen.getByPlaceholderText('item');
        
        
        // act
        fireEvent.change(input, { target: { value: 'test'}});
        fireEvent.submit(input);
        fireEvent.change(input, { target: { value: 'tost'}});
        fireEvent.submit(input);

        const items = await screen.findAllByRole('listitem');

        expect(items).toHaveLength(2);
    })
})