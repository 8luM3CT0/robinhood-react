import React from 'react'
import StockChart from './stock.svg'
import './StatsRow.css'

function StatsRow(props) {
    const percentage = ((props.price - props.openPrice)/props.openPrice) * 100;


    return (
        <div className="statsRow" >
            <div className="statsRow__intro">
            <h1>{props?.name}</h1>
                <p>{props.volume && (props.volume + " shares")}</p>
                <div className="statsRow__chart">
                    <img src={StockChart} height={16} alt=""/>
                </div>
                <div className="statsRow__numbers">
                    <div className="statsRow__price">{props.price}</div>
                    <div className="statsRow__percentage">+{Number(percentage).toFixed(2)}%</div>
                </div>
            </div>
        </div>
    )
}

export default StatsRow
