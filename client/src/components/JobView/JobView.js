import React from 'react';






const JobView = ({ jobs, location }) => {


    const JobViewHead = ({ location }) => {
        return (<h2 key={location}>

            "Jobs in .... "{location}
        </h2>
        )
    }



    return (
        <JobViewHead location={location}></JobViewHead>
        <JobCards jobs={jobs}></JobCards>
    )
}



export default JobView;