import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component{
  constructor (){
    super()
  },
  render() {
    return (
      <div>
         <h1> This is a basic React app </h1>
         <h3> App </h3>
      </div>
    );
  }
}

const app =  document.getElementById('app');
ReactDOM.render(<Layout/>, app);
