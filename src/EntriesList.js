import React, { PureComponent } from 'react';

const EntriesList = (props) => {
   const entries = [];
    props.content.forEach(function (entry) {
      entries.push(
        <li key={entry.key} onClick={() => props.showContentDetail(entry.key)}>
          <span className="navItemStyling">{entry.title}</span>
        </li>
      );
    }.bind(this));
    
    return ( 
        <ul className="navigationItems">
            { entries }  
        </ul>

     );
}
 
export default EntriesList;