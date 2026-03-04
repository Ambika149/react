import {Link} from 'react-router-dom';
const Header=()=>{
    return(
        <div className="head">

            <div className="left">
                <img src="https://tinyurl.com/2r8am4pz" height="100px" width="100px"/>
                </div>

            <div className="center">
                <ul>

                    <li><Link to = "/flowers">Flowers For you! </Link></li>
                    <li><Link to = "/rose">Rose!x</Link></li>
                    <li><Link to = "/lotus">Lotus !x</Link></li>

                    </ul>
                </div>

            <div>
                <input className="search" placeholder="What are you looking for CAMP !"/>
                <button className="btn">Search</button>
                </div>

            <div className="right">
                <div className="Sign/up"/>
                <button className="btn1" placeholder="Gems !">Add !</button>
                </div>

        </div>

        )
    }
export default Header;