import './style.css'

const StatusBoard = (props) => {
    console.log(props.selectedCard)
    // Object.keys(props.statusList).map(element => { console.log(element)})
    let innerWidth = window.innerWidth
    let style = {

    } 
    return (     
        <div className={"d-flex p-2 scroll " +(innerWidth<768?'':'justify-content-center')}>

           {
                Object.entries(props.statusList).map(([key,element]) => {
                return (
                    <div className={'card mx-2' + (props.selectedCard === key?'text-white bg-info':'')} style={{ minWidth:'100px'}}>
                <div className="card-body p-1 pointer" onClick={() => props.clickHandle(key)}>
                    <h4 className="card-title">{key}</h4>
                    <p className="text-right display-4 mb-1">{element}</p>
                  </div>
                  </div>)
                })
            }

        </div> );
}
 
export default StatusBoard;