import React, {useState} from 'react'


export default function TextForm(props)
{
    const handleupClick = ()=>{
        setText(text.toUpperCase())

        
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
        
    }
    const [text, setText] = useState("");
   
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <label htmlfor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleupClick}>convert the text</button>
        </div>
        <div className="continer my-5">
            <h1>Your Text Summary</h1>
            <p>words are {text.split(" ").length} and characters are { text.length}</p>
            <p>{0.008 *  text.split(" ").length } minutes are required to read </p>
            <h2>preview</h2>
            <p>{text}</p>
        </div>
        </>

    )
    

    
}