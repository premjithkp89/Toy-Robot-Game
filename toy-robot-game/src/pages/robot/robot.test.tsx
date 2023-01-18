import React from 'react';
import "@testing-library/jest-dom";
import { render,waitFor, fireEvent, screen } from "@testing-library/react";
import PayIn from './robot';

describe("<PayIn/>", () => {

  it('should render amount texfield', () => {
    render(<PayIn />);
    const texFileld = screen.getByTestId("amount-textfield");
    expect(texFileld).toBeInTheDocument();
  });

  it("should show the success dialog onSubmit", async ()=> {

    render(<PayIn />);
    const button = screen.queryByTestId('pay-in')
    button && fireEvent.click(button)

    await waitFor(() =>  {
      expect(screen.getByTestId("dialog")).toBeInTheDocument();

    });
});
});