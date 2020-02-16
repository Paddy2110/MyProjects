import React,{Component} from 'react'
import Subscription from './Subscription'

export class SubscriptionDetails extends Component
{   
 state =
 {
     SubscriptionArr : [
        {id: 10, name:"Monthly", price:"500"},
        {id: 20, name:"Quaterly", price:"1500"},
        {id: 30, name:"Yearly", price:"2500"}
     ],
     showSubscription : false
 }
    eventHandler()
    {
        console.log("Button Clikced..");
        
        this.setState(
            {
                SubscriptionArr : [
                {id: 10, name:"Monthly", price:"500"},
                {id: 20, name:"Quaterly", price:"1500"},
                {id: 30, name:"Yearly", price:"2500"}
                ]
            },
            function Callback()
            {
                console.log(this.state)
            }
        )
    }

    onChange(event)
        {
            console.log("Plan is going to change");

            this.setState(
                
                    {
                        SubscriptionArr : [
                        {id: 10, name:event.target.value, price:event.target.value},
                        {id: 20, name:event.target.value, price:event.target.value},
                        {id: 30, name:event.target.value, price:event.target.value}
                        ],
                    },

                
                function callback()
                {
                    console.log(this.state)
                }
            )
        

        }

    render()
    { 
        
        return(
           <div>
               <button onClick = {this.eventHandler.bind(this)}> Montly </button>
              <Subscription name = {this.state.SubscriptionArr[0].name} price = {this.state.SubscriptionArr[0].price}
              changed = {this.onChange.bind(this)}/>

               <button  onClick = {this.eventHandler.bind(this)}> Quaterly </button>
              <Subscription name = {this.state.SubscriptionArr[1].name} price = {this.state.SubscriptionArr[1].price}/>

              <button  onClick = {this.eventHandler.bind(this)}> Yearly </button>
              <Subscription name = {this.state.SubscriptionArr[2].name} price = {this.state.SubscriptionArr[2].price}/> 
           </div>
        )
        
    }
}

export default SubscriptionDetails