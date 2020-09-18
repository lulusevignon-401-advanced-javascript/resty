import React from 'react';
// import axios from 'axios';
// import md5 from 'md5';

import { BrowserRouter, MemoryRouter, HashRouter } from 'react-router-dom';

import './app.scss';

import Header from './components/Header';

import Footer from './components/Footer';
// import History from './components/History';
import Main from './components/Main';

class App extends React.Component {
 
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     loading: false,
  //     // results:[],
  //     request: {},
  //     history: {},
  //   };
  // }

  // updateResults = (headers, results) =>{
  //   this.setState({headers, results});
  // };

  // updateRequest = (request) =>{
  //   this.setState({request});
  // };

  // toggleLoading = () =>{
  //   this.setState({loading: !this.state.loading});
  // };

  // updateHistory(request){
  //   let hash = md5(JSON.stringify(request));

  //   const history = { ...this.state.history, [hash]: request}

  //   this.setState({history}, ()=>{
  //     localStorage.setItem('history', JSON.stringify(this.state,history));
  //   });
  // }

  // componentDidMount() {
  //   let history = JSON.parse(localStorage.getItem('history'));
  //   this.setState({ history });
  // }

  // fetchResults = async(request)=>{
  //   try{

  //     this.toggleLoading();
  //     this.updateRequest(request);
  //     let response = await axios(request);
  //     console.log('this is the request', request);
  //     this.toggleLoading();

  //     this.updateHistory(request);
  //     this.updateResults(response.headers, response.data);
  //   }
  //   catch (error){
  //     console.log(error);
  //   }
  // }


  render(){
  return (
    <BrowserRouter>
    <div className="App">
    <Header />
    
    <main>
    <Main />
    </main>
    
    <Footer />
    </div>
    </BrowserRouter>
  );
  }
}


export default App;
