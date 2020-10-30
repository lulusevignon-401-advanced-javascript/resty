import React from 'react';
import './results.scss';
import JSONPretty from 'react-json-pretty';
import loading from '../image/giphyLoad.gif';

import { If, Then, Else, When } from './If';

const Results = (props) =>{

  return(
    
    <section className="contentArea">
      {/* {
        props.loading ? (
        <div className="loading">
          <img src={loading} alt="Loading"/>
        </div>
        ) :(
          <>
              <h3>Headers</h3>
              <JSONPretty data={props.headers}></JSONPretty>
    
              <h3>Results</h3>
              <JSONPretty data={props.results}></JSONPretty>
              </>
            )
      } */}

<If condition={props.loading}>
        <Then>
          <div className="loading">
            <img src={loading} alt="Loading" />
          </div>
        </Then>
        <Else>
          <When condition={props.results}>
            <h3>Headers</h3>
            <JSONPretty data={props.headers}></JSONPretty>
            <h3>Results</h3>
            <JSONPretty data={props.results}></JSONPretty>
          </When>
        </Else>
      </If>

    </section>
  )

}

// function resultsData(props){
//     if(props.resultsData){
//       return (
//       <>
//           <h3>Headers</h3>
//           <JSONPretty data={props.headers}></JSONPretty>

//           <h3>Results</h3>
//           <JSONPretty data={props.results}></JSONPretty>
//           </>
//         );
//       }  
// }


export default Results;