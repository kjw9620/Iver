import React from 'react'

import './detailTab.css'
import chk_black from '../../image/ico-chk-black.png'

class DetailTab extends React.Component {

    state = {
        detail_tab: "tab1",
        tab1_img: ['http://suare.diskn.com/1SAkocoplW',
                'http://suare.diskn.com/0mvSDtaHTA',
                'http://suare.diskn.com/0SIbpHbl68',
                'http://suare.diskn.com/1SB917Y9Oe',
                'http://suare.diskn.com/1SB917YL4G',
                'http://suare.diskn.com/17YIcVZkhs',
                'http://suare.diskn.com/17YIcVbqkW',
                'http://suare.diskn.com/2mgWbZXbJu',
                'http://suare.diskn.com/37JN0BWtpu',
                'http://suare.diskn.com/1mnzPjcUli',
                'http://suare.diskn.com/1mnzPjckX4',
                'http://suare.diskn.com/1mnbDEoKyW'],
        tab2_filter: 1,
        tab2_fs: { color: "black" }
    }

    componentDidUpdate() {
        let tab = this.props.match.params.tab;
        if(tab !== undefined){
            if(this.state.detail_tab !== tab){
                this.setState({ detail_tab:tab, tab2_filter:1 });
            }
        }
    }

    componentDidMount() {
        let tab = this.props.match.params.tab;
        if(tab !== undefined){
            if(this.state.detail_tab !== tab){
                this.setState({ detail_tab:tab });
            }
        }
    }

    tab1 = () => {
        return (
            <div>
                <div>
                    <img src="https://image.brandi.me/common/banner_view_imgwide.png" alt="zoom.jpg"/>
                </div>
                {
                    this.state.tab1_img.map(e=>{
                        return(<img src={e} alt={e}/>)
                    })
                }
            </div>
        )
    }

    tab2 = () => {
        return (
            <div className="tab2">
                <div className="filter">
                    <span style={{ color: this.state.tab2_filter === 1 ? "black" : "" }} onClick={()=>{this.filter_change(1)}}><img style={{display: this.state.tab2_filter === 1 ? "inline-block" : "none" }} src={chk_black} alt="checkMark.png"/>전체</span>
                    <span style={{ color: this.state.tab2_filter === 2 ? "black" : "" }} onClick={()=>{this.filter_change(2)}}><img style={{display: this.state.tab2_filter === 2 ? "inline-block" : "none" }} src={chk_black} alt="checkMark.png"/>사진리뷰</span>
                    <span style={{ color: this.state.tab2_filter === 3 ? "black" : "" }} onClick={()=>{this.filter_change(3)}}><img style={{display: this.state.tab2_filter === 3 ? "inline-block" : "none" }} src={chk_black} alt="checkMark.png"/>텍스트리뷰</span>
                </div>

                <div style={{display: this.state.tab2_filter === 3 ? "none" : "inline-block"}} className="review_1">
                    <h3>사진리뷰<span>0</span></h3>
                    <p>등록된 리뷰가 없습니다.</p>
                </div>
                <div style={{display: this.state.tab2_filter === 2 ? "none" : "inline-block"}} className="review_2">
                    <h3>텍스트리뷰<span>0</span></h3>
                    <p>등록된 텍스트리뷰가 없습니다.</p>
                </div>
            </div>
        )
    }

    filter_change = (pos) => {
        if(this.state.tab2_filter !== pos){
            this.setState({
                tab2_filter: pos
            });
        }
    }

    tab3 = () => {
        return (
            <div className="tab3">
                <div className="tab3_title">
                    <div>Q&A<span>0</span></div>
                    <span>문의 내용 작성</span>
                </div>
            </div>
        )
    }

    tab4 = () => {
        return (
            <div>
                tab4 test case
            </div>
        )
    }

    render() {

        return (
            <div className="default_frame">
                { this.state.detail_tab === "tab1" ?
                this.tab1() : this.state.detail_tab === "tab2" ?
                this.tab2() : this.state.detail_tab === "tab3" ?
                this.tab3() : this.tab4() }
            </div>
        )

    }

}

export default DetailTab