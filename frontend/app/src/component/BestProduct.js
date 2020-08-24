import React from 'react'
import "./bestProduct.css"

class BestProduct extends React.Component{

    render() {
        return(
            <div className="bestProduct_bg">
                <div className="page_title">
                    <h1>{this.props.categori + " BEST"}</h1>
                    <p className="detail">더보기</p>
                </div>

                <div className="list_full">
                        
                </div>
            </div>
        )
    }

}

export default BestProduct