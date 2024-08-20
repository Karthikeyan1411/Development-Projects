import './App.css';

import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
  // Initialize our state
  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
  };

  // When component mounts, first things it does is fetch all existing data
  // then we incorporate a polling logic so thay we can easily see if one
  // changed and implement those changes into our UI
  componentDidUnmount(){
    this.getDataFromDb();
    if(this.state.intervalIsSet){
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({intervalIsSet: interval});
    }
  }

  componentWillUnmount(){
    if(this.state.intervalIsSet){
      clearInterval(this.state.intervalIsSet);
      this.setState({intervalIsSet: null});
    }
  }

  getDataFromDb = () =>{
    fetch('https://localhost:3001/api/getData')
      .then((data) => data.json())
      .then((res) => this.setState({data: res.data}));
  };

  putDataToDB = (message) => {
    let currentIds = this.state.data.map((data) => data.id);
    let idToBeAdded = 0;
    while(currentIds.includes(idToBeAdded)){
      ++idToBeAdded;
    }

    axios.post('http://localhost:3001/api/putData', {
      id: idToBeAdded,
      message: message,
    });
  }

  deleteFromDB = (deleteMessage) => {
    let objIdToDelete = null;
    console.log(deleteMessage)
    this.state.data.forEach((dat) => {
      if(dat.message === deleteMessage){
        objIdToDelete = dat._id;
      }
    });

    axios.delete('http://localhost:3001/api/deleteData',{
      data: {
        id: objIdToDelete,
      },
    });
  };

  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    parseInt(idToUpdate);
    this.state.data.forEach((dat) => {
      if(dat.id === idToUpdate){
        objIdToUpdate = dat._id;
      }
    });

    axios.post('http://localhost:3001/api/updateData', {
      id: objIdToUpdate,
      update: {message: updateToApply},
    });
  };

  render () {
    const {data} = this.state;
    return (
      <div>
        <ul>
          {data.length <= 0
            ? 'NO DB ENTRIES YET'
            : data.map((dat) => (
              <li style={{padding: '10px'}} key={data.message}>
                <span style={{color: 'gray'}}>id: </span> {dat.id}
                <span style={{color: 'gray'}}>data: </span> {dat.message}
              </li>
            ))}
        </ul>
        <div style={{padding: '10px'}}>
          <input 
            type='text'
            onChange={(e) => this.setState({message : e.target.value})}
            placeholder='add something in the database'
            style={{width: '200px'}}></input>
          <button onClick={() => this.putDataToDB(this.state.message)}>ADD</button>
        </div>
        <div style={{padding: '10px'}}>
          <input 
            type='text'
            onChange={(e) => this.setState({idToUpdate : e.target.value})}
            placeholder='id of item to update here'
            style={{width: '200px'}}></input>
          <input 
            type='text'
            onChange={(e) => this.setState({updateToApply : e.target.value})}
            placeholder='put new value of the item here'
            style={{width: '200px'}}></input>
          <button onClick={() => this.updateDB(this.state.idToUpdate, this.state.updateToApply)}>Update</button>
        </div>
      </div>
    );
  }

}

export default App;
