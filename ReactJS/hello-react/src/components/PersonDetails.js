import React, { Component } from 'react'
import Person from './Person';

export class PersonDetails extends Component {
   
    state = {
        PersonArr : [
            {id: 10, name: "Pradeep", age :"27"},

        ],
        showPerson : false

    }
    
    eventHandler()
    {
        console.log("Button Clikced..");
        
        this.setState(
            {
                PersonArr : [
                {id: 10, name:"Manish", age:"35"}
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
            console.log("Name is going to change");

            this.setState(
                {
                    PersonArr : [
                        {id: 10, name:event.target.value, age:"30"},

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
            const mystyle = {'border': '2px solid black'} 
            return(
            <div>
                <button style = {mystyle} onClick = {this.eventHandler.bind(this)}> SwtichName </button>
               
                <Person name={this.state.PersonArr[0].name} 
                age={this.state.PersonArr[0].age} 
                changed = {this.onChange.bind(this)} />
            </div>
            )
        
        }
        
        
}

export default PersonDetails
