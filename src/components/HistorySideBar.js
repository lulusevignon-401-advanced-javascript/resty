import React from 'react';
import './history.scss';
import '../app.scss';

import { withRouter } from 'react-router-dom';


function History(props){
  const calls = props.calls || {};

  function loadRequest(apiCall){
    props.handler(apiCall);
    props.history.push('/');
  }
 

  return(
    <div className="history">
      <ul>
        {
          Object.keys(props.calls).map(key =>
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

export default withRouter(History);