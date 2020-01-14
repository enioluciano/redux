import React from 'react';
import { useSelector, useDispatch} from 'react-redux';


function Home() {
   
    const nomeFrames = useSelector(state => state.frameworks);
    const dispatch = useDispatch();
    

    function addFrames(){
        dispatch({ type: 'ADD_FRAMES', title: 'JavaScript'})

    }

  return (
      <>
    <ul>
      {nomeFrames.map((workframe, index )=> <li key={index}>{workframe}</li>)}
    </ul>
    <button type="button" onClick={addFrames}> Adicionar Framework</button>
    </>
  );
}

export default Home;