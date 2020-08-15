import React from 'react';
import './slider.css'

import banner1 from '../image/bannerImage_1.jpg'
import banner2 from '../image/bannerImage_2.jpg'
import banner3 from '../image/bannerImage_3.jpg'
import banner4 from '../image/bannerImage_4.jpg'
import banner5 from '../image/bannerImage_5.jpg'
import banner6 from '../image/bannerImage_6.jpg'

class Slider extends React.Component {

    componentDidMount (){
        console.log("this.componentDidMount");
        this.Interval();
        const dot = document.getElementById('dot');
        dot.childNodes[0].style.backgroundColor = 'red';
    }

    state = {
        imgList: [banner1,banner2,banner3,banner4,banner5,banner6],
        pos: 0,
        timer: '',
        slideShowTimer: 3000,
        dot_position: 0,
        preventDot: 0
    }

    Interval = () => {
        this.state.timer = setTimeout(this.Interval, 3000);
        this.dotMove();
        this.push();
    }

    dotMove = () => {
        const dot = document.getElementById('dot');

        if(dot.childNodes[this.state.dot_position] != undefined){
            dot.childNodes[this.state.dot_position].style.backgroundColor = 'red';
            dot.childNodes[this.state.preventDot].style.backgroundColor = 'black';
        }
    }

    push = () => {
        console.log("push");
        let pos = this.state.pos;
        
        if(pos >= -((this.state.imgList.length-4)*16.66)){
            this.setState({
                pos: pos - 16.66
            });
        }
        else {
            this.setState({
                pos: 0
            });
        }

        // dot move - push
        let dot_position = this.state.dot_position;
        this.setState({ preventDot: dot_position });
        if( dot_position+1 == 4) { dot_position = 0; }
        else { dot_position = dot_position+1; }
        this.setState({ dot_position: dot_position });
    }

    render() {

        const style = {
            transition: 'transform 0.3s ease',
            transform: 'translate(' + this.state.pos + '%)'    
        }

        return(
            <div className="ss">
                <div className='slider'>
                    <div className='content' style={style}>
                        <img className='img' src={this.state.imgList[0]} alt="banner1"/>
                        <img className='img' src={this.state.imgList[1]} alt="banner2"/>
                        <img className='img' src={this.state.imgList[2]} alt="banner3"/>
                        <img className='img' src={this.state.imgList[3]} alt="banner4"/>
                        <img className='img' src={this.state.imgList[4]} alt="banner5"/>
                        <img className='img' src={this.state.imgList[5]} alt="banner6"/>    
                    </div>
                </div>

                <div className="ISPager">
                    <ul className="ISPList" id="dot">
                        <li pos='1' key='ISP1' className='first ISP'><a href="#"></a></li>
                        <li pos='2' key='ISP2' className='ISP'><a href="#"></a></li>
                        <li pos='3' key='ISP3' className='ISP'><a href="#"></a></li>
                        <li pos='4' key='ISP4' className='ISP'><a href="#"></a></li>
                    </ul>
                </div>
            </div>
            
        );
    }

}

export default Slider;