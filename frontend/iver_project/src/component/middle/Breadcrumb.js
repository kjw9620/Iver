import React from 'react'
import './breadcrumb.css'

class Test extends React.Component {

    componentDidMount() {
        let cf = this.props.cf;
        let c = this.props.c;
        let d = this.props.d;

        switch(cf){
            case "brand": cf="브랜드"; break;
            case "shop": cf="쇼핑몰"; break;
        }

        switch(c){
            case "outer": c="아우터"; break;
            case "top": c="상의"; break;
            case "shirts": c="셔츠"; break;
            case "pants": c="바지"; break;
        }

        switch(d){
            case "coat": d="코트"; break;
            case "jumper": d="점퍼"; break;
            case "suit": d="수트"; break;
            case "shortSleeve": d="반팔티/7부티"; break;
            case "longSleeve": d="긴팔티"; break;
            case "hood": d="후드티/집업"; break;
            case "basic": d="기본"; break;
            case "check": d="체크"; break;
            case "denim": d="데님"; break;
            case "cotton": d="면바지"; break;
            case "jeans": d="청바지"; break;
            case "short": d="반바지"; break;
        }

        this.setState({
            cf:cf,
            c:c,
            d:d
        });
    }

    state = {
        cf:"",
        c:"",
        d:"",
    }

    render() {
        return(
            <div className="breadCrumb">
                <div className="frame">
                    {this.state.cf}{'\u00A0'}>{'\u00A0'} 
                    카테고리{'\u00A0'}>{'\u00A0'} 
                    {this.state.c}{'\u00A0'}>{'\u00A0'}
                    {this.state.d}
                </div>
            </div>
        )
    }
}

export default Test