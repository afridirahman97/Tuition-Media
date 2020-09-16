import React from 'react'
import moment from 'moment'
import "../Css/RSummary.css"


const ReqSummary = ({req}) => {
  
  
  return (
    <div className="card z-depth-0 req-summary">
      <div className="card-content grey-text text-darken-3 writings">
        <span className="card-title ">Tuition request @ <span className="blue-text">{req.location}</span></span>
        <p>Subjects: {req.subs}</p>
        <p>Salary: {req.salary}</p>
        <p>Days: {req.week}</p>
        <p>Number : {req.phone}</p>
        <p>Trial : {req.trial}</p>
        <p>Description : {req.description}</p>
        <p>Address : {req.address}</p>
        <p className="line">Posted by : {req.authorFirstName} {req.authorLastName}</p>
        <p className="grey-text">{moment(req.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  
  )
}

export default ReqSummary