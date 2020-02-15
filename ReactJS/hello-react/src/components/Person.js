import React from 'react'


function Person({name,age,changed,props}) 
{

    return (
        <div>
              <h2> My name is {name}</h2>
              <h2> My age is {age} </h2>
              Enter the New Name <input type = 'text' value = {props}
              onChange = {changed} />
        </div>
    )
}

export default Person


  