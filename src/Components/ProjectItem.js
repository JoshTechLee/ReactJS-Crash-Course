import React, { Component } from 'react';

class ProjectItem extends Component {
  
  deleteProject(id){
    console.log('test');
    this.props.onDelete(id);
  }
  
  render() {
    console.log(this.props)
    return (
      <li className="Project">
        {/* print every item sent by Projects */}
        {this.props.business.title} - {this.props.business.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.business.id)}>X</a>
      </li>
    );
  }
}

export default ProjectItem;
