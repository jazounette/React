import React, { PureComponent } from 'react';

class FormTouDou extends PureComponent {
    constructor (props){
        super(props)
        this.state = {
            contentTask : undefined
        }
    }
    Submit = (e) => {
        e.preventDefault();
        if (this.state.contentTask != undefined) {  
            this.props.AddTouDou(this.state.contentTask); 
            this.setState({contentTask: undefined})}
    }
    changeTask = (e) => {
        this.setState({
            contentTask : e.target.value
        })
    }
    render() {
        return (
            <form className='row m-1' onSubmit={this.Submit}>
                <div>
                    <input type="text" onChange={this.changeTask} className="form-control"/>
                </div>
                <div className='col-3'>
                    <button type='submit' className='form-control btn btn-secondary'></button>
                </div>
            </form>
            // <div>
            //     <h1>un formulaire qu'il est vraiment tout doux</h1>
            // </div>
        );
    }
}

export default FormTouDou;