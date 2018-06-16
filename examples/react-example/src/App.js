import React, { Component } from 'react';
import linksFinder from 'links-finder';

const handleMatch = (link) => `<a href="${link}">${link}</a>`;
const transformValue = (value) => linksFinder.wrapLinks(value, { onMatch: handleMatch })

const defaultValue = 'This is some example with http://blah.com link and github.com';

class App extends Component {
  state = {
    value: defaultValue,
  }

  handleChange = (e) => this.setState({ value: e.target.value });

  render() {
    return (
      <div className="App">
        <h3 className="title">
          Type some text with links
        </h3>
        <div className="container">
          <div>
            <textarea
              className="textarea"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <h3 className="title">
            See the result(links will be highlighted automatically)
          </h3>
          <div
            className="result"
            dangerouslySetInnerHTML={{__html: transformValue(this.state.value)}}
          />
          <h3 className="title links">
            Links positions
          </h3>
          <div className="links-data">
            {
              JSON.stringify(
              linksFinder.findLinks(this.state.value),
              null,
              4
            )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
