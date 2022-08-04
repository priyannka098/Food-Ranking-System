import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { useDishes } from "../../context/DishesContext";
import './Results.css';

function ResultsComponent() { 
    const[dishes,setDishes] = useState([]); 
    const navigate=useNavigate();
    const { setUsername } = useDishes();
    // const fetchDishes = () => {
    //     return fetch(
    //       "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
    //     ).then((res) => res.json());
    //   };

      const logOut= () => {
        setUsername("");
        navigate('/');
      }

      const openPolling=() =>{
        navigate('/polling');
      }
      
    useEffect(() => {
        const dishPointsData = localStorage.getItem('dishPoints');
        let dishPoints=new Map(JSON.parse(dishPointsData));
        console.log(dishPoints);
        const sortedDishes=[...dishPoints.entries()].sort((a,b)=>b[1]-a[1]);
        setDishes(sortedDishes);
    });
    
    
    
    return (
      <div className="parent-box">
        <h2>Results</h2>
        <div className="results-container">
           {dishes.map((dish, index) => {
              return <div className={'dish-row row-height '+(index===0?'rank1-row':(index===1?'rank2-row':(index===2?'rank3-row':'')))} key={index}>
                <div className="result-details">
                  <span className='dish-title'>{dish[0]}</span>
                  <p className="dish-desc">{dish[1]}</p>
                </div>
              </div>
            })}
        </div>
        <button className='submit-btn' onClick={openPolling}>
        Back</button>
        <button className='submit-btn' onClick={logOut}>
        Log Out</button>
        </div>
    );     
    }

export default ResultsComponent;