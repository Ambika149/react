const Body1=(props)=>{
    const {title,image6,image7,image8,image9,image10}=props.rose
    return(
        <div className = "body">
            <h3>{title}</h3>
            <div className = "list">
            <img src = {image6}/>
            <img src={image7}/>
            <img src ={image8}/>
            <img src = {image9}/>
            <img src = {image10}/>
            </div>
            </div>
        )
    }
export default Body1;