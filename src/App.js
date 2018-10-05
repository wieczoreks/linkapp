import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import particlesOptions from "./ParticleOptions.js";
import Navigation from "./components/Navigation/Navigation";
import Signin from "./components/Signin/Signin";
import AuxComp from "./AuxComp.js";
import Title from "./components/Title/Title";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
      searchEntry:'',
      editing: false,
      editingIndex: null,
      notification: null,
      todos: [],
      loading: true,
      route:'sigin',
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

onRouteChange = () => {
    this.setState({route:"home"})
}


  render() {
 
    const filteredPages = this.state.todos.filter(page=>{
      return page.name.toLowerCase().includes(this.state.searchEntry.toLowerCase());
    })

    return (
      <div className="App">
           <Particles className='particles' params={particlesOptions}/>
          {this.state.route==="sigin" ? 
            <Signin onRouteChange = {this.onRouteChange} />
          :
            <AuxComp>
                  <Title />
                  <Navigation />
                  <MainContent 
                      editing={this.state.editing} 
                      loading={this.state.loading}
                      todos={filteredPages}
                      editTodo={this.editTodo} 
                      deleteTodo={this.deleteTodo}/>
                  <Footer notification={this.state.notification} />   
            </AuxComp>
          }
      </div>    
    );
  }
}

export default App;
