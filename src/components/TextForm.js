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

    const handleExtraSpaces = () => {
        let newText = text.split(/\s+/).join(" ");
        setText(newText);
        props.showAlert("Extra Spaces Removed", 'success');
    }


    const [text, setText] = useState('');

    return (
        <>


            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
                <div className="mb-3">
                    <h1 className='mb-4'>{props.heading} </h1>
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#13466e', color: props.mode === 'light' ? 'black' : 'white' }} id="myBox" value={text} onChange={handleonChange} rows="8"></textarea>
                    <div className="buttons">
                        <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={handleUpClick}>Convert to Upper Case</button>
                        <button className="btn btn-primary mx-2 my-1" disabled={text.length === 0} onClick={handleLoClick}>Convert to Lower Case</button>
                        <button className="btn btn-primary mx-2 my-1 " disabled={text.length === 0} onClick={handleClearClick}>Clear Text</button>
                        <button className="btn btn-primary mx-2 my-1 " disabled={text.length === 0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    </div>
                </div>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
                <h1>Your text summary</h1>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters.</p>
                <p>{text.length === 0 ? '0 Minutes Read' : 0.25 / 60 * text.split(" ").filter((element) => { return element.length !== 0 }).length} </p>
                <h1>Preview</h1>
                <p>{text.length === 0 ? 'Nothing to preview' : text}</p>
            </div>

        </>
    )
}
