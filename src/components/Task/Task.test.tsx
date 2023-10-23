import { render, screen } from '@testing-library/react-native';
import Task from '../Task/Task';

test('when Task is todo it renders without strikethrough', () => {
render(<Task task="Task one" status="todo" />);

  const taskElementWithStrikeThrough = screen.getByText('Task one');
  expect(taskElementWithStrikeThrough.props.style).toEqual({ color: "#000000" });
});
test('when Task is done it renders with strikethrough', () => {
  render(<Task task="Task two" status="done" />);
  const taskElementWithoutStrikeThrough = screen.getByText('Task two');
  expect(taskElementWithoutStrikeThrough.props.style).toEqual({
    "color": "#000000",  
    "textDecorationLine": "line-through"
});
});