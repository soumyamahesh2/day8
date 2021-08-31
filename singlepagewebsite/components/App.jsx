import React from "react";
import Card from "./Card";
import Campaign from "./Campaign";

function CreatCard(campaignList) {
    return (
      <Card
        key={campaignList.id}
        campaign_name={campaignList.campaign_name}
        status={campaignList.status}
        created_at={campaignList.created_at}
        method={campaignList.method}
        media={campaignList.media}
      />
    );
  }

function App() {
  return (
    <div>
      <h1>
        <span>Campaigns</span>
      </h1>
      <table>
      <tr>
      {Campaign.map(CreatCard)}
      </tr>
       
      </table>
    </div>
    );
}

export default App;    