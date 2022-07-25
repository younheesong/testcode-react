import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  // render : dom component를 렌더링하는 함수, 인자로 렌더링할 컴포넌트가 들어감.
  // return은 rl에서 제공하는 쿼리함수와 기타 유틸리티 함수를 담고 있는 객체를 리턴해줌.
  // 객체를 리턴하기 때문에 원하는 쿼리 함수만 얻어 올 수 있다. (복잡할 경우, screen을 통해 가져오기)

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

  const linttest = screen.getByRole("button", {
    name: "linttest",
  });
  expect(linttest).toHaveTextContent("linttest");
});
