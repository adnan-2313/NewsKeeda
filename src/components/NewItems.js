import React, { Component } from 'react'

export class NewItems extends Component {
    
    render() {
        let {title,description,imageURL,newsUrl} = this.props
        return (
            <div className="my-3">
                <div className="card" style={{width: '18rem'}}>
                    <img src={!imageURL?"https://guwahatiplus.com/public/web/images/default-news.png":imageURL}  className="card-img-top" alt="..."/>
                        <div  className="card-body">
                            <h5  className="card-title">{title}</h5>
                            <p  className="card-text">{description}...</p>
                            <a href={newsUrl}  className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewItems
