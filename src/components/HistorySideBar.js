import React from 'react';
import './history.scss';
import '../app.scss';


function History(props){
  const calls = props.calls || {};

  function loadRequest(apiCall){
    props.handler(apiCall);
  }
 

  return(
    <div className="history">
      <ul>
        {
          Object.keys(calls).map(key =>
          <li key={key}>
            <span className={`method ${props.calls[key].method}`}>{props.calls[key].method}</span>
            <button onClick={()=>
              loadRequest(props.calls[key])}>{props.calls[key].url}</button>

          </li>,
            
          )
        }
      </ul>
    </div>
  );
}

export default History;