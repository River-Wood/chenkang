import React from "react";
import "./Form.scss"

const CORRECT_USER = "子琪";
const CORRECT_PWD = "陈康";

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hint : "hey",
            user : "",
            pwd : "",
        }
        this.handleSubmit  = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePwdChange = this.handlePwdChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('submit')
        console.log(`user ${this.state.user} pwd ${this.state.pwd}`)

        if (this.state.user === CORRECT_USER && this.state.pwd === CORRECT_PWD){
             this.setState({hint : "correct"});
             console.log(this.props.history);
             this.props.history.push("/memory");
        }else{
            this.setState({hint : "try again"});
        }
        
    }

    handleNameChange(event) {
        console.log(event.target.value);
        this.setState({user : event.target.value});
    }
    
    handlePwdChange(event) {
        console.log(event.target.value);
        this.setState({pwd : event.target.value});
    }

    render() {
        return <form id="form" className="topBefore" onSubmit={this.handleSubmit}>
            <h1>{this.state.hint}</h1>
                    <input id="name"  type="text" placeholder="NAME" onChange={this.handleNameChange}/>
                    <input id="email" type="text" placeholder="PASSWORD" onChange={this.handlePwdChange}/>
                    <input id="submit" type="submit" value="GO!" />
                </form>;
    }
}

export default Form;