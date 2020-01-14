import React from 'react';
import { useSelector, useDispatch} from 'react-redux';

// import { Container } from './styles';

 function Home() {
    const nomeFrames = useSelector(state => state.addText);
    console.log(nomeFrames)
    const dispatch = useDispatch();

    function addFrames(){
       // dispatch({ type: 'ADD_TEXT', parametro: e.target.value});

    }

    
   
  return (
    <div>
        <ul>
        {nomeFrames.map((workframe, index )=> <li key={index}>{workframe}</li>)}
        </ul>

        <input 
        type='text'
        value={nomeFrames}
        onChange= { (e) => dispatch({
            type: 'ADD_TEXT', 
            parametro: e.target.value})}/>
        ><br/> <br/> 

        <button onClick={ () => dispatch({type: 'ADD_TEXT'})} >Adiconar</button>
    </div>
  );
  
} export default Home;
