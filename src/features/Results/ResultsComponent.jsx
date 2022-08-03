import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import ImageComponent from '../Image/ImageComponent'

function ResultsComponent() { 
    const[dishes,setDishes] = useState([]); 
    const navigate=useNavigate();
    const fetchDishes = () => {
        return fetch(
          "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
        ).then((res) => res.json());
      };

      const openPolling= () => {
        navigate('/polling');
      }
      
    useEffect(() => {
        fetchDishes().then((data)=>{
          console.log(data);
          setDishes(data);
        })
    });
    
    
    
    return (
      <div className="parent-box">
        <h2>Results</h2>
        <div className="container">
           {dishes.map((dish, index) => {
              return <div className="dish-row" key={index}>
                <ImageComponent url={dish.image}/>
                <div className="dish-details">
                  <span className='dish-title'>{dish.dishName}</span>
                  <p className="dish-desc">{dish.description}</p>
                </div>
              </div>
            })}
        </div>
        <button className='submit-btn' onClick={openPolling}>
        Go Back</button>
        </div>
    );     
    }

export default ResultsComponent;