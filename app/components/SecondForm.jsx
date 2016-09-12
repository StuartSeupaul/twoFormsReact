import React from 'react';

class SecondForm extends React.Component {
    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <input type="text" placeholder="Enter Address"/>
                <button>Submit</button>
            </form>
        );
    }
}

export default SecondForm;
