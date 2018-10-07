import React,{Component} from 'react';
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";
import PageList from "./Main/ListItems/PageList";
import axios from 'axios';

class MainContent extends Component {
constructor(props){
super(props)
  this.state = {
    newTodo: '',
    searchEntry:'',
    editing: false,
    editingIndex: null,
    notification: null,
    todos: [],
    loading: true,
  };

  this.apiUrl = 'https://5ba4f4fa328ae60014f30635.mockapi.io';
  this.deleteTodo = this.deleteTodo.bind(this);
  this.addTodo = this.addTodo.bind(this);
  this.updateTodo = this.updateTodo.bind(this);
  this.handleChange=this.handleChange.bind(this);
  this.handleSearch=this.handleSearch.bind(this);
  
  this.alert = this.alert.bind(this)
}

async componentDidMount() {
  const response = await axios.get(`${this.apiUrl}/todos`);
  setTimeout(() => {
    this.setState({
      todos: response.data,
      loading: false,
      
    });
  }, 1000);
}

handleChange(event) {
  this.setState({
    newTodo: event.target.value,
  });
}

handleSearch(event){    
  this.setState({
    searchEntry: event.target.value
  });
  

}

async addTodo () {

  const response = await axios.post(`${this.apiUrl}/todos`, {
    name: this.state.newTodo
  });


  const todos = this.state.todos;
  todos.push(response.data);

  this.setState({
    todos: todos,
    newTodo: ''
  });
  this.alert('Page added successfully.');
}

editTodo =(item) =>{
  const todos = this.state.todos;
  const index = todos.indexOf(item);

  const todo = this.state.todos[index];
  
  
  this.setState({
    editing: true,
    newTodo: todo.name,
    editingIndex: index
  });
}

async updateTodo () {
  const todo = this.state.todos[this.state.editingIndex];
  const response = await axios.put(`${this.apiUrl}/todos/${todo.id}`, {
    name: this.state.newTodo
  });
  const todos = this.state.todos;
  todos[this.state.editingIndex] = response.data;
  this.setState({
    todos,
    editing: false,
    editingIndex: null,
    newTodo: '',
    searchEntry:''
  });
  this.alert('Page updated successfully.');
}

alert (notification) {
  this.setState({
    notification
  });

  setTimeout(() => {
    this.setState({
      notification: null
    });
  }, 2000);
}

async deleteTodo(item) {
  const todos = this.state.todos;
  const index = todos.indexOf(item);
  const todo = todos[index];
  await axios.delete(`${this.apiUrl}/todos/${todo.id}`);
  delete todos[index];
  this.setState({ todos });
  this.alert(`${todo.name} deleted successfully.`);
}
  render(){

    const filteredPages = this.state.todos.filter(page=>{
      return page.name.toLowerCase().includes(this.state.searchEntry.toLowerCase());
    })
    return (
      <div className="row">
                          <Sidebar
                          handleChange={this.handleChange}
                          handleSearch={this.handleSearch}
                          newTodo={this.state.newTodo}
                          editing = {this.state.editing}
                          updateTodo = {this.updateTodo}
                          addTodo = {this.addTodo}
                          searchEntry={this.state.searchEntry}
                           />
                          <Main 
                          editing={this.state.editing} 
                          loading={this.state.loading}>
                                <PageList
                                  todos={filteredPages}
                                  editTodo={this.editTodo} 
                                  deleteTodo={this.deleteTodo}
                                  />
                          </Main>
                        </div>
      );
      }
} 

 
export default MainContent;