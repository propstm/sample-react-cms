import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.submitForm = this.submitForm.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.addEntry = this.addEntry.bind(this);
    this.state = {content:[]}

  }

  clearForm(){
    this.contentDescription.value = "";
    this.contentTitle.value = "";
  }

  addEntry(entry){
		//update state
		const entries = this.state.content;
		//add in new entry
    entries.push(entry);
    
    //set state
		this.setState({entries});
     console.log("STATE:" + this.state.content);
	}

  submitForm(event) {  
    let entry = {
      "title" : this.contentTitle.value,
      "description" : this.contentDescription.value,
      "key":Date.now()
    }
   
    
    this.addEntry(entry);
    this.clearForm();
    event.preventDefault();
  }


  render() {

    const entries = [];
    this.state.content.forEach(function (entry) {
      entries.push(
        <li key={entry.key}>
          <span className="navItemStyling">{entry.title}</span>
        </li>
      );
    });

    return (
      <div className="App">
        <header className="App-header">Sample CMS</header>
        <div className="main">
          <div className="topForm">
            <form action="" onSubmit={this.submitForm} className="contentForm">
              <label>Content Title:<input type="text" ref={(input) => this.contentTitle = input} name="name" /></label>
             <br/>
              <label>Content Description:<input type="text" ref={(input) => this.contentDescription = input} name="description" /></label>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div className="g left">
            <ul className="navigationItems">
              { entries }  
            </ul>
          </div>
          <div className="g right">
            <h2 className="contentHeading">Heading</h2>
            <span className="postDate">02/12/2019</span>
            <span className="postAuthor">M. Propst</span>
            <p className="postBody">The cow jumped over the moon. The cow jumped over the moon. The cow jumped over the moon. The cow jumped over the moon.</p>
          </div>  
        </div>
      </div>
    );
  }
}

export default App;
