import React from 'react'
import Breadcrumb from './Breadcrumb'
import { Link } from 'react-router-dom'

import ProductPage from './ProductPage'

import './middle.css'
import Up from '../../image/icons8-chevron-up-24.png'
import Down from '../../image/icons8-chevron-down-24.png'

class middle extends React.Component {
    
    state = {
        pos:1,
        toggle:true,
        cf:this.props.match.params.classification,
        c:this.props.match.params.categori,
        d:this.props.match.params.detail,
        preventC: "",
        now:""
    }

    componentDidMount() {
        this.firstCte();
    }

    componentDidUpdate() {
        console.log("component did update!");
        console.log(this.props.match.params.categori);
        
        this.firstCte();
    }

    firstCte = () => {
        if(this.props.match.params.categori != this.state.preventC){

            let pos;
            switch(this.props.match.params.categori){
                case "outer": pos=1; break;
                case "top": pos=2; break;
                case "shirt": pos=3; break;
                case "pants": pos=4; break;
            }

            this.setState({
                preventC: this.props.match.params.categori,
                pos: pos,
                toggle: true
            });
        }
    }

    change_cateBtn = (p) => {
        if(this.state.pos != p){ this.setState({ pos:p, toggle:true }); }
        else{ this.setState({ toggle:!this.state.toggle }); }
    }

    render() {
        return (
            <div className="middle">
                <Breadcrumb
                    cf={this.props.match.params.classification}
                    c={this.props.match.params.categori}
                    d={this.props.match.params.detail}>
                </Breadcrumb>
                
                <div className="frame">
                    <div className="cate-left">
                        <h2 className="cate-title">CATEGORIES</h2>
                        <h2 className="cate-default">
                            <div>전체</div>
                        </h2>

                        <h2 className="cate-default" onClick={()=>{ this.change_cateBtn(1) }}>
                            <div>
                                아우터
                                <img src={(this.state.pos === 1 && this.state.toggle) === true ? Down:Up}/>
                            </div>
                            <ul style={{ display: this.state.pos === 1 && this.state.toggle === true ? "block":"none"}}>
                                <Link to="/"><li>전체</li></Link>
                                <Link to="/brand/outer/coat"><li>코트</li></Link>
                                <Link to="/brand/outer/jumper"><li>점퍼</li></Link>
                                <Link to="/brand/outer/suit"><li>수트</li></Link>
                                <Link to="/brand/outer/default"><li>자켓</li></Link>
                                <Link to="/brand/outer/default"><li>가디건/조끼</li></Link>
                            </ul>
                        </h2>

                        <h2 className="cate-default" onClick={()=>{ this.change_cateBtn(2) }}>
                            <div>
                                상의
                                <img src={this.state.pos === 2 && this.state.toggle === true ? Down:Up}/>
                            </div>
                            <ul style={{ display: (this.state.pos === 2 && this.state.toggle) === true ? "block":"none"}}>
                                <Link to="/"><li>전체</li></Link>
                                <Link to="/brand/top/shortSleeve"><li>반팔티/7부티</li></Link>
                                <Link to="/brand/top/longSleeve"><li>긴팔티</li></Link>
                                <Link to="/brand/top/hood"><li>후드티/집업</li></Link>
                                <Link to="/brand/top/default"><li>맨투맨</li></Link>
                                <Link to="/brand/top/default"><li>니트/폴라티</li></Link>
                            </ul>
                        </h2>

                        <h2 className="cate-default" onClick={()=>{ this.change_cateBtn(3) }}>
                            <div>
                                셔츠
                                <img src={this.state.pos === 3 && this.state.toggle === true ? Down:Up}/>
                            </div>
                            <ul style={{ display: (this.state.pos === 3 && this.state.toggle) === true ? "block":"none"}}>
                                <Link to="/"><li>전체</li></Link>
                                <Link to="/brand/shirt/basic"><li>기본</li></Link>
                                <Link to="/brand/shirt/check"><li>체크</li></Link>
                                <Link to="/brand/shirt/denim"><li>데님</li></Link>
                                <Link to="/brand/shirt/default"><li>스트라이프</li></Link>
                                <Link to="/brand/shirt/default"><li>헨리넥/차이나</li></Link>
                            </ul>
                        </h2>

                        <h2 className="cate-default" onClick={()=>{ this.change_cateBtn(4) }}>
                            <div>
                                바지
                                <img src={this.state.pos === 4 && this.state.toggle === true ? Down:Up}/>
                            </div>
                            <ul style={{ display: (this.state.pos === 4 && this.state.toggle) === true ? "block":"none"}}>
                                <Link to="/"><li>전체</li></Link>
                                <Link to="/brand/pants/cotton"><li>면바지</li></Link>
                                <Link to="/brand/pants/jeans"><li>청바지</li></Link>
                                <Link to="/brand/pants/short"><li>반바지</li></Link>
                                <Link to="/brand/pants/default"><li>슬랙스</li></Link>
                                <Link to="/brand/pants/default"><li>트레이닝/조거팬츠</li></Link>
                            </ul>
                        </h2>
                    </div>

                    <ProductPage/>

                </div>
                
            </div>
        );
    }

}

export default middle;