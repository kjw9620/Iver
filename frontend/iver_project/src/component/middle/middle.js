import React from 'react'
import Breadcrumb from './Breadcrumb'

class middle extends React.Component {
    
    render() {
        return (
            <div>
                <Breadcrumb
                    cf={this.props.match.params.classification}
                    c={this.props.match.params.categori}
                    d={this.props.match.params.detail}/>
                    
            </div>
        );
    }

}

export default middle;