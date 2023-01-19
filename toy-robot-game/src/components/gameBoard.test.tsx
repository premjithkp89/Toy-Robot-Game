import "@testing-library/jest-dom";

import configureStore from "redux-mock-store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import App from "../App";

const initialState = {
  xCordinate: 0,
  yCordinate: 0,
  row: -1,
  column: -1,
  wallRow: -1,
  wallColumn: -1,
  direction: "",
  angle: 0,
  showrobot: false,
  showReport: false,
  wallMap: { "": false },
};
const mockStore = configureStore();

const stores = mockStore(initialState);

describe("<GameBoard>", () => {
  render(
    <Provider store={stores}>
      <App />
    </Provider>
  );

  it("should render Game Board", () => {
    const gameTable = screen.getByRole("table");
    expect(gameTable).not.toBeNull();
  });
});
