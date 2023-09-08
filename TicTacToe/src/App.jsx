import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tableau,setTableau]=useState([null,null,null,null,null,null,null,null,null])
  const player1="X",player2="O";
  const [role,setrole]=useState(player1)
  const [message,setmessage]=useState(null)


  const changeRole=()=>{
  if(role==player1){
    setrole(player2)
  }
  if(role==player2){
    setrole(player1)
  }
  }
  const gameMaker=(index,elem)=>{
    if(elem || message){
      return
    }
    const tmp = [...tableau]
    tmp[index]=role
    setTableau(tmp)
    changeRole()
  }
  const Chekwinner=()=>{
    if(message){
      return
    }
    if(tableau[0]==tableau[4]&&tableau[4]==tableau[8]&& tableau[0]){
       setmessage(`the player who played with ${tableau[0]} won`)
    }
    if(tableau[2]==tableau[4]&&tableau[4]==tableau[6]&& tableau[2]){
       setmessage(`the one who played with ${tableau[2]} won`)
    }
    if(tableau[0]==tableau[1]&&tableau[1]==tableau[2]&& tableau[0]){
       setmessage(`the one who played with ${tableau[0]} won`)
    }
    if(tableau[3]==tableau[4]&&tableau[4]==tableau[5]&& tableau[3]){
       setmessage(`the one who played with ${tableau[3]} won`)
    }
    if(tableau[6]==tableau[7]&&tableau[7]==tableau[8]&& tableau[6]){
       setmessage(`the one who played with ${tableau[6]} won`)
    }
    if(tableau[0]==tableau[3]&&tableau[3]==tableau[6]&& tableau[0]){
       setmessage(`the one who played with ${tableau[0]} won`)
    }
    if(tableau[1]==tableau[4]&&tableau[4]==tableau[7]&& tableau[1]){
       setmessage(`the one who played with ${tableau[1]} won`)
    }
    if(tableau[2]==tableau[5]&&tableau[5]==tableau[8]&& tableau[2]){
       setmessage(`the one who played with ${tableau[2]} won`)
    }
  }
  Chekwinner()
  const reset=()=>{
    setTableau([null,null,null,null,null,null,null,null,null])
    setmessage(null)
    setrole(player1)
  }

  return (
    <>
    <div id='Ticcontainer' >
    <div id="messageContainer">{message}</div>
    <div id='gameContainer'>
    {
    tableau.map((e,i)=>{
      return <div id='CaseContainer' onClick={()=>gameMaker(i,e)}>{e}</div>
    })}
    </div>
    <button id='restBtn' onClick={()=>reset()}>reset</button>
    </div>
    
    </>
  )
}

export default App
