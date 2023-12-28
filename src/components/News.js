import React, { Component } from 'react'
import NewItems from './NewItems'

export class News extends Component {
    
    articles = [
        {
            "source": {
                "id": "abc-news-au",
                "name": "ABC News (AU)"
            },
            "author": "Aaron Kelly",
            "title": "Yeppoon Backyard Cricket Series raises the bat for its 10th year of Queensland's local Ashes",
            "description": "They may not be household names from the Australian cricket team, but Bungee, Tubsy, Booga, Chucky and Davo are about to embark on a tour of their own across the backyards of Central Queensland.",
            "url": "https://www.abc.net.au/news/2023-12-26/backyard-cricket-ashes-summer-australia-team-boxing-day/103259028",
            "urlToImage": "https://live-production.wcms.abc-cdn.net.au/1147166431dce0eedcbdfc7cf7bc73fb?impolicy=wcms_crop_resize&cropH=720&cropW=1280&xPos=100&yPos=0&width=862&height=485",
            "publishedAt": "2023-12-25T22:13:57Z",
            "content": "When you think of summer in Australia, Christmas leftovers, hot weather and backyard cricket are traditions to live by.\r\nBut this year will also mark the upcoming 10th edition of Central Queensland's… [+2582 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    constructor(){
        super();
        console.log("Hello I am a constructor of news component");
        this.state = {
            articles:this.articles,
            loading:false
        }
    }
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=82cc9e7777de4c0a95b0a0d2b204f116"
        let data = await fetch(url);
        let parseData = await data.json();
        // console.log(parseData);
        this.setState({
            articles:parseData.articles
        })
    }
    render() {
        return (
            <div className="container my-3">
                <h2>NewsKeeda - Top Headlines</h2>
                <div className="row">
                {this.state.articles.map((element)=>{console.log(element)
                    return <div className="col-md-4">
                        <NewItems key={element.url} title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageURL={element.urlToImage} newsUrl = {element.url}/>
                    </div>
                })}
                </div>
            </div>
        )
    }
}

export default News
