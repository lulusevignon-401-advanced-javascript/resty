import React from 'react';
import './results.scss';
import JSONPretty from 'react-json-pretty';
import loading from '../image/giphyLoad.gif';

const Results = (props) =>{

  return(
    
    <section className="contentArea">
      {
        props.loading ? (
        <div className="loading">
          <img src={loading} alt="Loading"/>
        </div>
        ) : (
          <>
          <h3>Headers</h3>
          <JSONPretty data={props.headers}></JSONPretty>
          <h3>Results</h3>
          <JSONPretty data={props.results}></JSONPretty>
          </>
        ) 
      }

    </section>
  )
}

export default Results;