import React, {Component} from "react";

class Button extends Component{
    render(){
        return(
            <button onClick={this.props.press}>{this.props.children}</button>
        );
    }
}

export default Button;