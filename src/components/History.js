import React from 'react';
import JSONPretty from 'react-json-pretty';
import { When } from './If';
class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: {},
      data: null
    };
  }

  showRequest(key) {
    let data = this.state.history[key].data;
    this.setState({ data })
  }

  componentDidMount() {
    let history = JSON.parse(localStorage.getItem('history'));
    history && this.setState({ history });
    console.log(history);
  }

  render() {
    return (
      <main>
        <section className="historyPage">
          <aside>
            {
              Object.keys(this.state.history).map(key =>
                <div key={key}
                  className="url"
                  onClick={() => this.showRequest(key)}>
                  {this.state.history[key].method} - {this.state.history[key].url}
                </div>,
              )
            }
          </aside>
          <article>
             <When condition={!!this.state.data}>
              {/* <ReactJson src={this.state.data} /> */}
              <JSONPretty data={this.state.data}></JSONPretty>
            </When>
          </article> 
        </section>
      </main >
    );
  }
}

export default History;