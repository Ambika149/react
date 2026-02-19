const Body2=(props)=>{
    const {title,image11,image12,image13,image14,image15}=props.lotus
    return(
        <div className = "body">
            <h3>{title}</h3>
            <div className = "list">
            <img src = {image11}/>
            <img src = {image12}/>
            <img src = {image13}/>
            <img src = {image14}/>
            <img src = {image15}/>
            </div>
            </div>
        )
    }
export default Body2;