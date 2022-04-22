import React, { PureComponent } from 'react';
import FormTouDou from '../composants/FormTouDou';
import Notification from '../composants/Notification';
import ÀFaire from '../composants/ÀFaire';

class Toudou extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            todos : []
        }
    }
    AddTouDou = () => {
        //... => opérateur spread qui permet de recuperer la totalité des éléments du tableau
        let tmpTodos = [...this.state.todos]
        let newTodo = {
            id : (this.state.todos[this.state.todos.length-1] != undefined) ? (this.state.todos[this.state.todos.length-1].id+1) : 1,
            status : 'undone',
            content : text
        }
        tmpTodos.push(newTodo)
        this.setState({  todos : tmpTodos  })
    }

    DeleteTouDou = ()=> {
        let tmpTodos = []
        for(let todo of this.state.todos) {  if(todo.id != id){  tmpTodos.push(todo)  }  }
        this.setState({  todos : tmpTodos  })
    }

    ChangeStatus = () => {
        let tmpTodos = []
        for(let todo of this.state.todos) {
            // eslint-disable-next-line
            if(todo.id == id){  todo.status = newStatus  }
            tmpTodos.push(todo)
        }
        this.setState({  todos : tmpTodos  })
    }

    EditTouDou = () => {
        let tmpTodos = []
        for(let todo of this.state.todos) {
            if(todo.id == id){  todo.content = newContent  }
            tmpTodos.push(todo)
        }
        this.setState({  todos : tmpTodos  })
    }

    render() {
        return (
            <div>
                <h1>une liste de trucs à faire mais qui est tout doux</h1>
                <FormTouDou AddTouDou={this.AddTouDou}/>
                <Notification NumberTask={this.state.todos.length}/>
                {this.state.todos.map((toto) => {
                    return ( <ÀFaire  editToudou={this.EditTouDou}  deleteToudou={this.DeleteTouDou}  changeToudou={this.ChangeStatus}  todo={todo}/>  )
                })}
            </div>
        );
    }
}

export default Toudou;