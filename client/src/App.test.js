import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import "@testing-library/jest-dom/extend-expect";
import {
	render,
	cleanup,
	fireEvent,
	waitForElement
} from "@testing-library/react";

const mockJob = [
	{
		id: "dc428b94-e42e-11e8-91e2-23879ca9e8b0",
		type: "Full Time",
		url:
			"https://jobs.github.com/positions/dc428b94-e42e-11e8-91e2-23879ca9e8b0",
		created_at: "Fri Nov 09 14:51:11 UTC 2018",
		company: "New York University",
		company_url: null,
		location: "New York, New York 10001",
		title: "Technology Solutions Developer",
		company_logo: null
	}
];

it("renders without crashing", () => {
	const axiosMock = jest.spyOn(axios, "get");
	axiosMock.mockImplementation(() => Promise.resolve({ data: mockJob }));

	const { getByText } = render(<App />);
	axiosMock.mockRestore();
});

it("submitting a city in text input renders results on page", async () => {
	const axiosMock = jest.spyOn(axios, "get");
	axiosMock.mockImplementation(() => Promise.resolve({ data: mockJob }));

	const { getByText, getByLabelText, getByTestId } = render(<App />);

	const locationSearchbar = getByLabelText("Enter a city:");
	fireEvent.change(locationSearchbar, {
		target: { value: "San Francisco" }
	});

	const submitButton = getByText("Go");
	fireEvent.click(submitButton);

	await waitForElement(() => getByTestId("job-cards-container"));
	const jobCards = getByTestId("job-cards-container");
	expect(jobCards).toBeInTheDocument();

	axiosMock.mockRestore();
});
