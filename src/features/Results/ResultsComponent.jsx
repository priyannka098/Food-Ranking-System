import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { useDishes } from "../../context/DishesContext";
import './Results.css';

function ResultsComponent() { 
    const[dishes,setDishes] = useState([]); 
    const[userSelections,setUserSelections] = useState(new Set()); 
    const navigate=useNavigate();
    const { username, setUsername } = useDishes();
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
      if(username===""){
        navigate('/');
      }
        const dishPointsData = localStorage.getItem('dishPoints');
        let dishPoints=new Map(JSON.parse(dishPointsData));
       // console.log(dishPoints);
        const sortedDishes=[...dishPoints.entries()].sort((a,b)=>b[1]-a[1]);
        setDishes(sortedDishes);

        if(localStorage.getItem('userSelections')){
         // console.log(localStorage.getItem('userSelections'));
          let previousSelections=new Map(JSON.parse(localStorage.getItem('userSelections')));
          if(previousSelections.has(username)){
            let map = new Map(JSON.parse(previousSelections.get(username)));
            //console.log(map);
            setUserSelections(new Set(map.values()));
            console.log(userSelections);
          }
        }
    });
    
    
    
    return (
      <div className="parent-box">
        <h1 className="title">Results</h1>
        <div className="results-container">
           {dishes.map((dish, index) => {
              return <div className={'result-row row-height '+ (userSelections.has(dish[0])? 'row-highlight':'')} key={index}>
                <div className="dish-rank">
                  <h2>{index+1}</h2>
                  </div>
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