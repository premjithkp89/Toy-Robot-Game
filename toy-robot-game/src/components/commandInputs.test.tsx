
import "@testing-library/jest-dom";

import configureStore from 'redux-mock-store';
import {store} from '../redux/store'
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';

import App from '../App';


const initialState = { xCordinate: 0,
  yCordinate: 0,
  row: -1,
  column: -1,
  wallRow: -1,
  wallColumn: -1,
  direction: "",
  angle: 0,
  showrobot: false,
  showReport:false,
  wallMap: { "": false },};
  const mockStore = configureStore();

  const stores = mockStore(initialState);

    describe("<CommandInputs>", () => {
     it('should place a robot when place button is clicked',  async ()=> {

        render(
          <Provider store={stores}>
              <App />
          </Provider>
      );
        const placeRobot =screen.queryByTestId('place-robot')
        placeRobot && fireEvent.click(placeRobot)

        await waitFor(() =>  {
          expect(screen.getByTestId("robot")).toBeInTheDocument();

        });
    });

    it('should  move the robot when move button clicked',  async ()=> {
      render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    const state = store.getState().placeRobot;
    const initialXCordinate = state.xCordinate;
    const initialYCordinate = state.yCordinate;

      const moveRobot =screen.queryByTestId('move-robot')
      moveRobot && fireEvent.click(moveRobot)

      await waitFor(() =>  {
        const finalXCordinate = state.xCordinate;
        const finalYCordinate = state.yCordinate;

        expect( initialXCordinate !== finalXCordinate || initialYCordinate !== finalYCordinate).toBeFalsy();

      });
  });
  });


