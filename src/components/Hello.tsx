import React from "react";



type Props = {
    name: string;
    big?: boolean;
    onHello?: () => void;
    onBye?: () => void;
}

const Hello: React.FC<Props> = ({ name ="", big = false, onHello = () => { }, onBye = () => { } }) => {
    
    return <div>
        {big ? <h1>안녕하세요, {name}!</h1> : <p>안녕하세요, {name}!</p>}
        <div>
            <button onClick={onHello}>Hello</button>
            <button onClick={onBye}>Bye</button>
        </div>
    </div>
}
 
export default Hello