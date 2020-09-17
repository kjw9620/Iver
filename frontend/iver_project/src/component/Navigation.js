import React from 'react'
import './navigation.css'
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom"

class Navigation extends React.Component{

    state = {
        onMouse: 0,
        select: 'a',
        pageMove:'홈'
    }

    pageMove = (e) => {

        let click;
        const om = this.state.onMouse;
        if(om == 0) { click="홈" }
        else if(om == 1) { click="브랜드" }
        else if(om == 2) { click="쇼핑몰" }
        else if(om == 3) { click="그루밍" }
        else if(om == 4) { click="하이앤드" }
        else if(om == 5) { click="이벤트" }
        else if(om == 6) { click="스토어" }

        this.setState({
            pageMove: click
        });

    }

    triangle_hidden = () => {

        this.setState({
            onMouse: -1
        });
    }

    triangle_visible = (ele) => {

        const pos = parseInt(ele.target.classList[0]);

        this.setState({
            onMouse: pos
        });
    }

    render() {
        return(
            <div className="nav">
                <div className="Navigation" onMouseLeave={this.triangle_hidden}>
                    
                    <li key='홈' className='0 gnb home' onClick={this.pageMove} onMouseEnter={this.triangle_visible}><a>
                        <Link to="/">
                            <span>홈</span>
                            <div style={{visibility: this.state.pageMove=="홈"? "visible" : "hidden" }} className='status'></div>
                        </Link>
                    </a></li>
                
                    <li key='브랜드' className='1 gnb brand' onClick={this.pageMove} onMouseEnter={this.triangle_visible}><a className='1'>
                            <span>브랜드</span>
                            <div style={{visibility: this.state.pageMove=="브랜드"? "visible" : "hidden" }} className='1 status'></div>
                            <div style={{visibility: this.state.onMouse == 1 ? "visible":"hidden"}} className='1 triangle-up'></div>
                    </a></li>
                    

                    <li key='쇼핑몰' className='2 gnb shopping' onClick={this.pageMove} onMouseEnter={this.triangle_visible}><a className="2">
                        <span>쇼핑몰</span> 
                        <div style={{visibility: this.state.pageMove=="쇼핑몰"? "visible" : "hidden"}}  className='status'></div>
                        <div style={{visibility: this.state.onMouse == 2 ? "visible":"hidden"}} className='2 triangle-up hidden'></div>
                    </a></li>

                    <li key='그루밍' className='3 gnb' onClick={this.pageMove} onMouseEnter={this.triangle_visible}><a className="3">
                        <span>그루밍</span>
                        <div  style={{visibility: this.state.pageMove=="그루밍"? "visible" : "hidden"}} className='status'></div>
                        <div style={{visibility: this.state.onMouse == 3 ? "visible":"hidden"}} className='3 triangle-up hidden'></div>
                    </a></li>

                    <li key='하이앤드' className='4 gnb' onClick={this.pageMove} onMouseEnter={this.triangle_visible}><a>
                        <span>하이앤드</span>
                        <div style={{visibility: this.state.pageMove=="하이앤드"? "visible" : "hidden" }} className='1 status'></div>
                    </a></li>

                    <li key='이벤트' className='5 gnb' onClick={this.pageMove} onMouseEnter={this.triangle_visible}><a>
                        <span>이벤트</span>
                        <div style={{visibility: this.state.pageMove=="이벤트"? "visible" : "hidden" }} className='1 status'></div>
                    </a></li>

                    <li key='스토어' className='6 gnb' onClick={this.pageMove} onMouseEnter={this.triangle_visible}><a>
                        <span>스토어</span>
                        <div style={{visibility: this.state.pageMove=="스토어"? "visible" : "hidden" }} className='1 status'></div>
                    </a></li>

                    <div className="hidden dropDownMenu">
                        <div className="drop-brand">
                            <ul className="dropForm verticalLine">
                                <li>
                                    <strong><a className="dropContent" href="#">베스트</a></strong>
                                    <b><a className="dropContent" href="#">신상</a></b>
                                    <b><a className="dropContent" href="#">세일</a></b>
                                </li>
                            </ul>
                            <ul className="dropForm">
                                <li onClick={this.pageMove}>
                                    <b><a className="dropContent" href="#">아우터</a></b>
                                    <Link className="dropContent" to={"/brand/outer/coat"}>코트</Link>
                                    <Link className="dropContent" to={"/brand/outer/jumper"}>점퍼</Link>
                                    <Link className="dropContent" to={"/brand/outer/suit"}>수트</Link>
                                    <a className="dropContent" href="#">자켓</a>
                                    <a className="dropContent" href="#">가디건/조끼</a>
                                </li>
                            </ul>
                            <ul className="dropForm">
                                <li onClick={this.pageMove}>
                                    <b><a className="dropContent" href="#">상의</a></b>
                                    <Link className="dropContent" to={"/brand/top/shortSleeve"}>반팔티/7부티</Link>
                                    <Link className="dropContent" to={"/brand/top/longSleeve"}>긴팔티</Link>
                                    <Link className="dropContent" to={"/brand/top/hood"}>후드티/집업</Link>
                                    <a className="dropContent" href="#">맨투맨</a>
                                    <a className="dropContent" href="#">니트/폴라티</a>
                                </li>
                            </ul>
                            <ul className="dropForm">
                                <li onClick={this.pageMove}>
                                    <b><a className="dropContent" href="#">셔츠</a></b>
                                    <Link className="dropContent" to={"/brand/shirt/basic"}>기본</Link>
                                    <Link className="dropContent" to={"/brand/shirt/check"}>체크</Link>
                                    <Link className="dropContent" to={"/brand/shirt/denim"}>데님</Link>
                                    <a className="dropContent" href="#">스트라이프</a>
                                    <a className="dropContent" href="#">헨리넥/차이나</a>
                                </li>
                            </ul>
                            <ul className="dropForm">
                                <li onClick={this.pageMove}>
                                    <b><a className="dropContent" href="#">바지</a></b>
                                    <Link className="dropContent" to={"/brand/pants/cotton"}>면바지</Link>
                                    <Link className="dropContent" to={"/brand/pants/jeans"}>청바지</Link>
                                    <Link className="dropContent" to={"/brand/pants/short"}>반바지</Link>
                                    <a className="dropContent" href="#">슬랙스</a>
                                    <a className="dropContent" href="#">트레이닝/조거팬츠</a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }

}

export default Navigation