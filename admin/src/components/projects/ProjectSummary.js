import React from 'react'
import moment from 'moment'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import "../Css/Summary.css"


const ProjectSummary = ({project}) => {
  
  
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3 writings">
        <span className="card-title ">New Tuition @ <span className="blue-text">{project.location}</span></span>
        <p>Subjects: {project.subs}</p>
        <p className="line">Posted by :<VerifiedUserIcon/> {project.authorFirstName} {project.authorLastName}</p>
        <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  
  )
}

export default ProjectSummary