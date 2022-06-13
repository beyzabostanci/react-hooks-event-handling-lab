import React from "react"
function EyesOnMe(){
    return (
        <div>
            <button onFocus={() => console.log("Good!")} onBlur={()=> console.log("Hey! Eyes on me!")}>Eyes on me</button>
        </div>
    )
}
export default EyesOnMe
//The onFocus event is called when the element (or some element inside of it) receives focus.
//For example, it's called when the user clicks on a text input.

//The onBlur event handler is called when focus has left the element (or left some element inside of it).
//For example, it's called when the user clicks outside of a focused text input.