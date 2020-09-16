import React from 'react'
import moment from 'moment'
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import "../Css/Notifications.css"

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-depth-0 notif__bar">
        <div className="card-content">
          <span className="card-title notif__cap"><FiberManualRecordIcon/>Live Updates . . .</span>
          <ul className="online-users">
            { notifications && notifications.map(item =>{
              return <li key={item.id}>
                <span className="blue-text">{item.user} </span>
                <span>{item.content}</span>
                <div className="note-date grey-text">{moment(item.time.toDate()).fromNow()}</div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications