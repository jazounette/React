import React, { PureComponent } from 'react';

class ÀFaire extends PureComponent {
    constructor(props){
        super(props);
        this.state = {   edit: false,      editTodoContent: undefined    }
    }
    ChangeStatus = () => {
        const status = this.props.todo.status === 'done' ? 'undone' : 'done';
        this.props.ChangeStatus(this.props.todo.id, status);
    }

    RenderDoneOrUndoneButton = () => {
        if (this.props.todo.status === 'done') { return (
            <button onClick={this.ChangeStatus} className="btn btn-success">DONE</button>
        ); }
        else{ return ( <button onClick={this.ChangeStatus} className="btn btn-danger">UNDONE</button> ) }
    }

    ValidEditTouDou = (e) => {
        e.preventDefault();
        this.props.EditTouDou(this.props.todo.id,  this.state.editTodoContent)
        this.setState({
            edit:false
        })
    }

    EditTouDou = () => {
        return (
            <form onSubmit={this.ValidEditTouDou} className="col-6">
                <input onChange={(e)=>{
                    this.setState({
                        EditTouDouContent : e.target.value
                    })
                }} type="text" className='form-control' defaultValue={this.props.todo.content}
                />
            </form>
        )
    }
    RenderTouDou = () => {
        if (!this.state.edit) {
            return this.renderContentTouDou();
        } else {
            return this.EditTouDou();
        }
    }
    RenderContentTouDou = () => {
        return(
            <div onClick={this.ChangeStatus} className={this.props.todo.status === 'done' ? 'btn col-6 text-success' : 'btn col-6 text-danger'}>
                {this.props.todo.content}
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.RenderTouDou()}
                <div className="col-2">
                    {this.RenderDoneOrUndoneButton()}
                </div>
                <div className="col-2">
                    <button className="btn btn-primaty" onClick ={ () => {
                        this.setState({ edit:true })
                    }}>EDIT</button>
                </div>
                <div >
{/*************************** manque un truc ici *************************/}
                </div>
            </div>
        );
    }
}

export default ÀFaire;