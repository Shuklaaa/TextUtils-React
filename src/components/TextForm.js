import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPER CASE", "SUCCESS")
        // setText("You have clicked on handel upclick");
    }

    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LOWER CASE", "SUCCESS")
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleClearClick = ()=> {
        let newText = "";
        setText(newText);
        props.showAlert("TEXT CLEARED", "SUCCESS")
    }

    const handleRevClick = ()=> {
        let newWord = text.split("");
        let revWord = newWord.reverse("");
        setText(revWord.join(""));
        props.showAlert("Converted to REVERSE WORD", "SUCCESS")
    }


    const [text, setText] = useState('');
    // text = "new Text"; //wrong way to change the state
    // setText("New text here"); //right way to change the state
    return (
        <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}} />
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleLoClick}>CONVERT TO LOWERCASE</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleClearClick}>CLEAR TEXT</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleRevClick}>REVERSE TEXT</button>
    </div>

    <div className="container"  style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").filter((elements)=> {return elements.length!==0}).length} words and {text.length} characters</p>
        <p>{text.split(" ").filter((elements)=> {return elements.length!==0}).length * 0.008} minutes read</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
    </div>
    </>
  )
}
