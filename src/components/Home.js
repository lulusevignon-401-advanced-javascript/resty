import React from 'react';
import axios from 'axios';
import md5 from 'md5';

import Form from './Form';
import Results from './Results';
import History from './History';


class HomePage extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      // results:[],
      request: {},
      history: {},
    };
  }

  updateResults = (headers, results) =>{
    this.setState({headers, results});
  };

  updateRequest = (request) =>{
    this.setState({request});
  };

  toggleLoading = () =>{
    this.setState({loading: !this.state.loading});
  };

  updateHistory(request){
    let hash = md5(JSON.stringify(request));

    const history = { ...this.state.history, [hash]: request}

    this.setState({history}, ()=>{
      localStorage.setItem('history', JSON.stringify(this.state,history));
    });
  }

  componentDidMount() {
    let history = JSON.parse(localStorage.getItem('history'));
    this.setState({ history });
  }

  fetchResults = async(request)=>{
    try{

      this.toggleLoading();
      this.updateRequest(request);
      let response = await axios(request);
      console.log('this is the request', request);
      this.toggleLoading();

      this.updateHistory(request);
      this.updateResults(response.headers, response.data);
    }
    catch (error){
      console.log(error);
    }
  }


  render(){
  return (
    
    <>
   
    <Form request={this.state.request} handler={this.fetchResults}/>
    <main>
    <History handler={this.updateRequest} calls={this.state.history}/>

    {
      this.state.results &&
      <Results loading={this.state.loading} headers={this.state.headers} results={this.state.results}/>

    }
   
    </main>
  
    </>
    
  );
  }
}

export default HomePage;