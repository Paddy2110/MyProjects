import React from 'react'

function Subscription({name, price,changed,props})
{
 return (
        <div>
       Subscription has been setup for <input type = 'text' value = {props} onChange = {changed} /> and Price would be <input type = 'text' value ={price} onChange = {changed} />
         </div>

 )

}

export default Subscription