import React, {useState} from 'react'

export default function TextForm(props) {
    // text = "new text" // wrong way to change the state
    // setText("new text");  // Correct way to change the state

    const handleUppercaseClick = ()=>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    
    const handleLowercaseClick = ()=>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    }
    
    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        // navigator.clipboard.writeText(text);
        props.showAlert("Text Copied!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }

    const [text, setText] = useState('');

    return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>   
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>

        {/* Button for Upper Text */}
        <button className="btn btn-primary mx-2" onClick={handleUppercaseClick}>Convert to Uppercase</button>

        {/* Button for Lower Text */}
        <button className="btn btn-primary mx-2" onClick={handleLowercaseClick}>Convert to Lowercase </button>

        {/* Button to clear the Text */}
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear the textarea </button>

        {/* Button to copy the Text */}
        <button id = "myBox" className="btn btn-primary mx-2" onClick={handleCopy}>Copy the text </button>

        {/* Button to remove extra spaces the Text */}
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove ectra spaces</button>


    </div>
    
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read te text</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"ENter something in the text box to preview here"}</p>
    </div>

    </>
  )
}
