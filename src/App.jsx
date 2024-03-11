import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "./card.css"
import Card from "./Card";
function App() {
  const cardData= [
    {
      scheme:"FREE",
      price:0,
      features:[
        {
          name:"Single User",
          enabled:true
        },
        {
          name:"50GB Storage",
          enabled:true
        },
        {
          name:"Unlimited Public Project",
          enabled:true
        },
        {
          name:"Community Access",
          enabled:true
        },
        {
          name:"Unlimited Private Project",
          enabled:false
        },
        {
          name:"Dedicated Phone Support",
          enabled:false
        },
        {
          name:"Free Subdomain",
          enabled:false
        },
        {
          name:"Monthly Status Reports",
          enabled:false
        }
      ]
    },
    {
      scheme:"PLUS",
      price:9,
      features:[
        {
          name:"Single User",
          enabled:true
        },
        {
          name:"50GB Storage",
          enabled:true
        },
        {
          name:"Unlimited Public Project",
          enabled:true
        },
        {
          name:"Community Access",
          enabled:true
        },
        {
          name:"Unlimited Private Project",
          enabled:true
        },
        {
          name:"Dedicated Phone Support",
          enabled:true
        },
        {
          name:"Free Subdomain",
          enabled:true
        },
        {
          name:"Monthly Status Reports",
          enabled:false
        }
      ]
    },
    {
      scheme:"PRO",
      price:49,
      features:[
        {
          name:"Single User",
          enabled:true
        },
        {
          name:"50GB Storage",
          enabled:true
        },
        {
          name:"Unlimited Public Project",
          enabled:true
        },
        {
          name:"Community Access",
          enabled:true
        },
        {
          name:"Unlimited Private Project",
          enabled:true
        },
        {
          name:"Dedicated Phone Support",
          enabled:true
        },
        {
          name:"Free Subdomain",
          enabled:true
        },
        {
          name:"Monthly Status Reports",
          enabled:true
        }
      ]
    }
  ] 
  return (
    <div className="container">
      <div className="row">
      {cardData.map((item,index) =>{
        return <Card key={index} scheme= {item.scheme} price={item.price} features={item.features}/>
      })
    }
      </div>
    </div>
  );
}

export default App;
