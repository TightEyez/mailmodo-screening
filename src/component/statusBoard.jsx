const StatusBoard = (props) => {
    // console.log(props.statusList)
    Object.keys(props.statusList).map(element => { console.log(element)})
    return (     
        <div className="d-flex p-2 justify-content-center">

        
            {
                Object.keys(props.statusList).map((element) => {
                return (
                    <div className="card" style={{ width:'15rem'}}>
                <div className="card-body" onClick={() => props.clickHandle({element})}>
                    <h5 className="card-title">{element}</h5>
                    <p className="card-text"></p>
                  </div>
                  </div>)
                })
            }

        </div> );
}
 
export default StatusBoard;