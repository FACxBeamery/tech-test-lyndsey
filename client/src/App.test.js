import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios"
import { render, cleanup, fireEvent, waitForElement } from "@testing-library/react";

it("renders without crashing", () => {
  const mockJob = [{
    id: "dc428b94-e42e-11e8-91e2-23879ca9e8b0",
    type: "Full Time",
    url: "https://jobs.github.com/positions/dc428b94-e42e-11e8-91e2-23879ca9e8b0",
    created_at: "Fri Nov 09 14:51:11 UTC 2018",
    company: "New York University",
    company_url: null,
    location: "New York, New York 10001",
    title: "Technology Solutions Developer",
    company_logo: null
  }];

  const axiosMock = jest.spyOn(axios, "get")
  axiosMock.mockImplementation((endpoint) => {
    if (endpoint === "/jobs") {
      return Promise.resolve({ data: mockJob })
    }
  })

  const { getByText } = render(<App />)
  axiosMock.mockRestore()
});
