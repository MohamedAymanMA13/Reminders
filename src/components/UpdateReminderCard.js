import React  from "react";

import { Component } from "react";

class UpdateReminderCard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      text:"",
      date:"",
      error2:{errorText:"",
      errorDate:""}
    };
  }
  componentDidMount(){
    console.log("UpdateReminderCard componentDidMount ")
    this.setState({  text:this.props.reminder.text, date:this.props.reminder.date})
  }
  

  validate2 = () => {
    let errorText = "";
    let errorDate = "";


    if (this.state.text.length < 1) {
      errorText = "Text Is Require";
    }
    if (this.state.date.length < 1) {
      errorDate = "Date Is Require";
    }

    if (errorText ||errorDate) {
      this.setState({
        error2:{
          errorText,
          errorDate
        },
      });
      return false;
    }
    return true;
  };
  handleSave=()=>{
    const isValid = this.validate2();
    if (isValid) {
    this.props.saveChanged({text:this.state.text,date:this.state.date},this.props.index ,this.props.reminder)
    

  }
  }
  render(){
    return (
      <div className="buttonUpdate p-2 m-1">
        <input className="form-control m-1" value={this.state.text} type="text" placeholder="Enter What U Think ... ?" onChange={(e) => this.setState({text:e.target.value})} />
        {this.state.error2.errorText ?
        <div className="alert alert-danger m-0  my-2 py-2" role="alert">
          {this.state.error2.errorText}
        </div>
        : ''}
        <input className="form-control m-1" value={this.state.date}  type="datetime-local" onChange={(e) => this.setState({date:e.target.value})}/>
        {this.state.error2.errorDate ?
        <div className="alert alert-danger m-0  my-2 py-2" role="alert">
          {this.state.error2.errorDate}
        </div>
        : ''}
        <div className="d-flex justify-content-center">
          <button className="Remove m-1 col-md-3 btn btn-success" type="button" onClick={this.handleSave} >Save Change</button>
          <button className="Remove m-1 col-md-3 px-4 btn btn-danger" onClick={()=> this.props.handleCancel(this.props.reminder)} >Cancel </button>
        </div>
              
      </div>
    )}
}

export default UpdateReminderCard