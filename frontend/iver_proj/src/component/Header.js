import React from 'react';
import Logo from '../image/Iver_Logo.PNG';
import './header.css';

class Header extends React.Component {

    render(){
        return(
            <header>
                <img className="Logo_Iver" src={ Logo } alt='Logo' />
                <div className="searchingBar">
                    <img className="icon" src="https://img.icons8.com/material/48/000000/search-more--v2.png" alt='searching'/>
                    <input/>
                </div>
                <div className="user">
                    <p>아이버 소개 | </p>
                    <p>입점문의 | </p>
                    <p>장바구니 | </p>
                    <p>마이페이지 | </p>
                    <p>로그인</p>
                </div>
            </header>
        )
    }

}

export default Header;