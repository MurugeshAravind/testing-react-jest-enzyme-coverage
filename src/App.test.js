import { mount } from 'enzyme';
import App from './App';

describe('Counter Testing', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = mount(<App />);
  });
  test('renders title of counter', () => {
    expect(wrapper.find('h1').text()).toEqual('This is counter app');
  });
  test('render a button with the text of `+` for increment', () => {
    expect(wrapper.find('#increment-btn').text()).toBe('+');
  });
  test('render a button with the text of `-` for decrement', () => {
    expect(wrapper.find('#decrement-btn').text()).toBe('-');
  });
  test('render the initial value of state in a div', () => {
    expect(wrapper.find('#counter-value').text()).toBe('0');
  });
  test('increment the value on each click of increment button', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('1');
  });
  test('do not go beyond the value 0 on click of decrement button', () => {
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe('0');
  });
  test('check for the button click', () => {
    wrapper.find('#fetch-comment').simulate('click');
    expect(wrapper.fetchComment).toBeCalled();
  });
});
