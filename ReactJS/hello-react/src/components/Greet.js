import React from 'react';

function Greet(props) {
    
    //prop is an object
    // attributes passed from parent are properties of props
    console.log(props);
    
    //props.name = 'AKj'; --- cannot do this as props is immutable
    
    //every declaration in JSX is converted into fucntion call
    return (
    <div>
        <h1> Welcome to ReactJS! - {props.name} {props.surname} </h1>
    </div>
    )
    
    //return React.createElement('div',null,
    //React.createElement('h1',null,'Welcome to React'))
}

//export function Gre() {
//    return <h1> Hey Gre </h1>
//}


// ES6 style declaring function
// const Greet = () => 
//     <div>
//         <h1> Welcome to ReactJS! </h1>
//     </div>


export default Greet