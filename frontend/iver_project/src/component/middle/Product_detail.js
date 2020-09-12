import React from "react"
import './product_detail.css'

import { Link, Route } from "react-router-dom"

import arrow_wh from '../../image/arrow-wh-down.png'
import upBtn from '../../image/arrow-up.png'
import DownBtn from '../../image/arrow-down.png'
import Iver_logo from '../../image/Iver_Logo_v2.PNG'
import plus_btn from '../../image/plus@3x.png'
import minus_btn from '../../image/minus@3x.png'
import favor_btn from '../../image/btn-heart.png'
import DetailTab from './DetailTab'

String.prototype.replaceAll = function(org, dest) {
    return this.split(org).join(dest);
}

class Product_detail extends React.Component{       

    state = {
        cBtn_Toggle: false,
        op_drop_1: false,
        op_drop_2: false,
        option_Btn1_clicked: false,
        option_value: [
            "[ 사이즈 ]를 선택하세요.",
            "[ 컬러 ]를 선택하세요."
        ],
        test_defualt_val1:"[ 사이즈 ]를 선택하세요." ,
        test_defualt_val2:"[ 컬러 ]를 선택하세요.",
        option_list:[],
        default_price: "169200",
        sumOf_price: 0,
        tab_pos:1,
        tab_ck_style: {
            border: "1px solid black",
            borderBottom: "0px"
        }
    }

    componentDidUpdate() {
        
        let sum=0;
        this.state.option_list.map(e => {
            sum+=e[2]*this.state.default_price;
        });

        if(sum != this.state.sumOf_price){
            this.setState({ sumOf_price: sum });
        }
    }

    select_option = (pos,option) => {

        if(pos==1){
            this.setState({
                option_value: [option, this.state.option_value[1]],
                option_Btn1_clicked:true
            });
        }
        else if(pos==2){
            this.setState({
                option_List: this.state.option_list.push([this.state.option_value[0],option,1]),
                option_value: [this.state.test_defualt_val1,this.state.test_defualt_val2],
                option_Btn1_clicked: false
            }); 
        
        }

        this.setState({
            op_drop_1:false,
            op_drop_2: false,
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

    plus_btn_click = (e) => {
        if(e[2] < 20){
            this.setState({
                option_list: this.state.option_list.map(item => item === e ? [e[0],e[1],e[2]+1] : item)
            });
        }
    }

    minus_btn_click = (e) => {
        if(e[2] > 1){
            this.setState({
                option_list: this.state.option_list.map(item => item === e ? [e[0],e[1],e[2]-1] : item)
            });
        }
    }

    del_option_ele = (e) => {
        this.setState({
           option_list: this.state.option_list.filter(ele => ele !== e)
        });
    }

    tab_clicked = (pos) => {
        if(this.state.tab_pos !== pos){
            this.setState({ tab_pos: pos });
        }
    }

    render (){
        
        return(
            <div className="detail_main">
                <div className="detail_info">
                    <div className="detail_pic">
                        <img src={"https://image.brandi.me/cproduct/2020/09/01/19045620_1598960574_image1_L.jpg"}></img>
                    </div>
                    <div className="detail_basic">
                        <div className="detail_header">
                            <h1>미니멀 히든 맥코트 그레이베이지</h1>
                            <div className="detail_price">
                                119,200
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
                                <span>{this.state.option_value[0]}</span>
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
                                <span>{this.state.option_value[1]}</span>
                                <img src={DownBtn}></img>
                            </span>
                            <ul className="option-menu-2" style={{display: this.state.op_drop_2 === true ? "block" : "none"}}>
                                <li className="menu-item"><div>[ 사이즈 ]를 선택하세요.</div></li>
                                <li className="menu-item" onClick={() => {this.select_option(2,"red")}}><div>red</div></li>
                                <li className="menu-item" onClick={() => {this.select_option(2,"green")}}><div>green</div></li>
                                <li className="menu-item" onClick={() => {this.select_option(2,"blue")}}><div>blue</div></li>
                            </ul>
                        </div>

                        <div className="detail_footer">
                            {this.state.option_list.map(e => {
                                return (
                                    <div className="detail_select_option">
                                        <span>{e[0]} / {e[1]}</span>
                                        <span onClick={()=>this.del_option_ele(e)} className="delete_btn">X</span>
                                        <span className="price_text">
                                            {this.state.default_price * e[2]}
                                        </span>
                                        
                                        <div className="qty-btn">
                                            <img onClick={()=>this.minus_btn_click(e)} src={minus_btn} alt="minus Btn"></img>
                                            <div className="input-num">{e[2]}</div>
                                            <img onClick={()=>this.plus_btn_click(e)} src={plus_btn} alt="plus Btn"></img>
                                        </div>
                                    </div>
                                )
                            })}

                            <div className="detail_price_calc">
                                <span>총 {this.state.option_list.length}개의 상품</span>
                                총 금액
                                <b>{ this.state.sumOf_price } 원</b>
                            </div>
                            
                            <div className="detail_btn">
                                <Link className="b1" to="/">
                                    <div>
                                        장바구니 담기
                                    </div>
                                </Link>

                                <Link className="b2" to="/">
                                    <div>
                                        바로 구매하기
                                    </div>
                                </Link>

                                <div className="btn_favor">
                                    <img src={favor_btn} alt="btn_favor.png"></img>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="detail_tab">
                    <Link to={this.props.match.path+"/tab1"}>
                        <div style={this.state.tab_pos === 1 ? this.state.tab_ck_style : {} } onClick={()=>{this.tab_clicked(1)}} className="tab_default">
                            상품정보
                        </div>
                    </Link>
                    <Link to={this.props.match.path+"/tab2"}>
                        <div style={this.state.tab_pos === 2 ? this.state.tab_ck_style : {} } onClick={()=>{this.tab_clicked(2)}} className="tab_default">
                            리뷰 <span>0</span>
                        </div>
                    </Link>
                    <Link to={this.props.match.path+"/tab3"}>
                        <div style={this.state.tab_pos === 3 ? this.state.tab_ck_style : {} } onClick={()=>{this.tab_clicked(3)}} className="tab_default">
                            Q&A <span>0</span>
                        </div>
                    </Link>
                    <Link to={this.props.match.path+"/tab4"}>
                        <div style={this.state.tab_pos === 4 ? this.state.tab_ck_style : {} } onClick={()=>{this.tab_clicked(4)}} className="tab_default">
                            주문정보
                        </div>
                    </Link>
                </div>
                
                <switch>
                    <Route exact path={this.props.match.path} component={DetailTab}></Route>
                    <Route exact path={this.props.match.path+"/:tab"} component={DetailTab}></Route>
                </switch>
                
            </div>
        )
    }
}

export default Product_detail