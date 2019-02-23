import React, { Component } from 'react';

class ContentDetail extends Component {
    constructor(props) {
        super(props);

    }
    render() { 
        return ( 
            <div className="">
                <h2 className="contentHeading">{this.props.detail.title}</h2>
                <span className="postDate">02/12/2019</span>
                <span className="postAuthor">M. Propst</span>
                <p className="postBody">{this.props.detail.description}</p>
                {/* <button onClick={this.editDetail}>EDIT</button>  // Need to fix the edit functionality.  it broke when I made the form a component*/}

            </div>


         );
    }
}
 
export default ContentDetail;