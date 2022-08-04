import React ,{ createContext, useContext,useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import ImageComponent from '../Image/ImageComponent'
import './Polling.css'
import { useDishes } from "../../context/DishesContext";

 function Polling() { 
    const[dishes,setDishes] = useState([]); 
    const navigate=useNavigate();
    const { username } = useDishes();
    const userSelections= new Map([]);
    const fetchDishes = () => {
        return fetch(
          "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
        ).then((res) => res.json());
      };

      const openResults= () => {
        navigate('/results');
      }
      
    useEffect(() => {
        fetchDishes().then((data)=>{
          //console.log(data);
          setDishes(data);
        })
    });

    const handleOnChange =(e) =>{
      console.log(e.target);
      console.log("user: "+username);
    }
    


    return (
      <div className="parent-box">
        <h2>Rate Your Favourite Dishes</h2>
        <div className="container">
           {dishes.map((dish, index) => {
              return <div className="dish-row" key={index}>
                <ImageComponent url={dish.image}/>
                <div className="dish-details">
                  <span className='dish-title'>{dish.dishName}</span>
                  <p className="dish-desc">{dish.description}</p>
                </div>
                <div className='ratings'>
                  <form>
                  <input type="radio" name="rating" id="rating1" value={dish.dishName}  onChange={handleOnChange}></input>
                  
                  <label for="rating1">Rating 1</label>
                  <input type="radio" name="rating" id="rating2" value={dish.dishName} onChange={handleOnChange} ></input>
                  <label for="rating2">Rating 2</label>
                  <input type="radio" name="rating" id="rating3" value={dish.dishName} onChange={handleOnChange}></input>
                  <label for="rating3">Rating 3</label>
                  </form>
                </div>
              </div>
            })}
        </div>

        
         



        
        <button className='submit-btn' onClick={openResults}>
        Submit</button>
        </div>
    );     
    }
 
 export default Polling;
 