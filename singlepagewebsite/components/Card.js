import React from "react";

function Card(props) {
  return (
    <div className="term">
      <tr>
      <th>{props.campaign_name}</th>
      <th>{props.status}</th>
      <th>{props.created_at}</th>
        <th>{props.method}</th>
        <th>{props.media}</th>
        </tr>
    </div>
  );
}
export default Card;

        
        
      
     