import React from 'react'
import './navigation.css'

class Navigation extends React.Component{

    state = {
        list: ['홈','브랜드','쇼핑몰','그루밍','하이앤드','이벤트','스토어'],
    }

    handleMouseOver = (ele) => {
        ele.target.style.color = "grey"
    }

    handleMouseLeave = (ele) => {
        ele.target.style.color = "white"
    }

    makeGnb = (list) => {

        const load = list.map( (ele) => {

            return(
                <li key={ele} className='gnb' onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
                    <a>
                        <span>{ele}</span>
                        <div className='status'></div>
                        <div className='triangle-up'></div>
                    </a>
                </li>
            );
        
        });
        
        return load;
    }

    render() {

        console.log("rendering!");

        return(
            <div className="Navigation">
                {this.makeGnb(this.state.list)}
            </div>
        )
    }

}

export default Navigation