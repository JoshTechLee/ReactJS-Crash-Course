
import React, { Component } from 'react';
// import <class> from <path>
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import uuid from 'uuid';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      // object
      business:[]
    }
  }
  // Life-cycle method: runs when component is re-rendered
  // AJAX: fetching data from outside API, in componentWillMount OR componentDidMount
  componentWillMount(){
    this.setState({business:[
      {
        id: uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        id: uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id: uuid.v4(),
        title: 'E-commerce Shopping Cart',
        category: 'Web Development'
      }
    ]});
  }
  
  handleAddProjData(projectData){
    //console.log(projectData);
    let newState = this.state.business;
    newState.push(projectData);
    this.setState({projects: newState});
  }
  
  handleDeleteProjData(id){
    //console.log(projectData);
    let newState = this.state.business;
    //  look throuhg projects, find matching ids and put into index
    let index = newState.findIndex(x => x.id === id);
    newState.splice(index, 1);
    this.setState({projects: newState});

  }
  
  // business object array sent to Projects as "business" (Look into Project.js)
  render() {
    return (
      <div className="App">
        <AddProject addProjData = {this.handleAddProjData.bind(this)}/>
        <Projects business = {this.state.business} onDelete={this.handleDeleteProjData.bind(this)}/>
      </div>
    );
  }
}

export default App;
