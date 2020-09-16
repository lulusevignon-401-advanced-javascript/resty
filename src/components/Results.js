import React from 'react';
import './results.scss';
import JSONPretty from 'react-json-pretty';

const Results = (props) =>{

  return(
    <div>
      <section className="contentArea">
      <h3>Count: {props.count}</h3>
      <JSONPretty data={props.headers}></JSONPretty>
      <JSONPretty data={props.results}></JSONPretty>
    </section>
    </div>
  )
}

export default Results;