import React from "react";

const Stock = (props) => {
    const stockItem = props.stockInfo.filter((stock) => props.match.params.symbol === stock.symbol);
    return(
        <div className="StockItem">
            <h2>Name: {stockItem[0].name}</h2>
            <h2>Price: ${stockItem[0].lastPrice}</h2>
        </div>
    )
};

export default Stock;