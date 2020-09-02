import React from 'react'
import Product from '../Product'

import './productPage.css'
import check1 from '../../image/ico_chk.png'


class ProductPage extends React.Component{

    state = {
        toggle_chkBox: true,
        chk_style1:{
            backgroundColor: "white",
            border: "1px solid #e7e7e7"
        },
        chk_style2:{
            backgroundColor: "black",
            border: "none",
            width: "37px",
            height: "37px"
        },

        sort_status: "인기순",
        sort_style: {
            fontWeight: "1000"
        },
        sort_default:{

        }
    }

    sort_product = (sort) => {
        this.setState({
            sort_status: sort
        });
    }

    chkBox_click = () => {
        this.setState({
            toggle_chkBox: !this.state.toggle_chkBox
        });
    }

    render(){
        
        return(
            <div className="content-right">
                <div className="pageTitle">
                    <h1>카테고리</h1>
                </div>
                <div className="list_basic">
                    <div className="list_head">

                        <div className="list_subChk">
                            <span style={this.state.toggle_chkBox === true ? this.state.chk_style1 : this.state.chk_style2 } onClick={this.chkBox_click}>
                                <img src={check1}></img>                                
                            </span>
                            <p>세일</p>
                        </div>

                        <div className="list_sort">
                            <span style={this.state.sort_status === "최신순" ? this.state.sort_style : this.state.sort_default } onClick={() => {this.sort_product("최신순")}}>최신순</span>
                            <p>|</p>
                            <span style={this.state.sort_status === "인기순" ? this.state.sort_style : this.state.sort_default } onClick={() => {this.sort_product("인기순")}}>인기순</span>
                            <p>|</p>
                            <span style={this.state.sort_status === "낮은가격순" ? this.state.sort_style : this.state.sort_default } onClick={() => {this.sort_product("낮은가격순")}}>낮은가격순</span>
                            <p>|</p>
                            <span style={this.state.sort_status === "높은가격순" ? this.state.sort_style : this.state.sort_default } onClick={() => {this.sort_product("높은가격순")}}>높은가격순</span>
                            <p>|</p>
                            <span style={this.state.sort_status === "리뷰순" ? this.state.sort_style : this.state.sort_default } onClick={() => {this.sort_product("리뷰순")}}>리뷰순</span>
                        </div>

                    </div>

                    <Product></Product>
                </div>
            </div>
        );
    }

}

export default ProductPage;