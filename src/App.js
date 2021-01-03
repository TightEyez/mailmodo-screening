import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import  Header from './component/header';
import TableView from './component/table'; 
import StatusBoard from './component/statusBoard';
import ShowTrack from './component/showTrack';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      dataArray : [],
      dumyArray: [],
      status: {
        DEL: 0,
        INT: 0,
        OOD: 0,
        DEX: 0,
        NFI: 0
      },
      selected: "DEL",
      isShowTrack: false,
      currentOrder: null
     }
  }

  handleEvent = (data) => {
    console.log(data)
    let selectedList  = this.state.dataArray.filter((st) => st.current_status_code === data)
    this.setState({dumyArray: selectedList})
    this.setState({selected: data})
    console.log(this.state)
  }

  showTrack = (_id) => {
    let select = this.state.dumyArray.filter((st) => st._id === _id)

    this.setState({currentOrder: select[0]})
    this.setState({isShowTrack: true})
    // console.log(this.state)
  }

  hideTrack = () => {  this.setState({isShowTrack: false})}

  style = {
    hide: {
      color: 'blue'
    }
  }


  render() { 
    
    return (
    <div>
      <Header />
      <div className="row">
        <div className="col-12">
            <StatusBoard selectedCard={this.state.selected} clickHandle={this.handleEvent} statusList={this.state.status}/> 



        </div>

        <div className="col-12 col-sm-4">
          <div className="card p-2">
            { this.state.isShowTrack&&this.state.currentOrder.scan? 
              <span>
              <p className="pointer" style={this.style.hide} onClick={this.hideTrack}>Hide</p>
              <ShowTrack track={this.state.currentOrder} />
              </span> 
              : "Click to show"
            }
          </div>
        </div>
        <div className="col-12 col-sm-8">
          <div>
              <TableView handleShowTrack={this.showTrack} key='1' dummy={this.state.dumyArray}/>
          </div>
        </div>
      </div>
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

            data.map((st) => {
              if(st.current_status_code === "DEL") {
                const newState = {...this.state.status, DEL: this.state.status.DEL + 1}
                this.setState({status: newState})
                // console.log(st)

              } else if(st.current_status_code === "INT") {
                // this.setState({DEL: this.state.status.DEL+1})
                const newState = {...this.state.status, INT: this.state.status.INT + 1}
                this.setState({status: newState})

              } else if(st.current_status_code === "OOD") {
                // this.setState({DEL: this.state.status.DEL+1})
                const newState = {...this.state.status, OOD: this.state.status.OOD + 1}
                this.setState({status: newState})

              } else if(st.current_status_code === "DEX") {
                const newState = {...this.state.status, DEX: this.state.status.DEX + 1}
                this.setState({status: newState})

              } else if(st.current_status_code === "NFI") {
                const newState = {...this.state.status, NFI: this.state.status.NFI + 1}
                this.setState({status: newState})

              } 
            })

            let selectedList  = data.filter((st) => st.current_status_code === this.state.selected)
            this.setState({dumyArray: selectedList})
            this.setState({ dataArray: data })
            // console.log(data)
        console.log(this.state.status)

        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });

      }
}
 

export default App;
