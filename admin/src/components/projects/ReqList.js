import React from 'react'
import ReqSummary from './ReqSummary'


const ReqList = ({reqs}) => {
  
  return (
    <div className="project-list section">
      { reqs && reqs.map(req => {
        return (
         
            <ReqSummary req={req} />
         
        )
      })}  
    </div>
  )
}

export default ReqList