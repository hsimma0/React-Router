import { Link } from "react-router-dom";

const Dashboard = (props) => {
   let stockInfo = props.stockInfo 
   return (
       <div className='stocks'>
           <h1>Stocks</h1>
           {stockInfo.map((stock) => {
               const {name, symbol} = stock;

               return (
                   <Link to ={`/stock/${symbol}`}>
                       <h3>{name}</h3>
                   </Link>
               )
           })}
       </div>
   )
};

export default Dashboard;