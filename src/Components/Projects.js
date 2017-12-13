import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }
  
  render() {
    console.log(this.props)
    let projectItems;   // create variable "projectItems"
    if (this.props.business) {  // foreach "item" in "business"
      projectItems = this.props.business.map(item => {
        //console.log(project);
        return (
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={item.title} business={item} /> // call ProjectItem and send each "item" (look into ProjectItem.js)
        );
      });
    }
    return (
      <div className="Projects">
        <h3>Lastest Projects</h3>
        <br />
        {projectItems}
      </div>
    );
  }
}


// doesn't work for some reason...
// Projects.propTypes = {
//   projects: React.PropTypes.array
// }

export default Projects;
