import React ,{ createContext, useContext,useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import ImageComponent from '../Image/ImageComponent'
import './Polling.css'
import { useDishes } from "../../context/DishesContext";

 function PollingComponent() { 
    const[dishes,setDishes] = useState([]); 
    //const[userSelections,setUserSelections] = useState(new Map([])); 
    const[rankings,setRankings] = useState(new Map([])); 
    const navigate=useNavigate();
    const { username } = useDishes();
   

    const fetchDishes = () => {
        return fetch(
          "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json"
        ).then((res) => res.json());
      };

      const openResults= () => {
        if(rankings.size<3){
          alert("Please rank 3 dishes");
          return;
        }
    
        console.log("rankings: "+ JSON.stringify(rankings));
        const userSelections = new Map();
        userSelections.set(username,JSON.stringify([...rankings]));

        localStorage.setItem('userSelections', JSON.stringify([...userSelections]));

        let dishPointsData = localStorage.getItem('dishPoints');
        console.log("old dishPoints :"+JSON.stringify(dishPointsData));
        let dishPoints=new Map([]);
        if(dishPointsData) {
          console.log("found old dishpoints");
        dishPoints=new Map(JSON.parse(dishPointsData));
         const rank1Points=dishPoints.get(rankings.get("rank1")) || 0;
         console.log("rank1Points: "+rank1Points);
          dishPoints.set(rankings.get("rank1"), rank1Points+30);

          const rank2Points=dishPoints.get(rankings.get("rank2")) || 0;
          dishPoints.set(rankings.get("rank2"), rank2Points+20);

         const rank3Points=dishPoints.get(rankings.get("rank3")) || 0;
          dishPoints.set(rankings.get("rank3"), rank3Points+10);
        } else{
          dishPoints.set(rankings.get("rank1"),30);
          dishPoints.set(rankings.get("rank2"),20);
          dishPoints.set(rankings.get("rank3"),10);
        }
        console.log(" final dishPoints :"+JSON.stringify(dishPoints));
        localStorage.setItem('dishPoints', JSON.stringify([...dishPoints]));
        navigate('/results');
      }
      
    useEffect(() => {
        if(username===""){
          navigate('/');
        }
        fetchDishes().then((data)=>{
          //console.log(data);
          setDishes(data);
        })
        if(localStorage.getItem('userSelections')){
          console.log(localStorage.getItem('userSelections'));
          let previousSelections=new Map(JSON.parse(localStorage.getItem('userSelections')));
          if(previousSelections.has(username)){
            setRankings(new Map(JSON.parse(previousSelections.get(username))));
          }
        }
    },[username]);

    const handleOnChange =(e) =>{
      console.log(e.target.value);
      if(e.target.value==="rating1"){
        let tempMap=new Map(rankings);
        // if(tempMap.has("rank1") && tempMap.get("rank1")!==e.target.id){
        //   console.log("inside rank1");
        //   let existingdish=tempMap.get("rank1");
        //   document.getElementById(existingdish).checked=false;
        // }
        tempMap.set("rank1",e.target.id);
        setRankings(tempMap);
      }
      else if(e.target.value==="rating2"){
        let tempMap=new Map(rankings);
        // if(tempMap.has("rank2") && tempMap.get("rank2")!==e.target.id){
          
        //   let existingdish=tempMap.get("rank2");
        //   console.log("existingdish for rank2"+existingdish);
        //   document.getElementById(existingdish).checked=false;
        // }
        tempMap.set("rank2",e.target.id);
        setRankings(tempMap);
      }
      else if(e.target.value==="rating3"){
        let tempMap=new Map(rankings);
        // if(tempMap.has("rank3") && tempMap.get("rank3")!==e.target.id){
        //   console.log("inside rank3");
        //   let existingdish=tempMap.get("rank3");
        //   document.getElementById(existingdish).checked=false;
        // }
        tempMap.set("rank3",e.target.id);
        setRankings(tempMap);
      }
      console.log("rankings: "+JSON.stringify(rankings));
    }
    

    return (
      <div className="parent-box">
        <h1>Rate Your Favourite Dishes</h1>
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
                    <input type="radio" checked={rankings.get("rank1")===dish.dishName} name="rating" value="rating1" id={dish.dishName}  onChange={handleOnChange}></input>
                    
                    <label for="rating1">Rating 1</label>
                    <input type="radio" checked={rankings.get("rank2")===dish.dishName} name="rating" value="rating2" id={dish.dishName} onChange={handleOnChange} ></input>
                    <label for="rating2">Rating 2</label>
                    <input type="radio" checked={rankings.get("rank3")===dish.dishName} name="rating" value="rating3" id={dish.dishName} onChange={handleOnChange}></input>
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
 
 export default PollingComponent;
 