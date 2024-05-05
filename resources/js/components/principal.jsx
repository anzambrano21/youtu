// Recupera los datos del usuario de sessionStorage
import React, { useContext } from 'react';
import { Exaplecontect } from "../context/contexto"
export const Principal = () => {
  const example = useContext(Exaplecontect)
  console.log(example);
  
  return (<div></div>)

}