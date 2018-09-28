import axios from 'axios';
import React, { Component } from 'react';
import loadingGif from './loading.gif';
import './App.css';
import SearchBox from "./Searchbox.js"
import PageList from './PageList';
import Alert from "./Alert.js";
import Scroll from "./Scroll";
import cheerio from "cheerio";
import Particles from 'react-particles-js';
import particlesOptions from "./ParticleOptions.js";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";

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
      pages:[],
      loading: true,
    };

    this.apiUrl = 'https://5ba4f4fa328ae60014f30635.mockapi.io';

    this.alert = this.alert.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }

  async componentDidMount() {
    const response = await axios.get(`${this.apiUrl}/todos`);
    setTimeout(() => {
      this.setState({
        todos: response.data,
        loading: false,
        pages:response.data
      });
    }, 1000);
   
    var options = {
      uri: 'https://new.abb.com/seb-test',
      transform: function (body) {
          return cheerio.load(body);
      }, 
  };
  }

  handleChange(event) {
    this.setState({
      newTodo: event.target.value,
    });
  }

  handleSearch(event) {    
    this.setState({
      searchEntry: event.target.value,
    });
    
  
  }

  async addTodo() {

    const response = await axios.post(`${this.apiUrl}/todos`, {
      name: this.state.newTodo
    });


    const todos = this.state.todos;
    todos.push(response.data);

    this.setState({
      todos: todos,
      newTodo: ''
    });
    this.alert('Todo added successfully.');
  }

  editTodo(index) {
    const todo = this.state.todos[index];
    this.setState({
      editing: true,
      newTodo: todo.name,
      editingIndex: index
    });
  }

  async updateTodo() {
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
      
    });
    this.alert('Todo updated successfully.');
  }

  alert(notification) {
    this.setState({
      notification
    });

    setTimeout(() => {
      this.setState({
        notification: null
      });
    }, 2000);
  }

  async deleteTodo(index) {
    const todos = this.state.todos;
    const todo = todos[index];

    await axios.delete(`${this.apiUrl}/todos/${todo.id}`);
    delete todos[index];

    this.setState({ todos });
    this.alert('Todo deleted successfully.');
  }

  render() {
 
    const filteredPages = this.state.todos.filter(page=>{
      return page.name.toLowerCase().includes(this.state.searchEntry.toLowerCase());
    })

    return (
      <div className="App">
       
        <div className="container">
            <Particles 
              className='particles'
              params={particlesOptions}
            />
            <Navigation />
            
            <header className="App-header shadow-2 mb3 mt0">
              <h1 className="App-title">BLANK PAGE CHECKER FOR ABB.COM</h1>
          
              <SearchBox 
              handleSearch={this.handleSearch} 
              searchEntry={this.state.searchEntry}
              />
                        
              <input
                type="text"
                name="todo"
                className="my-4 form-control"
                placeholder="Add new page"
                onChange={this.handleChange}
                value={this.state.newTodo}
              />
              <button
                onClick={this.state.editing ? this.updateTodo : this.addTodo}
                className="btn-info mb-3 form-control"
                disabled={this.state.newTodo.length < 5}
              >
                {this.state.editing ? 'Update todo' : 'Add todo'}
              </button>
            </header>
          <Alert notification={this.state.notification}/>
        
          {
            this.state.loading &&
            <img src={loadingGif} alt=""/>
          }
          {
            (!this.state.editing || this.state.loading) &&
            <Scroll>
              <PageList 
              todos={filteredPages}
              editTodo={this.editTodo} 
              deleteTodo={this.deleteTodo}
              />
            </Scroll>
          }
        </div>
      </div>
    );
  }
}

export default App;
