import React, { Component } from 'react';
import './App.css';
import EntryForm from './EntryForm';

class App extends Component {
  constructor(){
    super();
    //this.submitForm = this.submitForm.bind(this);
    this.showContentDetail = this.showContentDetail.bind(this);
    //this.clearForm = this.clearForm.bind(this);
    this.addEntry = this.addEntry.bind(this);
    this.editDetail = this.editDetail.bind(this);
    this.state = {content:[], detail:{title:"", description:"", key:""}}

  }


  addEntry(entry, checkboxChecked){
    const entries = this.state.content;
    const detailEntry = this.state.detail;

    //Use editCheckbox checked value to determine if we are editing or adding a new entry
    if(checkboxChecked){
      const detailKey = this.state.detail.key
      entries.forEach(function (e){
        if(e.key === detailKey){
          //Checkbox is checked and we match by key, so update the following entry and detail node values
          console.log("update values");
          e.title = entry.title;
          e.description = entry.description;
          detailEntry.title = entry.title;
          detailEntry.description = entry.description;
        }
      });
      this.setState({entries});
      
    }else{
      //Add new entry to entries array
      entries.push(entry);
		  this.setState({entries});
    }

	}

  editDetail(){
    this.contentTitle.value = this.state.detail.title;
    this.contentDescription.value = this.state.detail.description;
    this.editCheckbox.checked = true;

  }

  showContentDetail(key) {

    let entry = {}
    this.state.content.forEach(function (e){
      if(e.key === key){
        entry = e;  
      }
    });
    console.log(`SELECTED ITEM: ${entry.title}`);

    const detail = this.state.detail;
    detail.title = entry.title;
    detail.description = entry.description;
    detail.key = entry.key;

		this.setState({detail});
     console.log("STATE:" + this.state.content);

  }
 


  render() {

    const entries = [];
    this.state.content.forEach(function (entry) {
      entries.push(
        <li key={entry.key} onClick={() => this.showContentDetail(entry.key)}>
          <span className="navItemStyling">{entry.title}</span>
        </li>
      );
    }.bind(this));

    return (
      <div className="App">
        <header className="App-header">Sample CMS</header>
        <div className="main">
          <div className="topForm">
            < EntryForm addEntry={this.addEntry} />
          </div>
          <div className="g left">
            <ul className="navigationItems">
              { entries }  
            </ul>
          </div>
          <div className="g right">
            <h2 className="contentHeading">{this.state.detail.title}</h2>
            <span className="postDate">02/12/2019</span>
            <span className="postAuthor">M. Propst</span>
            <p className="postBody">{this.state.detail.description}</p>
            {/* <button onClick={this.editDetail}>EDIT</button>  // Need to fix the edit functionality.  it broke when I made the form a component*/}
          </div>  
        </div>
      </div>
    );
  }
}

export default App;
