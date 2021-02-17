import { FlashOn, MoreHoriz } from '@material-ui/icons'
import axios from 'axios';
import {key} from './api'
import React, {useState, useEffect} from 'react'
import './Article.css'

const BASE_URL = "https://finnhub.io/api/v1/news?category=general";

function Article(props) {
    const [article, setArticle] = useState([]);

    useEffect(() => {
        if(props){
            return axios
            .get(BASE_URL)
            .then((res) => {
                console.log(res.data, ' res.data');
                let article = res.data[0];
                setArticle(article);
            })
            .catch((error)=> {
                console.error("Error => ", error.message);
            });
        }
    }, []);

    return (
        <div className="article">
            <div className="article__feed">
                <div className="article__title">
                    <FlashOn />
                    <div className="article__source">
                        <p>{article.headline}</p>
                    </div>
                    <MoreHoriz />
                </div>
                <div className="article__content">
                    <div className="article__paragraph">
                        <p>{article.summary}</p>
                    </div>
                    <div className="article__image">
                        <img src={article.image} width="125" height="75" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article
