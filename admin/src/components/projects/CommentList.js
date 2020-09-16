import React from 'react'
import CommentSummary from './CommentSummary'
import { Link } from 'react-router-dom'


const CommentList = ({comments}) => {
 var parts = window.location.pathname.split('/');
 var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
 
 
  return (
    <div className="comment-list section">

      { comments && comments.map(comment => {
        
       
        var match=comment.projectId;
        var newa =comment.authorId; 
        if(lastSegment === match){
        return (
            <div className="amni">
          <Link to={'/user/'+newa+'/'+match} key={newa}>
           <CommentSummary comment={comment} />
           </Link>
            </div>  
        )
        }
            
      })
      }
      
    </div>
  )
}

export default CommentList