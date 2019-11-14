import axios from "axios";

const getJobs = async () => {
    let res = await axios.get("/jobs");
    let jobData = res.data;
    return jobData;
};

export default getJobs;
