import React from 'react';
import { render } from "react-dom";
import ChooseInfo from "./ChooseInfo";

describe("ChooseInfo", () => {
  it("Have title 'Create your Event'", () => {
    render(<ChooseInfo />); 
    expect(screen.getByText("Create your Event")).toBeInTheDocument();
  });
});
