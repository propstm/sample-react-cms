import React, { Component } from 'react';


class EntryForm extends Component {
    constructor(props) {
        super(props);
        
        this.submitForm = this.submitForm.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

    submitForm(event) {  
        event.preventDefault();
        let entry = {
          "title" : this.contentTitle.value,
          "description" : this.contentDescription.value,
          "key":Date.now()
        }
    
        this.props.addEntry(entry, this.editCheckbox.checked);
        this.clearForm();
    }


    clearForm(){
        this.contentDescription.value = "";
        this.contentTitle.value = "";
        this.editCheckbox.checked = false;
    }


    render() { 
        return ( 
            <form action="" onSubmit={this.submitForm} className="contentForm">
              <label>Inner Content Title:<input type="text" ref={(input) => this.contentTitle = input} name="name" /></label>
             <br/>
              <label>Inner Content Description:<input type="text" ref={(input) => this.contentDescription = input} name="description" /></label>
              <input type="checkbox" ref={(input) => this.editCheckbox = input}></input>
              <input type="submit" value="Submit" />
            </form>

         );
    }
}
 
export default EntryForm;