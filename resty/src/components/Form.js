import React from 'react';
import './form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
    }
  }


  handleSubmit = async event =>{
    event.preventDefault();
    let raw = await fetch(this.state.url);

    let headers = {};
    raw.headers.forEach((val, key)=> headers[key]= val);
    console.log(headers);

    let data = await raw.json();

    let count = data.count;
    let results = data.results;

    this.props.handler(count, results, headers);
  }

  handleUrl = event => {
    let url = event.target.value;
    this.setState({url});
  }

  handleClick = event => {
    event.preventDefault();
    let url = this.state.url
    this.setState({ url });

  }

  handleVerb = event =>{
    event.preventDefault();
    let method = event.target.value;
    this.setState({method});

  }

  render() {
    return (
    <form className="FormRender" onSubmit={this.handleSubmit}>
    <div className="url">
      
      <h3>URL: <input type="text" placeholder="url" onChange={this.handleUrl} />
    <button className="goButton">{this.props.prompt}</button>
      {/* <input  onClick={this.handleClick} /> */}

      </h3>
    </div>
    <div className="verbs">
      <button value="GET " onClick={this.handleVerb}>GET</button>
      <button value="POST " onClick={this.handleVerb}>POST</button>
      <button value="PUT " onClick={this.handleVerb}>PUT</button>
      <button value="DELETE " onClick={this.handleVerb}>DELETE</button>
    </div>
    {/* <section className="contentArea">
    <p>{this.state.method}{this.state.url}</p>
    </section> */}
    </form>
  );
  }
}

export default Form;