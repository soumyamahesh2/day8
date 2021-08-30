import React from "react";
import Card from "./Card";
import Campaign from "./Campaign";
alert("hi");
function CreatCard(campaignList) {
    return (
      <Card
        key={campaignList.campaign_name}
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
        {Campaign.map(CreatCard)}
      </table>
    </div>
    );
}

export default App;    