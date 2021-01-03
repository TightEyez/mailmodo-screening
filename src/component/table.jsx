import React, { Component } from 'react';
// just use (useEffect). every change will be logged with current value
// import { useEffect } from "react";

 

class TableView extends Component {
    constructor() {
        super()
        this.state = {  }
    }

    componentDidMount() {
      this.updateWindowDimensions()
    }

    updateWindowDimensions = () => {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
      console.log(this.state)
    };


    render() { 



      const styles = {
        tableRow: {
          fontSize: this.state.width<786?'12px':'14px'
        }
      }
        // console.log(this.props.dummy)
        return ( 
            <div className="table-responsive">
            <table className="table">
             <thead className="thead-dark">
               <tr style={styles.tableRow}>
                 <th scope="col">#</th>
                 <th scope="col">Awbno</th>
                 <th scope="col">Carrier</th>
                 <th scope="col">Source</th>
                 <th scope="col">Destination</th>
                 <th scope="col">Start Date</th>
                 <th scope="col">ETD</th>
                 <th scope="col">Status</th>

               </tr>
             </thead>
             <tbody>
                 {this.props.dummy.map((list,index) => 
                 <tr style={styles.tableRow} >
                     <th scope="row">{index+1}</th>
                     <td className="pointer" onClick={() => this.props.handleShowTrack(list._id)}>{list.awbno}</td>
                     <td>{list.carrier}</td>
                     <td>
                       {list.from ? list.from: ""}  
                     </td>
                     <td>{list.to ? list.to: ""}</td>
                     <td>{list.pickup_date}</td>
                     <td>{list.extra_fields? list.extra_fields.expected_delivery_date: ""}</td>
                     <td className={list.current_status_code==='DEL' ? 'btn btn-success' : 'btn btn-warning'} >{list.current_status_code==='DEL'?'DELIVERD':"In-TRANSIT"}</td>
                 </tr>
                         )
                 }
               
             </tbody>
           </table>

       </div>
         );
    }
}
 
export default TableView;