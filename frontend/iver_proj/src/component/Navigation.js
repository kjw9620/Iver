import React from 'react'
import './navigation.css'

class Navigation extends React.Component{

    render() {

        console.log("rendering!");

        return(
            <div className="Navigation">
                <li key='홈' className='gnb'><a>
                    <span>홈</span>
                    <div className='status'></div>
                </a></li>

                <li key='브랜드' className='gnb brand'><a>
                    <span>브랜드</span>
                    <div className='status'></div>
                    <div className='triangle-up hidden'></div>
                </a></li>

                <li key='쇼핑몰' className='gnb'><a>
                    <span>쇼핑몰</span>
                    <div className='status'></div>
                    <div className='triangle-up hidden'></div>
                </a></li>

                <li key='그루밍' className='gnb'><a>
                    <span>그루밍</span>
                    <div className='status'></div>
                    <div className='triangle-up hidden'></div>
                </a></li>

                <li key='하이앤드' className='gnb'><a>
                    <span>하이앤드</span>
                </a></li>

                <li key='이벤트' className='gnb'><a>
                    <span>이벤트</span>
                </a></li>

                <li key='스토어' className='gnb'><a>
                    <span>스토어</span>
                </a></li>

                <div className="hidden dropDownMenu">
                    <div className="drop-brand">
                        <ul className="dropForm verticalLine">
                            <li>
                                <b><a className="dropContent" href="#">베스트</a></b>
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
                        <ul className="dropForm">
                            <li>
                                <b><a className="dropContent" href="#">신발</a></b>
                                <a className="dropContent" href="#">운동화</a>
                                <a className="dropContent" href="#">스니커즈</a>
                                <a className="dropContent" href="#">구두/로퍼</a>
                                <a className="dropContent" href="#">부츠/워커</a>
                                <a className="dropContent" href="#">샌들/슬리퍼</a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                
            </div>
        )
    }

}

export default Navigation