import React from 'react';

import './app.scss';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import Results from './components/Results';

class App extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      results: [],
      headers: {},
    };
  }

  handleForm = (count, results, headers) => {
    this.setState({ count, results, headers });
  };

  render(){
  return (
    <div className="App">
    <Header />
    <Form  prompt="Go!" handler={this.handleForm}/>
    <Results count={this.state.count} results={this.state.results} headers={this.state.headers}/>
    <Footer />
    </div>
  );
  }
}


export default App;
