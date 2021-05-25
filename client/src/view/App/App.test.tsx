import React from 'react';
import App from './App';
import { mount, shallow } from "enzyme";
import "../../setupTests";

let appTest;

describe("Main app renders three individual panels", () => {

  it("shows three main panels", () => {

    appTest = mount(<App />);
    expect(appTest.find("container").length).toBe(1);
    expect(appTest.find('div').children().length).toBe(3);
  
  });

});