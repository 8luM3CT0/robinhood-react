import { Avatar, Chip } from '@material-ui/core'
import React, {useEffect ,useState } from 'react'
import LineGraph from './LineGraph'
import  './NewsFeed.css'
import Timeline from './Timeline'

function NewsFeed() {
    const [popTopics, setTopics] = useState([
        "Technology",
        "Top Movies",
        "Upcoming Earnings",
        "Crypto",
        "Cannabis",
        "Healthcare Supplies",
        "Index ETFs",
        "Technology",
        "China",
        "Pharma",
    ]);

    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div className="newsFeed">
            <div className="newFeed__container">
                <div className="newsFeed__chartSection">
                    <div className="newsFeed__priceValue">
                        <h1>$118,166.25</h1>
                        <p>$144.63+ (+0.04%) Today</p>
                    </div>
                    <div className="newsFeed__chart">
                        <LineGraph />
                        <Timeline />
                    </div>
                </div>
                <div className="newsFeed__buyingSection">
                    <h2>Buying Power</h2>
                    <h2>$439.33</h2>
                </div>
                <div className="newsFeed__marketSection">
                    <div className="newsFeed__marketBox">
                        <p>Cash Management</p>
                        <h3>Get a Robinhood debit card and start earning interest on your cash</h3>
                    </div>
                </div>
                <div className="newsFeed__popularSection">
                    <div className="newsFeed__popListsIntro">
                        <h1>Popular Lists</h1>
                        <p>Show More</p>
                    </div>
                    <div className="newsFeed__popListBadges">
                        {popTopics.map((topic) => (
                            <Chip 
                            className="topic__badge"
                            variant="outlined"
                            label={topic}
                            avatar= {
                                <Avatar src={`https://avatars.dicebear.com/api/human/${topic}.svg`} />
                            }
                            />
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsFeed
