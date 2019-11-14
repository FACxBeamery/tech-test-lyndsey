const axios = require('axios');

const getJobsAPI = async (location, type) => {
    const typeCriteria = `description=${type}`;
    const locationCriteria = `location=${location}`;
    // let APIURL;


    // if (typeCriteria && !locationCriteria) {
    //     let APIURL = `https://jobs.github.com/positions.json?${typeCriteria}`
    // }
    // else if (locationCriteria && !typeCriteria) {
    //     let APIURL = `https://jobs.github.com/positions.json?${locationCriteria}`
    // }

    // else if (locationCriteria && typeCriteria) {
    //     let APIURL = `https://jobs.github.com/positions.json?${locationCriteria}&${typeCriteria}`
    // }

    // else {
    let APIURL = `https://jobs.github.com/positions.json`
    // }




    let res = await axios.get(APIURL);

    let jobs = res.data;
    return jobs;

}

module.exports = getJobsAPI;