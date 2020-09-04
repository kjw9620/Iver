import React from "react"
import './product_detail.css'

import arrow_wh from '../../image/arrow-wh-down.png'
import upBtn from '../../image/arrow-up.png'
import DownBtn from '../../image/arrow-down.png'
import Iver_logo from '../../image/Iver_Logo_v2.PNG'

class Product_detail extends React.Component{

    state = {
        cBtn_Toggle: false,
        op_drop_1: false,
        op_drop_2: false,
        option_Btn1_clicked: false,
        option1_value:"[ 사이즈 ]를 선택하세요.",
        option2_value:"[ 컬러 ]를 선택하세요."
    }

    select_option = (pos,option) => {


        if(pos==1){ this.setState({ option1_value:option }); }
        else if(pos==2){ this.setState({ option2_value:option }); }

        this.setState({
            op_drop_1:false,
            op_drop_2: false,
            option_Btn1_clicked:true
        });
    }

    dBtn_Toggle = (pos) => {
        if(pos==1){
            this.setState({
                op_drop_1: !this.state.op_drop_1,
                op_drop_2: false,
            });
        }
        else if(pos===2 && this.state.option_Btn1_clicked===true){
            this.setState({
                op_drop_1: false,
                op_drop_2: !this.state.op_drop_2
            });
        }
    }

    cBtn_click = () => {
        this.setState({
            cBtn_Toggle: !this.state.cBtn_Toggle
        });
    }

    render (){
        
        return(
            <div className="detail_main">
                <div className="detail_info">
                    <div className="detail_pic">
                        <img src={"https://image.brandi.me/cproduct/2020/03/06/14353239_1583482999_image1_L.jpg"}></img>
                    </div>
                    <div className="detail_basic">
                        <div className="detail_header">
                            <h1>[CB] 오버 더블 후드 트렌치코트_BK</h1>
                            <div className="detail_price">
                                169,200
                            </div>
                        </div>
                        <div className="detail_content">
                            <div className="detail_deliver">
                                배송비
                                <span>하이버는 전상품 무료배송</span>
                            </div>
                            <div className="detail_point">
                                적립포인트
                                <span>1,692 Point (1% 적립)</span>
                            </div>
                            <div className="detail_couponBtn">
                                쿠폰
                                <div className="detail_couponLink">
                                    <a>할인쿠폰받기</a>
                                    <a><img src= {arrow_wh} alt="arrow.png"/></a>
                                </div>
                            </div>
                            <div className="detail_certification">
                                정품인증
                                <span>
                                    하이버의 모든 상품은 100% 정품입니다
                                    <img onClick={this.cBtn_click} src={this.state.cBtn_Toggle === true ? upBtn : DownBtn}/>
                                </span>
                            </div>

                            <div className="certification"  style={{display: this.state.cBtn_Toggle === true ? "block" : "none"}}>
                                <div className="certification_title">
                                    <img src={Iver_logo} alt="Iver_logo.png"></img>
                                    <span>정품인증</span>
                                </div>
                                <div className="certification_content">
                                    하이버에서 판매되는 모든 브랜드 상품은 정식제조, 정식수입원을 통해 유통되는 100% 정품임을 보증합니다.
                                </div>

                            </div>
                        </div>

                        <div className="detail_option">
                            <span className="option-btn-1 active" onClick={() => {this.dBtn_Toggle(1)}}>
                                <span>{this.state.option1_value}</span>
                                <img src={DownBtn}></img>
                            </span>
                            <ul className="option-menu-1" style={{display: this.state.op_drop_1 === true ? "block" : "none"}}>
                                <li className="menu-item"><div>[ 사이즈 ]를 선택하세요.</div></li>
                                <li className="menu-item" onClick={() => {this.select_option(1,"095")}}><div>095</div></li>
                                <li className="menu-item" onClick={() => {this.select_option(1,"100")}}><div>100</div></li>
                                <li className="menu-item" onClick={() => {this.select_option(1,"105")}}><div>105</div></li>
                            </ul>
                            
                            {/*  */}
                            <span className={this.state.option_Btn1_clicked === false ? "option-btn-2 inactive" : "option-btn-2 active" } onClick={() => {this.dBtn_Toggle(2)}}>
                                <span>{this.state.option2_value}</span>
                                <img src={DownBtn}></img>
                            </span>
                            <ul className="option-menu-2" style={{display: this.state.op_drop_2 === true ? "block" : "none"}}>
                                <li className="menu-item"><div>[ 사이즈 ]를 선택하세요.</div></li>
                                <li className="menu-item" onClick={() => {this.select_option(2,"red")}}><div>red</div></li>
                                <li className="menu-item" onClick={() => {this.select_option(2,"green")}}><div>green</div></li>
                                <li className="menu-item" onClick={() => {this.select_option(2,"blue")}}><div>blue</div></li>
                            </ul>

                            {this.state.option1_value+ ", " +this.state.option2_value}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Product_detail