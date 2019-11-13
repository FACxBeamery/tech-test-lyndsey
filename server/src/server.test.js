const request = require("supertest");
const express = require("express");
const app = require("../src/server");
const nock = require("nock");



describe("test GET request for external API", () => {
    // beforeEach(async () => {
    //     nock.cleanAll();
    // });

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


    it("sends a response of json format", done => {

        nock("https://jobs.github.com")
            .get("/positions.json")
            .reply(200, mockJob);

        return request(app)
            .get("/jobs")
            .expect(200)
            .end(function (err, res) {
                expect(res.body).toEqual(mockJob);
                if (err) { return done(err); }
                done();

            });

    });
});
