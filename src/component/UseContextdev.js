import React, { useContext, useState} from 'react'

var userDetailsContext = React.createContext(null);

const UseContextdev = () => {
    const [userDetails] = useState({
        name: "dipan",
        age: 23
    });
    return (
        <>
            <h1>This is a parent component</h1>
            <userDetailsContext.Provider value={userDetails}>
                <ChildComponent userDetails={userDetails}></ChildComponent>
            </userDetailsContext.Provider>

        </>
    )
}
const ChildComponent=()=>{
    return(
        <>
        <h2>This is a childCOmponent</h2>
            <SubChildComponent/>
        </>
    )
}
const SubChildComponent=()=>{
    const context=useContext(userDetailsContext);
    return(
        <>
        <h2>This is a subchildCOmponent</h2>
            <p>Name:{context.name}</p>
            <p>Name:{context.age}</p>

        </>
    )
}

export default UseContextdev