import React from 'react'
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
        }

    }

    componentDidUpdate() {
        console.log(this.state.toggle_chkBox);
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
                            <span>최신순</span>
                            <p>|</p>
                            <span>인기순</span>
                            <p>|</p>
                            <span>낮은가격순</span>
                            <p>|</p>
                            <span>높은가격순</span>
                            <p>|</p>
                            <span>리뷰순</span>
                        </div>

                    </div>
                </div>
            </div>
        );
    }

}

export default ProductPage;