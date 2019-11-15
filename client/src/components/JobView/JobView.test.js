import React from "react";

import JobView from "./JobView";
import styles from "./App.module.css";
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

it("test the Jobs cards are rendered with a mock state", () => {
	const { getByTestId } = render(
		<JobView jobs={mockJob} locationSearched={"New York"} />
	);

	const jobCardsRendered = getByTestId("job-cards-container");
	expect(jobCardsRendered).toBeInTheDocument();
});

it("test the type, company, location and url are rendered", () => {
	const { getByTestId } = render(
		<JobView jobs={mockJob} locationSearched={"New York"} />
	);

	const jobCardsRendered = getByTestId("job-cards-container");
	const companyNameRendered = getByTestId("New York University");
	const titleRendered = getByTestId("Technology Solutions Developer");
	const typeRendered = getByTestId("Full Time");

	expect(jobCardsRendered).toBeInTheDocument();
	expect(companyNameRendered).toBeInTheDocument();
	expect(titleRendered).toBeInTheDocument();
	expect(typeRendered).toBeInTheDocument();
});
