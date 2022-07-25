import { render, screen } from "@testing-library/react";
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
