import React from 'react'
import './navigation.css'

class Navigation extends React.Component{

    render() {
        return(
            <div className="Navigation">
                <li className='gnb'>
                    <a>
                        <span>홈</span>
                        <div class='status'></div>
                    </a>
                </li>
                <li className='gnb'>
                    <a>
                        <span>브랜드</span>
                        <div class='status'></div>
                    </a>
                </li>
                <li className='gnb'>
                    <a>
                        <span>쇼핑몰</span>
                        <div class='status'></div>
                    </a>
                </li>
                <li className='gnb'>
                    <a>
                        <span>그루밍</span>
                        <div class='status'></div>
                    </a>
                </li>
            </div>
        )
    }

}

export default Navigation