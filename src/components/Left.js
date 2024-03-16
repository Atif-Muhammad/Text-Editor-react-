import React from 'react'

export default function Left(props) {
    // let text = props.text
    // let newText = props.newText
    function toUpperCase() {
        let userEntry = document.getElementById("userEntry")
        let text = userEntry.value
        // if textArea is empty
        if (!text) {
            props.showAlert("Text Area is Empty", "warning")
        } else {
            props.newText(text.toUpperCase())
            props.showAlert("Converted to upperCase", "success")
        }
    }
    function toLowerCase() {
        let userEntry = document.getElementById("userEntry")
        let text = userEntry.value
        // if textArea is empty
        if (!text) {
            props.showAlert("Text Area is Empty", "warning")
        } else {
            props.newText(text.toLowerCase())
            props.showAlert("Converted to lowerCase", "success")
        }
    }
    function capitalize() {
        let userEntry = document.getElementById("userEntry")
        let text = userEntry.value
        // if textArea is empty
        if (!text) {
            props.showAlert("Text Area is Empty", "warning")
        } else {
            props.showAlert("Capitalized", "success")
            function titleCase(str) {
                return str.toLowerCase().split(" ").map(function(word) {
                    return word.charAt(0).toUpperCase() + word.slice(1);              
                }).join(" ");          
            }
            props.newText(titleCase(text))
        }
    }
    function reset() {
        props.newText("")
        let userEntry = document.getElementById("userEntry")
        userEntry.value = ""
        props.showAlert("Reset", "success")
    }
    function rmvExtraspaces(){
        let userEntry = document.getElementById("userEntry")
        let text = userEntry.value
        // if textArea is empty
        if (!text) {
            props.showAlert("Text Area is Empty", "warning")
        } else {
            props.newText(text.toString().split(""))
            props.showAlert("Extra spaces removed", "success")
        }
    }
    const handleonChange = (event) => {
        console.log("Something is cooking.....")
        props.newText(event.target.value);
    }
    
    function copyText(){
        let result = document.getElementById("resultdiv")
        if(result.innerHTML){
            navigator.clipboard.writeText(result.innerHTML)
            props.showAlert("Copied to clipboard", "success")
        }else{
            props.showAlert("cannot copy to clipboard", "danger")
        }

    }
    return (
        <div className='container border border-dark'>
            <div className="input-group mt-5">
                <span className="input-group-text" style={{ maxHeight: "80px", minHeight: "80px" }}>Enter text here </span>
                <textarea className="form-control" aria-label="With textarea" id='userEntry' onChange={handleonChange} style={{ maxHeight: "80px", minHeight: "80px", maxWidth: "100%", minWidth: "70%" }}></textarea>
            </div>
            <div className="container d-flex justify-content-center mt-4">
                <button type="button" className="btn btn-dark ps-4 pe-4 pt-2 pb-2 ms-3" style={props.btnMode} onClick={toUpperCase}>toUpper</button>
                <button type="button" className="btn btn-dark ps-4 pe-4 pt-2 pb-2 ms-3" style={props.btnMode} onClick={toLowerCase}>toLower</button>
                <button type="button" className="btn btn-dark ps-4 pe-4 pt-2 pb-2 ms-3" style={props.btnMode} onClick={capitalize}>Capitalize</button>
                <button type="button" className="btn btn-dark ps-4 pe-4 pt-2 pb-2 ms-3" style={props.btnMode} onClick={rmvExtraspaces}>Remove extra spaces</button>
                <button type="button" className="btn btn-dark ps-4 pe-4 pt-2 pb-2 ms-3" style={props.btnMode} onClick={reset}>Reset</button>
            </div>
            <h3 className='mt-5 text-center bg-dark text-white p-2 border rounded-top'>Results</h3>
            <div className="container border border-dark p-4 border rounded" id='resultdiv' style={{ maxHeight: "260px", minHeight: "260px", overflowY: "auto" }}>{props.text}</div>
            <div className="container-fluid mt-1 d-flex justify-content-end">
                <button type="button" className="btn btn-dark pt-2 pb-2 ps-4 pe-4 mb-2 mt-1" style={props.btnMode} onClick={copyText}>Copy</button>
            </div>

        </div>


    )
}
