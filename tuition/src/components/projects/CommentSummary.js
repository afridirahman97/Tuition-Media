import React from 'react'
import moment from 'moment'

const CommentSummary = ({comment}) => {
  return (
    <div className="card z-depth-0 comment-summary">
      <div className="card-content grey-text text-darken-3">

       <div className='row'>
       <div className="col s12 m1">
        <div className="btn btn-floating blue darken-2"><p>{comment.authorInitials}</p></div>
        </div>
        <div className="card-title "><b style={{fontWeight: "bold"}}>{comment.comment}</b></div>
        
        </div>

        <div>Commented by {comment.authorFirstName} {comment.authorLastName}</div>
        <div>{moment(comment.createdAt).calendar()}</div>
      </div>
    </div>
  )
}

export default CommentSummary