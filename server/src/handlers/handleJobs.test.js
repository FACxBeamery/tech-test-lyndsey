const assert = require("assert");
const express = require("express");
const request = require("supertest");
const router = require("../router");
const app = express();

// describe("test GET request for todos", () => {
//     it("sends a response of json format containing the todos items", done => {
//       request(app)
//         .get("/todos")
//         .set("Accept", "application/json")
//         .expect("Content-Type", /json/)
//         .expect(200)
//         .end(function(err, res) {
//           if (err) return done(err);
//           done();
//         });
//     });
//   });

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

describe("test GET API call", () => {
	app.use(router);

	it("test api call returns dummy job ", () => {
		request(app)
			.get("/jobs")
			.end((err, res) => {
				if (err) {
					done(err);
				} else {
					assert.equal(res.status, "200");

					console.log("res body", res.body);
					assert.deepEqual(res.body, mockJob);
					done();
				}
			});
	});
});
