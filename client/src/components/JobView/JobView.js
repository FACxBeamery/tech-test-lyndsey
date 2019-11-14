import React from 'react';
import getJobs from "../../utils/getJobs"
import JobCards from "./JobCards"




const JobView = ({ jobs, locationSearched }) => {




    const JobViewHead = ({ locationSearched }) => {
        return (<h2 key={locationSearched}>

            Jobs in ....  {locationSearched}
        </h2>
        )
    }



    return (
        <div>
            <JobViewHead locationSearched={locationSearched}></JobViewHead>
            <JobCards jobs={jobs}></JobCards>
        </div>
    )
}



export default JobView;