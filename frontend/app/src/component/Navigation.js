import React from 'react'
import './navigation.css'

class Navigation extends React.Component{

    state = {
        onMouse: 0
    }

    triangle_hidden = () => {
        console.log("triangle hidden");
        this.setState({
            onMouse: 0
        });
    }

    triangle_visible = (ele) => {
        console.log("triangle visible");
        console.log(ele.target);
        console.log(ele.target.classList[0]);

        console.log(this.props.pageMove);

        const pos = parseInt(ele.target.classList[0]);

        this.setState({
            onMouse: pos
        });
    }

    render() {
        return(
            <div className="Navigation" onMouseLeave={this.triangle_hidden}>
                <li key='홈' className='gnb' onMouseEnter={this.triangle_visible}><a>
                    <span>홈</span>
                    <div style={{visibility: this.props.pageMove=="홈"? "visible" : "hidden" }} className='status'></div>
                </a></li>

                <li key='브랜드' className='1 gnb brand' onMouseEnter={this.triangle_visible}><a className='1'>
                    <span>브랜드</span>
                    <div style={{visibility: this.props.pageMove=="브랜드"? "visible" : "hidden" }} className='1 status'></div>
                    <div style={{visibility: this.state.onMouse == 1 ? "visible":"hidden"}} className='1 triangle-up'></div>
                </a></li>

                <li key='쇼핑몰' className='2 gnb shopping' onMouseEnter={this.triangle_visible}><a className="2">
                    <span>쇼핑몰</span> 
                    <div style={{visibility: this.props.pageMove=="쇼핑몰"? "visible" : "hidden"}}  className='status'></div>
                    <div style={{visibility: this.state.onMouse == 2 ? "visible":"hidden"}} className='2 triangle-up hidden'></div>
                </a></li>

                <li key='그루밍' className='3 gnb' onMouseEnter={this.triangle_visible}><a className="3">
                    <span>그루밍</span>
                    <div  style={{visibility: this.props.pageMove=="그루밍"? "visible" : "hidden"}} className='status'></div>
                    <div style={{visibility: this.state.onMouse == 3 ? "visible":"hidden"}} className='3 triangle-up hidden'></div>
                </a></li>

                <li key='하이앤드' className='gnb' onMouseEnter={this.triangle_visible}><a>
                    <span>하이앤드</span>
                </a></li>

                <li key='이벤트' className='gnb' onMouseEnter={this.triangle_visible}><a>
                    <span>이벤트</span>
                </a></li>

                <li key='스토어' className='gnb' onMouseEnter={this.triangle_visible}><a>
                    <span>스토어</span>
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
                            <li>
                                <b><a className="dropContent" href="#">아우터</a></b>
                                <a className="dropContent" href="#">코트</a>
                                <a className="dropContent" href="#">점퍼</a>
                                <a className="dropContent" href="#">자켓</a>
                                <a className="dropContent" href="#">가디건/조끼</a>
                                <a className="dropContent" href="#">수트</a>
                            </li>
                        </ul>
                        <ul className="dropForm">
                            <li>
                                <b><a className="dropContent" href="#">상의</a></b>
                                <a className="dropContent" href="#">반팔티/7부티</a>
                                <a className="dropContent" href="#">긴팔티</a>
                                <a className="dropContent" href="#">맨투맨</a>
                                <a className="dropContent" href="#">후드티/집업</a>
                                <a className="dropContent" href="#">니트/폴라티</a>
                            </li>
                        </ul>
                        <ul className="dropForm">
                            <li>
                                <b><a className="dropContent" href="#">셔츠</a></b>
                                <a className="dropContent" href="#">기본</a>
                                <a className="dropContent" href="#">체크</a>
                                <a className="dropContent" href="#">스트라이프</a>
                                <a className="dropContent" href="#">데님</a>
                                <a className="dropContent" href="#">헨리넥/차이나</a>
                            </li>
                        </ul>
                        <ul className="dropForm">
                            <li>
                                <b><a className="dropContent" href="#">바지</a></b>
                                <a className="dropContent" href="#">슬랙스</a>
                                <a className="dropContent" href="#">면바지</a>
                                <a className="dropContent" href="#">청바지</a>
                                <a className="dropContent" href="#">반바지</a>
                                <a className="dropContent" href="#">트레이닝/조거팬츠</a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        )
    }

}

export default Navigation