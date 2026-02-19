const Body=(props)=>{
    const {title,image1,image2,image3,image4,image5}=props.men
    return(
        <div className = "body">
            <h3>{title}</h3>
            <div className = "list">
            <img src = {image1}/>
            <img src={image2}/>
            <img src ={image3}/>
            <img src = {image4}/>
            <img src = {image5}/>
            </div>
            </div>
        )
    }
export default Body;