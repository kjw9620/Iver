import React from 'react';
import Logo from '../image/Iver_Logo.PNG';
import './header.css';

class Header extends React.Component {

    state = {
        toggle_user: false,
        window_width: 0
    }

    componentDidMount() { window.addEventListener('resize', this.resize); }
    componentWillUnmount() { window.removeEventListener('resize', this.resize); }

    resize = () => { if(window.innerWidth >= 768) {this.setState({ toggle_user: false })} }

    render(){

        return(
            <header>

                <div className="top_m">
                    <img className="icon" src="https://img.icons8.com/material-rounded/48/000000/nothing-found.png" alt='searching'/>
                    <img className="Logo_Iver" src={ Logo } alt='Logo' />
                    <img className="icon" src="https://img.icons8.com/small/32/000000/user.png" alt='searching'
                        onClick={()=>{this.setState({ toggle_user: !this.state.toggle_user })}}/>
                </div>

                <div className="user_m" style={{display:this.state.toggle_user === false ? "none" : "block"}}>
                    <div className="user">
                        <p>아이버 소개 | </p>
                        <p>입점문의 | </p>
                        <p>장바구니 | </p>
                        <p>마이페이지 | </p>
                        <p>로그인</p>
                    </div>
                </div>

                <div className="top">
                    <div className="logo_top">
                        <img className="Logo_Iver" src={ Logo } alt='Logo' />
                    </div>
                    <div className="searchingBar">
                        <img className="icon" src="https://img.icons8.com/material-rounded/48/000000/nothing-found.png" alt='searching'/>
                        <input/>
                    </div>
                    <div className="user">
                        <p>아이버 소개 | </p>
                        <p>입점문의 | </p>
                        <p>장바구니 | </p>
                        <p>마이페이지 | </p>
                        <p>로그인</p>
                    </div>
                </div>

            </header>
        )
    }

}

export default Header;