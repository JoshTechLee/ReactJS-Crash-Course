import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
      newProject:{} // this will be set after pressing "submit"
    }
  }
  
  // can set default properties
  static defaultProps= {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  // handle after pressing "submit"
  handleSubmit(e){
    console.log(this.refs.title.value);
    if (this.refs.title.value === '') {
      alert('Title is required');
    } else {
      this.setState({newProject: {
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        //console.log(this.state);
        this.props.addProjData(this.state.newProject);
      });
    }
    e.preventDefault();
  }
  
  render() {
    let categoryOptions = this.props.categories.map(item => {
      return <option key={item} value={item}>{item}</option>
    });
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}> {/* .bind(this) binds "this" to form*/}
          <div>
            <label>Title</label><br />
            <input type="text" ref="title"/>
          </div>
          <div>
            <label>Title</label><br />
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;
