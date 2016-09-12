import React from 'react';

class Form extends React.Component {
    onFormSubmit(event){
        event.preventDefault();
        this.props.handleClick();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <input type="text" placeholder="Enter Name"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
