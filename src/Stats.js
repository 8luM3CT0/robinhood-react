import { MoreHoriz } from '@material-ui/icons'
import React, {useState, useEffect} from 'react'
import './Stats.css'
import StatsRow from './StatsRow'
import {key} from './api'
import axios from 'axios'
import {db} from './firebase'


const BASE_URL = "https://finnhub.io/api/v1/quote?symbol=";
const KEY_URL = `&token=${key}`;

const testData = [];

function Stats() {
    const [stockData, setStockData] = useState([]);
    const [myStocks, setMyStocks] = useState([]);

    const getStocksData = (stock) => {
        return axios.get(`${BASE_URL}${stock}${KEY_URL}`)
        .catch((error) => {
            console.error("Error =>", error.message);
        });
    };

    const getMyStocks = () => {
        db
        .collection('myStocks')
        .onSnapshot(snapshot => {
            let promises = [];
            let tempData = []
            snapshot.docs.map((doc) => {
              promises.push(getStocksData(doc.data().ticker)
              .then(res => {
                tempData.push({
                  id: doc.id,
                  data: doc.data(),
                  info: res.data
                })
              })
            )})
            console.log(tempData);
            Promise.all(promises).then(()=>{
              setMyStocks(tempData);
            })
        })
      }


      useEffect(() => {
          const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "UBER", "AMZN", "GOOGL", "VZ", "TWTR"];
        
          getMyStocks();
          let promises = [];
          stocksList.map((stock) => {
              promises.push(
                  getStocksData(stock)
                  .then((res) => {
                      testData.push({
                          name: stock,
                          ...res.data
                      });
                  })
              )
          });

          Promise.all(promises).then(() => {
              console.log(testData);
              setStockData(testData);
          })
      }, [])

    return (
        <div className="stats">
            <div className="stats__container">
                <div className="stats__header">
                    <p>Stocks</p>
                    <MoreHoriz />
                </div>
                <div className="stats__content">
                    <div className="stats__rows">
                        {myStocks.map((stock) => (
                            <StatsRow
                            key={stock.data.ticker}
                            name={stock.data.name}
                            openPrice={stock.data.openPrice}
                            volume={stock.data.volume}
                            price={stock.data.price}
                            />
                            ))}
                    </div>
                </div>
            </div>
            <div className="stats__header stats-list ">
                <p>Lists</p>
            </div>
            <div className="stats__content">
                <div className="stats__rows">
                    {stockData.map((stock) => (
                        <StatsRow 
                        key={stock.name}
                        name={stock.name}
                        openPrice={stock.o}
                        price={stock.c}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Stats
