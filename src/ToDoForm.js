import React, {Component} from 'react';
import './ToDoForm.css'

class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDesc = this.handleDesc.bind(this);
  }

  handleSubmit(event) {
    alert("Submitted");
    this.setState = {
      title: ' ',
      name: ' '
    };
    // event.preventDefault();

  }

  handleChange(event) {
    this.setState({title: event.target.value.substr(0,20)});


  }

  handleDesc(event) {
    this.setState({description: event.target.value});


  }





  // handleChange(event => {
  //   var newState = {};
  //   newState[event.target.name] = event.target.value;
  //   this.setState(newState);
  // });

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
      <div className="ToDo">
        <label>Title
        <input type="text" name="title" onChange={this.handleChange.bind(this)} value={this.state.title}/>
       </label>
      </div>
      <div>
        <label>Description
        <input type="text" name="description" onChange={this.handleDesc.bind(this)} value={this.state.description}/>
      </label>
      </div>
      <div>
        <input type="submit" value="Click"/>
      </div>
    </form>
    );
  }

}
export default ToDoForm;
