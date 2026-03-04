const Body=(props)=>{
    const {title,a,b,c,d,e}=props.men
    return(
        <div className = "body">
            <h3>{title}</h3>
            <div className = "list">
            <img src = {a}/>
            <img src={b}/>
            <img src ={c}/>
            <img src = {d}/>
            <img src = {e}/>
            </div>
            </div>
        )
    }
export default Body;