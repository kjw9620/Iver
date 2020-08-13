import React from 'react';
import './slider.css'

import banner1 from '../image/bannerImage_1.jpg'
import banner2 from '../image/bannerImage_2.jpg'
import banner3 from '../image/bannerImage_3.jpg'
import banner4 from '../image/bannerImage_4.jpg'
import banner5 from '../image/bannerImage_5.jpg'
import banner6 from '../image/bannerImage_6.jpg'
import banner7 from '../image/bannerImage_7.jpg'
import banner8 from '../image/bannerImage_8.jpg'


class Slider extends React.Component {

    state = {
        imgList: [banner1,banner2,banner3,banner4,banner5,banner6],
        pos: 0
    }

    push = () => {
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
    }

    pull = () => {
        let pos = this.state.pos;
        
        if(pos <= (this.state.imgList.length-7)*16.66){
            this.setState({
                pos: pos + 16.66
            });

        }
        else {
            pos = (this.state.imgList.length-3) * 16.66
            this.setState({
                pos: -pos
            });
        }
        console.log(this.state.pos);
    }

    render() {

        const style = {
            transition: 'transform 0.3s ease',
            transform: 'translate(' + this.state.pos + '%)'    
        }

        return(
            <div>
                <div className='slider'>
                    <div className='content' style={style}>
                        <img className='img' src={this.state.imgList[0]} alt="banner1"/>
                        <img className='img' src={this.state.imgList[1]} alt="banner2"/>
                        <img className='img' src={this.state.imgList[2]} alt="banner3"/>
                        <img className='img' src={this.state.imgList[3]} alt="banner4"/>
                        <img className='img' src={this.state.imgList[4]} alt="banner5"/>
                        <img className='img' src={this.state.imgList[5]} alt="banner6"/>
                        {/* <img className='img' src={this.state.imgList[6]}/>
                        <img className='img' src={this.state.imgList[7]}/> */}
                    </div>
                </div>

                <div className="ISPager">
                    <ul className="ISPList">
                        <li className='ISP'><a href="#"></a></li>
                        <li className='ISP'><a href="#"></a></li>
                        <li className='ISP'><a href="#"></a></li>
                        <li className='ISP'><a href="#"></a></li>
                    </ul>
                </div>

                <button onClick={this.push}>push</button>
                <button onClick={this.pull}>pull</button>
            </div>
            
        );
    }

}

export default Slider;