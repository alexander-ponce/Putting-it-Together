import React, { useState } from 'react'

const PersonCard = (props) => {
  const [ age, setStateAge ] = useState(props.age);
    return (

        <div>
            <h1>
                {props.lastName}, {props.firstName}
            </h1>
            <p> Age: {age} </p>
            <p> Hair Color: {props.hair} </p>
            <button onClick = { (event) => setStateAge(age + 1) }> Birthday Button for {props.firstName}  {props.lastName} </button>
        </div>
    );
}

//Can also be written like this to use prop on top and store it on a variable.

//     const {firstName, lastName, age, hair} = props;


//     return (
//         <div>
//             <h1>
//                 {lastName}, {firstName}
//             </h1>
//             <p> Age: {age} </p>
//             <p> Hair Color: {hair} </p>
//         </div>
//     );
// }

export default PersonCard;