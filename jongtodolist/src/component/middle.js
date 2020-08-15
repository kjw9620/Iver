import React from 'react';
import User from './user'
import "./middle.css"

class Middle extends React.Component {

    render(){
        return( 
            <div className="middle">
                <nav>
                    <User/>
                </nav>
                
                <aside>
                    aside
                </aside>
            </div>
        )
    }

}

export default Middle;