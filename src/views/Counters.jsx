import React from 'react';
//import {useSelector} from 'react-redux';
import { useSelector} from 'react-redux';

// import { Container } from './styles';

function Counters() {
    

    const qtv = useSelector(state => state.frameworks);
    
    
    return (
     <div >
          Teste {qtv.length} man
     </div>
     

    );

  
} export default  Counters;
