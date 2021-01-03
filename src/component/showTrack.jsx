import warehouse from './../asset/FrontendAssets/warehouse.svg';
import destination from  './../asset/FrontendAssets/destination.svg';
import './style.css';

const styles = {

      fontSize: window.innerWidth<786?'12px':'14px'

  }

const ShowTrack = (props) => {
    console.log(props)
    const sortedList = props.track.scan.sort((a, b) => a.time - b.time);
    return ( <div>
        {
            sortedList.map((ele) => {
                return(
                    <div className="d-flex justify-content-center">
            
                    <div className="d-flex flex-column text-center w-25">
                    { ele.status_detail==="DELIVERED"? <img src={destination} className="mx-auto" alt="warehouse" width="26px" height="26px" />:"" }

                        <div style={styles}>|</div>
                        <div style={styles}>|</div>
                        <div style={styles}>|</div>
                        { ele.status_detail==="BOOKED"?<img src={warehouse} className="mx-auto" alt="warehouse" width="26px" height="26px" />:""}
        
                    </div>
                    <ul className="list-group w-100" style={{"justify-content": "center", ...styles}}>
                        <li  className="list-group-item p-1 align-middle">
                            {ele.location}
                            <div className="small text-center">{ele.time}</div>
                            </li>
                         {/* <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>  */}
                    </ul>
                    </div>
                )
            })
        }


            
      
        
        
        </div> );
}
 
export default ShowTrack;