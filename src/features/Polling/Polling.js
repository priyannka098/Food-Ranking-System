import React from 'react';
import './Polling.css'
import { useNavigate } from "react-router-dom";

  function Polling() {
        return(
        <div className="container">
            <div className="outer-box">
                <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Flasagna-on-a-square-white-plate-picture-id535851351%3Fk%3D20%26m%3D535851351%26s%3D612x612%26w%3D0%26h%3DjdWOk9G_OOzHvPrvFrigqzk3EoucmIhUZr1-ey9NcGM%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Flasagna&tbnid=-gIL-V7YuPIW0M&vet=12ahUKEwiI9uXx46r5AhVuyKACHeKcBBoQMygAegUIARCHAg..i&docid=kfUXYmTDt4ZU0M&w=612&h=410&q=lasagna%20images&ved=2ahUKEwiI9uXx46r5AhVuyKACHeKcBBoQMygAegUIARCHAg" className="images" alt=""/>
                <div>
                    <h3 className="dishes"></h3>
                    <p className="description">Breaded fried chicken with waffles</p>
                </div>
            </div>

            
            </div>
        )
    }
 
 export default Polling;