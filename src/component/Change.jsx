import React, {useState} from "react";

export default function MyApp() {

    return(
        <MyButton/>


    )

}






function MyButton() {
    const [count, setCount] = useState('Pavadimas');


function handleClick() {
    setCount(prompt("iveskite Pavadima"));
}

    return(
        <div className="adds-Ad">
            <p className="adds-Name">{count}</p>
            <button className="adds-Button" onClick={handleClick}>+</button>
        </div>
            
            )
}
