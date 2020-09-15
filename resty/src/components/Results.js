import React from 'react';
import './results.scss';
import JSONPretty from 'react-json-pretty';

const Results = (props) =>{

  return(
    <div>
      <section className="contentArea">
    
      <h3>Count: {props.count}</h3>
      <p>{JSON.stringify(props.headers)}</p>
      <JSONPretty data={props.results}></JSONPretty>
      {/* <JSONPretty data={this.state}></JSONPretty> */}
    </section>
    </div>
  )
}

export default Results;