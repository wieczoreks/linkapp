import React,{Component} from 'react';
import Sidebar from "./Sidebar/Sidebar";
import Main from "./Main/Main";
import axios from 'axios';
import AuxComp from '../../AuxComp';
import Footer from "../Footer/Footer";

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
    startTime:'',
    endTime:'',
    timeTotal:'',
    
  };

  //this.apiUrl = 'http://5ba4f4fa328ae60014f30635.mockapi.io';
  this.apiUrl = 'https://wieczoreksbackend.herokuapp.com'
  this.deleteTodo = this.deleteTodo.bind(this);
  this.addTodo = this.addTodo.bind(this);
  this.updateTodo = this.updateTodo.bind(this);
  this.handleChange=this.handleChange.bind(this);
  this.handleSearch=this.handleSearch.bind(this);
  this.checkAllPages= this.checkAllPages.bind(this)
  this.alert = this.alert.bind(this)
}

async componentDidMount() {
  const response = await axios.get(`${this.apiUrl}/pages`);
  setTimeout(() => {
    this.setState({
      todos: response.data,
      loading: false
    });
  }, 2000);  
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

async checkAllPages () {

  this.setState({
     startTime: new Date(),
     loading: true
  });
 
  const response = await axios.get(`${this.apiUrl}/refresh`);
  
    if(response.data) {
      this.setState({
        todos: response.data,
        loading: false,
        endTime:new Date()
      });
    }
    this.checkTime()
    this.alert(`Updated successfully.`);
}


setRefreshIndex = (item) =>{
  const todos = this.state.todos;
  const index = todos.indexOf(item);
  const todo = todos[index]
  axios.put(`${this.apiUrl}/refresh/${item.pid}`,{
     link:todo.link, 
     }).then(resp =>{
      todos[index] = resp.data
      this.setState({
        todos:todos
      })
      this.alert(`${resp.data.link} updated successfully.`);
     });
  }



checkTime = () => {
  const time = (this.state.endTime-this.state.startTime)/1000;
  console.log(time)
  this.setState({
    timeTotal:time
  })
  this.alert(`It took ${this.state.timeTotal}`);
}

async addTodo () {
  const response = await axios.post(`${this.apiUrl}/pages`, {
    link: this.state.newTodo,
    tvalue:0
  });
  const todos = this.state.todos;
  todos.push(response.data);
  const todo = response.data.link
  this.setState({
    todos: todos,
    newTodo: ''
  });
  this.alert(`${todo} added successfully.`);
}

editTodo =(item) =>{
  const todos = this.state.todos;
  const index = todos.indexOf(item);
 
  const todo = this.state.todos[index];
  
  this.setState({
    editing: true,
    newTodo: todo.link,
    editingIndex: index
  });
}

async updateTodo () {
  const todo = this.state.todos[this.state.editingIndex];
  const response = await axios.put(`${this.apiUrl}/pages/${todo.pid}`, {
    link: this.state.newTodo
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
  this.alert(`${todo.link} updated successfully.`);
}

alert (notification) {
  this.setState({
    notification
  });

  setTimeout(() => {
    this.setState({
      notification: null
    });
  }, 5000);
}

async deleteTodo(item) {
  const todos = this.state.todos;
  const index = todos.indexOf(item);
  const todo = todos[index];
  await axios.delete(`${this.apiUrl}/pages/${todo.pid}`);
  delete todos[index];
  this.setState({ todos });
  this.alert(`${todo.link} deleted successfully.`);
}
  render(){
    const filteredPages = this.state.todos.filter(page=>{
        return page.link.toLowerCase().includes(this.state.searchEntry.toLowerCase());
    })
    return (
      <AuxComp>
                        <div className="row">
                          <Sidebar
                          handleChange={this.handleChange}
                          handleSearch={this.handleSearch}
                          newTodo={this.state.newTodo}
                          editing = {this.state.editing}
                          updateTodo = {this.updateTodo}
                          
                          addTodo = {this.addTodo}
                          searchEntry={this.state.searchEntry}
                          checkallPages={this.checkAllPages}
                           />
                          <Main 
                          loading={this.state.loading}
                          todos={filteredPages} 
                          editTodo={this.editTodo}
                          deleteTodo={this.deleteTodo}
                          editing={this.state.editing}
                          refresh={this.setRefreshIndex}
                          
                          />
                        </div>
                        <Footer notification={this.state.notification}/> 
      </AuxComp>
    );
}
}
export default MainContent;