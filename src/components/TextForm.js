import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Upper Case BTN was clicked." + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }

    const handleClearClick = () => {
        setText("");
        props.showAlert("Text Cleared", 'success');
    }

    const handleonChange = (event) => {
        console.log("Handle on change");
        setText(event.target.value);
    }



    const [text, setText] = useState('');

    return (
        <>


            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
                <div className="mb-3">
                    <h1>{props.heading} </h1>
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} id="myBox" value={text} onChange={handleonChange} rows="8"></textarea>
                    <div className="buttons">
                        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
                        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower Case</button>
                        <button className="btn btn-primary my-2" onClick={handleClearClick}>Clear Text</button>
                    </div>
                </div>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
                <h1>Your text summary</h1>
                <p>{text.split(" ").length - 1} words and {text.length} characters.</p>
            </div>
        </>
    )
}
