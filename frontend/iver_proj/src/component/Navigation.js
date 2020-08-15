import React from 'react'
import './navigation.css'

class Navigation extends React.Component{

    state = {
        list: ['홈','브랜드','쇼핑몰','그루밍','하이앤드','이벤트','스토어'],
    }

    render() {

        console.log("rendering!");

        return(
            <div className="Navigation">
                <li key='홈' className='gnb'><a>
                    <span>홈</span>
                    <div className='status'></div>
                    <div className='triangle-up'></div>
                </a></li>

                <li key='브랜드' className='gnb brand'><a>
                    <span>브랜드</span>
                    <div className='status'></div>
                    <div className='triangle-up'></div>
                </a></li>

                <li key='쇼핑몰' className='gnb'><a>
                    <span>쇼핑몰</span>
                    <div className='status'></div>
                    <div className='triangle-up'></div>
                </a></li>

                <li key='그루밍' className='gnb'><a>
                    <span>그루밍</span>
                    <div className='status'></div>
                    <div className='triangle-up'></div>
                </a></li>

                <li key='하이앤드' className='gnb'><a>
                    <span>하이앤드</span>
                    <div className='status'></div>
                    <div className='triangle-up'></div>
                </a></li>

                <li key='이벤트' className='gnb'><a>
                    <span>이벤트</span>
                    <div className='status'></div>
                    <div className='triangle-up'></div>
                </a></li>

                <li key='스토어' className='gnb'><a>
                    <span>스토어</span>
                    <div className='status'></div>
                    <div className='triangle-up'></div>
                </a></li>

                <div className="hidden dropDownMenu">
                    <div className="trand">
                        <ul className="dropForm">
                            <li>
                                <b><a className="dropContent" href="#">베스트</a></b>
                                <a className="dropContent" href="#">신상</a>
                                <a className="dropContent" href="#">세일</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default Navigation