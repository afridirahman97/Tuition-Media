import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const ConfirmSummary = ({confirm}) => {
    var redirect = confirm.tuitionId;
  return (
    <div className="container center">
    <div className="card z-depth-0 confirm-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title "><span className="blue-text"><b style={{fontWeight: "bold"}}>Congratulations! You have been appointed</b></span></span>
           <p>Tuition Id :<b style={{fontWeight: "bold"}}>{confirm.tuitionId}</b> </p>
           <p>Message from Tutor Media :<b style={{fontWeight: "bold"}}> {confirm.confirmation}</b></p>
        <div>Posted on {moment(confirm.createdAt).calendar()}</div>
        <Link to={'/project/'+redirect}>Click Here to view the job </Link>
      </div>
    </div>
  </div> 
  )
}

export default ConfirmSummary