import React, { Component } from 'react';

 

class TableView extends Component {
    constructor() {
        super()
    }

    state = {  }
    render() { 
        console.log(this.props.dummy)
        return ( 
            <React.Fragment>
            <table className="table">
             <thead className="thead-dark">
               <tr>
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
                 <tr>
                     <th scope="row">{index+1}</th>
                     <td>{list.awbno}</td>
                     <td>{list.carrier}</td>
                     <td>{list.from}</td>
                     <td>{list.to}</td>
                     <td>{list.pickup_date}</td>
                     <td>{list.extra_fields.expected_delivery_date}</td>
                 </tr>
                         )
                 }
               
             </tbody>
           </table>

       </React.Fragment>
         );
    }
}
 
export default TableView;