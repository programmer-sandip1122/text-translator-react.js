import React, { useState } from 'react'

export default function Textbar() {
    const [text, settext] = useState("")

    const uppercasebtn = () => {
        let newtext = text.toUpperCase();
        settext(newtext)
    }
    const lowercasebtn=()=>{
        let lowertext=text.toLocaleLowerCase();
        settext(lowertext);
    }
    const copytextbtn=()=>{
        navigator.clipboard.writeText(text);
        alert("!copied")
        settext("");
        return;
    }
    const cleartextbtn=()=>{
        settext("");
    }
    const handleonchange = (event) => {
        settext(event.target.value);
    }


    return (
        <>
        

            <div className="textbarcontainer">
                <textarea name="text" id="textbar" onChange={handleonchange} value={text} placeholder='Text Here'></textarea>
            </div>
            <div className="buttontextbar">
                <button onClick={uppercasebtn}>Uppercase</button>
                <button onClick={lowercasebtn}>Lowercase</button>
                <button onClick={copytextbtn}>copy Text</button>
                <button onClick={cleartextbtn}> Clear Text</button>
                <strong id='strong'>Words {text.split(" ").length} and characters {text.length}</strong>
                <strong id='readtime'>{0.008*text.split(" ").length} Minutes take to read</strong>
                
            </div>
             <div className="para">
                <p id='text'>{text}</p>
            </div>
           



        </>
    )
}
