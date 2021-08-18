import React  from "react";
import { connect } from 'react-redux'
import {addReminder,clearAllReminders,deleteReminder,updateReminder} from 'redux/store/actions'
import { Component } from "react";
import moment from 'moment'
import reminderImage from "./assets/reminder.png"

import UpdateReminderCard from 'components/UpdateReminderCard'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:"",
      date:"",
      updateReminder:[],
      error:{errorText:"",
      errorDate:""}
    };
    
  }

handleDelete=(reminder)=>{
  const newValues=this.props.reminderInfo.filter((x)=>x!==reminder)
  this.props.deleteReminder(newValues)
  localStorage.setItem("reminders", JSON.stringify(newValues))
}
handleUpdate=(reminder)=>{
  this.setState({
    updateReminder:[...this.state.updateReminder,reminder]
  })
}

 handleCancel=(reminder)=>{
   console.log("canac",[...this.props.reminderInfo])
   const newUpdateReminder=this.state.updateReminder.filter((x)=>x!==reminder)
    this.setState({updateReminder:newUpdateReminder})
 }
 saveChanged=(value,index,reminder)=>{
 
    const array=[...this.props.reminderInfo]
  const newUpdateReminder=this.state.updateReminder.filter((x)=>x!==reminder)
  this.setState({updateReminder:newUpdateReminder})
  array[index]=value
  this.props.updateReminder(array)
  localStorage.setItem("reminders",JSON.stringify(array))

  
 }

  handleAdd = ()=> {
    const isValid = this.validate();
    if (isValid) {
      this.props.addReminder({text : this.state.text,date: this.state.date?this.state.date:new Date()})
      this.setState({text: "" ,date:"",error:{errorText:"",errorDate:""}});
      localStorage.setItem("reminders",JSON.stringify([...this.props.reminderInfo,{text : this.state.text,date: this.state.date?this.state.date:new Date()}]))
     
    }
    
  }
  clearReminders =()=>{
   this.props.clearAllReminders()
   localStorage.removeItem("reminders")
  }
  

  validate = () => {
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
        error:{
          errorText,
          errorDate
        },
      });
      return false;
    }
    return true;
  };

  render(){
    return (
      <div className="px-2">

      <div className="App col-md-6 ">
          
      <div className="tittle">
        <img src={reminderImage} alt="reminderImage" className="img-fluid w-25" />
        <h2 className="text-decoration-underline text-white">What Should U Do ?</h2>

      </div>
      <input className="form-control mb-1" value={this.state.text} type="text" placeholder="Enter What U Think ... ?" onChange={(e) => this.setState({text : e.target.value}) } />
      {this.state.error.errorText ?
              <div className="alert alert-danger m-0  my-2 py-2" role="alert">
                {this.state.error.errorText}
              </div>
              : ''}
      <input className="form-control mb-1" value={this.state.date} type="datetime-local"  onChange={(e) => this.setState({date : e.target.value}) } />
      {this.state.error.errorDate ?
              <div className="alert alert-danger m-0  my-2 py-2" role="alert">
                {this.state.error.errorDate}
              </div>
              : ''}
      <button type="button" className="btn btn-primary w-100 mb-1 mt-1" onClick={this.handleAdd} >Add Reminder</button>
      <div>{this.props.reminderInfo?.map((reminder,i)=>{
        return(
          <div className="container itemConten p-2 my-2 "  key={`reminderInfo${i+1}`}>
            {this.state.updateReminder.filter((x)=> x === reminder).length===0?
            <div  className="row  align-items-center">
              <p className="col-md-3 my-0 text-center">{reminder.text} </p>
              <p className="col-md-3 my-0 text-center">{moment(reminder.date).fromNow()} </p>  
              {/* format("DD MM YYYY, h:mm") */}
              <div className="col-md-6 my-0 d-flex justify-content-end button ">
                <button className="Remove  btn btn-primary  me-2  " onClick={()=> this.handleUpdate(reminder)} >Update</button>
                <button className="Remove  btn btn-danger " onClick={()=> this.handleDelete(reminder)} >Remove</button>
              </div>
              
            </div>
            :<div>
           <UpdateReminderCard  handleCancel={this.handleCancel} index={i} reminder={reminder} saveChanged={this.saveChanged}/>
            </div>
            }

          </div>
        )
      })} </div>
      <button className="btn btn-danger w-100 mb-1 mt-1" type="button" disabled={this.props.reminderInfo.length?false:true} onClick={this.clearReminders} >Clear All Reminder</button>
      
    </div>
    </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    // reminderInfo  :[{text:"csc",date:new Date()}]
    reminderInfo  :state.Test.reminderInfo
  }
}

const mapDispatchToProps = { addReminder,clearAllReminders,deleteReminder,updateReminder }
export default connect(mapStateToProps, mapDispatchToProps)(App)