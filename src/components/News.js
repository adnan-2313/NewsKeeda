import React, { Component } from 'react'
import NewItems from './NewItems'

export class News extends Component {

    render() {
        return (
            <div className="container my-3">
                <h2>NewsKeeda - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewItems title="mytitle" description="mydesc" imageURL="https://live-production.wcms.abc-cdn.net.au/1147166431dce0eedcbdfc7cf7bc73fb?impolicy=wcms_crop_resize&cropH=720&cropW=1280&xPos=100&yPos=0&width=862&height=485" />
                    </div>
                    <div className="col-md-4">
                        <NewItems title="mytitle" description="mydesc" />
                    </div>
                    <div className="col-md-4">
                        <NewItems title="mytitle" description="mydesc" />
                    </div>
                </div>
            </div>
        )
    }
}

export default News
