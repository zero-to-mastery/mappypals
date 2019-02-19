import React from 'react';
import Main from './Main';

// The Layout componet is where we define how the pages ({children}) are laid out. 
// You may style this componet for general page layout
// To create a specific layout for a specific page, create its own css file. 

export default ({ children }) => (
  <div
    style={{
      paddingTop: '10px'
    }}
  >
    {children}
  </div>
)