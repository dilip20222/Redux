import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import birdApp, {addBird,  increamentbird } from '../store/birds/birds'

export const Home = () => {
    const [birdname , setBirdname ] = useState("");
    // const data = useSelector(state => state.birds);
    const dispatch = useDispatch();

    const data = [...useSelector(state => state.birds)].sort((a, b) => {
        return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
      });

    const hanldesubmit = (e)=>{
        e.preventDefault();
        dispatch(addBird(birdname))
        setBirdname("");
    }
     
    return (
       <div >
           <form onSubmit={hanldesubmit}>
        <label>
          <p>
            Add Bird
          </p>
          <input type="text" onChange={e => setBirdname(e.target.value)} value={birdname}/>
        </label>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>

          

        <h1></h1>
           {data && data.map((dem,i)=>{
            return <div  key={i}><h1>{dem.name} {dem.Views}</h1>
         <button><span role="img" aria-label="add" onClick={() => dispatch(increamentbird(dem.name))}>➕</span></button>
            </div>   
           })
        }
       </div>
        
    )
}
