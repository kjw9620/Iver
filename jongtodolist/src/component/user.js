import React from 'react';
import "./user.css"

class User extends React.Component{

    state = {
        list: [
            '#c70039','#a6dcef','#f3d1f4','#ffd31d','#b6eb7a','#ff5200',
            '#1f4068','#5c2a9d','#ffdecf','#e79cc2','#ba7967','#eeeeee'
        ]
    }

    color = (list) => {

        let style= []
                
        let colorList = list.map(
            (ele,index) => (
                <canvas className="color" key={index} style={{ backgroundColor:ele }}/>
            )
        )
        
        return colorList;
    }

    render(){
        return(
            <div>


                {/* Todo input area */}
                <div className="todoInput">
                        <h4>Make todo list</h4>
                        <input className="inputSize" placeholder="Wrtie to do list"/>
                </div>

                {/* Create Tag area */}
                <div className="createTag">
                    <div>
                        <h4>create Tag</h4>
                        <img className="js-createTag addImg" src="https://img.icons8.com/ultraviolet/40/000000/add-property.png"/>
                    </div>

                    <div className="posTag">
                        {/* Tag List upadate area */}
                    </div>
                </div>

                
                <div className="selectColor">
                        {/*canvas style object로 수정 필요 */}
                        
                        { this.color(this.state.list) }
                    
                </div>  
                
                        
                <img className="js-todoEnroll" src="https://img.icons8.com/material-outlined/48/000000/edit-user-male.png"/>



            </div>

        )
    }

}

export default User