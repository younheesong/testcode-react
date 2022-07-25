import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

//test case : counter는 0부터 시작한다.

test("counter start 0", () => {
  //given : 초기 렌더링
  render(<App />);
  // when: counter에 아무 동작 x
  const counterElem = screen.getByTestId("counter");
  // then: counter는 0
  expect(counterElem).toHaveTextContent(0);
});

test("there are minus button", () => {
  //given : 초기 렌더링
  render(<App />);
  // when: counter에 아무 동작 x
  const minusBtnElem = screen.getByTestId("minus-btn");
  // then: counter는 0
  expect(minusBtnElem).toHaveTextContent("-");
});

test("there are plus button", () => {
  //given : 초기 렌더링
  render(<App />);
  // when: counter에 아무 동작 x
  const plusBtnElem = screen.getByTestId("plus-btn");
  // then: counter는 0
  expect(plusBtnElem).toHaveTextContent("+");
});

test("when plus btn click, the counter is 1", () => {
  //given : 초기 렌더링
  render(<App />);
  const plusBtnElem = screen.getByTestId("plus-btn");
  // when: + button 누르면,
  fireEvent.click(plusBtnElem);
  // then: counter는 1
  const counterElem = screen.getByTestId("counter");
  expect(counterElem).toHaveTextContent(1);
});

test("when minus btn click, the counter is -1", () => {
  //given : 초기 렌더링
  render(<App />);
  const minusBtnElem = screen.getByTestId("minus-btn");
  // when: + button 누르면,
  fireEvent.click(minusBtnElem);
  // then: counter는 1
  const counterElem = screen.getByTestId("counter");
  expect(counterElem).toHaveTextContent(-1);
});
