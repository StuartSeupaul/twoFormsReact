import React from 'react';

class ToggleForm extends React.Component {
    handleToggleForm(event){
        if (this.props.firstFormClicked) this.props.handleClick();
    }

    render(){
        return(
            <div onClick={this.handleToggleForm.bind(this)}>
                X
            </div>
        );
    }
}

export default ToggleForm;
