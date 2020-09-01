import React from 'react'
import "./bestProduct.css"
import axios from 'axios';

class BestProduct extends React.Component{

    componentDidMount() {
        axios.get('/user?ID=12345')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    render() {
        return(
            <div className="bestProduct_bg">
                <div className="page_title">
                    <h1>{this.props.categori + " BEST"}</h1>
                    <p className="detail">더보기</p>
                </div>
                
                <div className="list_full">
                    
                    <ul>
                        <li className="list_image">
                            <a style={{margin: "0"}}>
                                <img className="image" src="https://image.brandi.me/cproduct/2018/12/20/6648788_1545292189_image1_L.jpg"/>
                            </a>
                        </li>
                        <li className="list_seller">
                            <a style={{margin: "0"}}>카네브로스</a>
                        </li>
                        <li className="list_title">
                            <a style={{margin: "0"}}>[CB] 오버 더블 후드 트...</a>
                        </li>
                        <li className="list_price">
                            <a style={{margin: "0"}}>169,200</a>
                        </li>
                    </ul>

                    <ul>
                        <li className="list_image">
                            <a style={{margin: "0"}}>
                                <img className="image" src="https://image.brandi.me/cproduct/2018/12/20/6648788_1545292189_image1_L.jpg"/>
                            </a>
                        </li>
                        <li className="list_seller">
                            <a style={{margin: "0"}}>카네브로스</a>
                        </li>
                        <li className="list_title">
                            <a style={{margin: "0"}}>[CB] 오버 더블 후드 트...</a>
                        </li>
                        <li className="list_price">
                            <a style={{margin: "0"}}>169,200</a>
                        </li>
                    </ul>

                    <ul>
                        <li className="list_image">
                            <a style={{margin: "0"}}>
                                <img className="image" src="https://image.brandi.me/cproduct/2018/12/20/6648788_1545292189_image1_L.jpg"/>
                            </a>
                        </li>
                        <li className="list_seller">
                            <a style={{margin: "0"}}>카네브로스</a>
                        </li>
                        <li className="list_title">
                            <a style={{margin: "0"}}>[CB] 오버 더블 후드 트...</a>
                        </li>
                        <li className="list_price">
                            <a style={{margin: "0"}}>169,200</a>
                        </li>
                    </ul>

                    <ul>
                        <li className="list_image">
                            <a style={{margin: "0"}}>
                                <img className="image" src="https://image.brandi.me/cproduct/2018/12/20/6648788_1545292189_image1_L.jpg"/>
                            </a>
                        </li>
                        <li className="list_seller">
                            <a style={{margin: "0"}}>카네브로스</a>
                        </li>
                        <li className="list_title">
                            <a style={{margin: "0"}}>[CB] 오버 더블 후드 트...</a>
                        </li>
                        <li className="list_price">
                            <a style={{margin: "0"}}>169,200</a>
                        </li>
                    </ul>

                    <ul>
                        <li className="list_image">
                            <a style={{margin: "0"}}>
                                <img className="image" src="https://image.brandi.me/cproduct/2018/12/20/6648788_1545292189_image1_L.jpg"/>
                            </a>
                        </li>
                        <li className="list_seller">
                            <a style={{margin: "0"}}>카네브로스</a>
                        </li>
                        <li className="list_title">
                            <a style={{margin: "0"}}>[CB] 오버 더블 후드 트...</a>
                        </li>
                        <li className="list_price">
                            <a style={{margin: "0"}}>169,200</a>
                        </li>
                    </ul>

                    <ul>
                        <li className="list_image">
                            <a style={{margin: "0"}}>
                                <img className="image" src="https://image.brandi.me/cproduct/2018/12/20/6648788_1545292189_image1_L.jpg"/>
                            </a>
                        </li>
                        <li className="list_seller">
                            <a style={{margin: "0"}}>카네브로스</a>
                        </li>
                        <li className="list_title">
                            <a style={{margin: "0"}}>[CB] 오버 더블 후드 트...</a>
                        </li>
                        <li className="list_price">
                            <a style={{margin: "0"}}>169,200</a>
                        </li>
                    </ul>

                    <ul>
                        <li className="list_image">
                            <a style={{margin: "0"}}>
                                <img className="image" src="https://image.brandi.me/cproduct/2018/12/20/6648788_1545292189_image1_L.jpg"/>
                            </a>
                        </li>
                        <li className="list_seller">
                            <a style={{margin: "0"}}>카네브로스</a>
                        </li>
                        <li className="list_title">
                            <a style={{margin: "0"}}>[CB] 오버 더블 후드 트...</a>
                        </li>
                        <li className="list_price">
                            <a style={{margin: "0"}}>169,200</a>
                        </li>
                    </ul>

                    <ul>
                        <li className="list_image">
                            <a style={{margin: "0"}}>
                                <img className="image" src="https://image.brandi.me/cproduct/2018/12/20/6648788_1545292189_image1_L.jpg"/>
                            </a>
                        </li>
                        <li className="list_seller">
                            <a style={{margin: "0"}}>카네브로스</a>
                        </li>
                        <li className="list_title">
                            <a style={{margin: "0"}}>[CB] 오버 더블 후드 트...</a>
                        </li>
                        <li className="list_price">
                            <a style={{margin: "0"}}>169,200</a>
                        </li>
                    </ul>

                    <ul>
                        <li className="list_image">
                            <a style={{margin: "0"}}>
                                <img className="image" src="https://image.brandi.me/cproduct/2018/12/20/6648788_1545292189_image1_L.jpg"/>
                            </a>
                        </li>
                        <li className="list_seller">
                            <a style={{margin: "0"}}>카네브로스</a>
                        </li>
                        <li className="list_title">
                            <a style={{margin: "0"}}>[CB] 오버 더블 후드 트...</a>
                        </li>
                        <li className="list_price">
                            <a style={{margin: "0"}}>169,200</a>
                        </li>
                    </ul>
                    <ul>
                        <li className="list_image">
                            <a style={{margin: "0"}}>
                                <img className="image" src="https://image.brandi.me/cproduct/2018/12/20/6648788_1545292189_image1_L.jpg"/>
                            </a>
                        </li>
                        <li className="list_seller">
                            <a style={{margin: "0"}}>카네브로스</a>
                        </li>
                        <li className="list_title">
                            <a style={{margin: "0"}}>[CB] 오버 더블 후드 트...</a>
                        </li>
                        <li className="list_price">
                            <a style={{margin: "0"}}>169,200</a>
                        </li>
                    </ul>

                    
                </div>
            
            </div>
        )
    }

}

export default BestProduct