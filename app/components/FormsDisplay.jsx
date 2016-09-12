import React from 'react';
import Form from './Form.jsx'
import SecondForm from './SecondForm.jsx'
import ToggleForm from './ToggleForm.jsx'

class FormsDisplay extends React.Component {
    constructor(){
        super();
        this.state = {
            firstFormClicked : false,
            secondFormVisible : false
        }
    }

    handleSecondForm(){
        this.setState({
            secondFormVisible : !this.state.secondFormVisible
        })
    }

    handleFirstFormClicked(){
        this.setState({
            firstFormClicked : true
        })
    }

    render(){
        let {firstFormClicked, secondFormVisible} = this.state;

        return (
            <div>
                <div>Form Component</div>
                <Form handleClick={this.handleFirstFormClicked.bind(this)} isClicked={firstFormClicked} />
                <ToggleForm handleClick={this.handleSecondForm.bind(this)} firstFormClicked={firstFormClicked}/>
                { secondFormVisible ? <SecondForm/> : null }
            </div>
        )
    }
}

export default FormsDisplay;
