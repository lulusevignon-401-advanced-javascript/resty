import React, {useState, useEffect} from 'react';
import './form.scss';

function Form (props) {

  const [request, setRequest] = useState({});

  useEffect(()=>{
    const method = props.request.method || 'get';
    const url = props.request.url || '';
    const data = props.request.data ? JSON.stringify(props.request.data) : '';
    setRequest({ method, url,data});
  }, [props, setRequest]);

  const handleSubmit = async event =>{
    event.preventDefault();
    props.handler(request);
  }

  const changeUrl = event => {
    let url = event.target.value;
    setRequest({ ...request, url});
  }

  const changeBody = event =>{
    try {
      let data = JSON.parse(event.target.value);
      setRequest({...request, data});
    }
    catch (error){}
  };

  const changeMethod = method =>{
    setRequest({ ...request, method});

  }

  
    return (
    <form className="FormRender" onSubmit={handleSubmit}>
    <div className="url">
      
      <h3>URL: <input type="text" placeholder="url" defaultValue={request.url} onChange={changeUrl} />
      <button className="goButton">GO!</button>
      </h3>
    </div>

    <div className="verbs">
      <span className={`method ${request.method === 'get'}`} onClick={() => changeMethod('get')}>GET</span>
      <span className={`method ${request.method === 'post'}`} onClick={() => changeMethod('post')}>POST</span>
      <span className={`method ${request.method === 'put'}`} onClick={() => changeMethod('put')}>PUT</span>
      <span className={`method ${request.method === 'delete'}`} onClick={() => changeMethod('delete')}>DELETE</span>

      <textarea className="textArea" name="data" onChange={changeBody} defaultValue={request.data}/>
    </div>
    <hr></hr>
    </form>
    
  );
  
}

export default Form;