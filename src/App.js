import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( <div>
      <h2>Heading</h2>
    </div> );
  }

  componentDidMount() {
    // POST request using fetch with error handling
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': "Bearer tTU3gFVUdP" },
        body: JSON.stringify({ 	"email": "suyashshrivastava651@gmail.com"})
    };
    fetch('https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch', requestOptions)
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            this.setState({ data: data })
            // console.log(data)
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });

      }
}
 

export default App;
