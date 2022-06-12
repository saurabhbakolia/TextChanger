  import React, {useState}  from 'react'

  export default function TextForm(props) {

    // function to handle the textarea text change
    const handleOnChange = (event)=>{
      // console.log("OnChange triggered");
      setText(event.target.value)
    };

    // function to handle the click event 
    const handleUpClick = () =>{
      // console.log("Uppercase was clicked");
      let newText = text.toUpperCase();
      setText(newText);
    }

    // function to handle the click event 
    const handleLoClick = () =>{
      let newText = text.toLowerCase();
      setText(newText);
    }

    // function to handle the click event 
    const handleClearClick = () =>{
      // console.log("Uppercase was clicked");
      let newText = "";
      setText(newText);
    }

      // function to handle the Copy event 
      const handleCopy = () =>{
        let text = document.getElementById("text_Area");
        text.select();
        navigator.clipboard.writeText(text.value);
      }

      // function to handle the Copy event 
      const handleExtraSpace = () =>{
        console.log("triggered extra space");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
      }
      

      

    // state of text
      const [text, setText] = useState("Enter text here....")

    // word count functionality
    let count = 0;
    text.split(" ").forEach((e,i,a)=>{
      if(a[i]!=="" && a[i]!==" "){
        count++;
      }
    })

    console.log(count);
  
  
    return (
      <div>
        <>
        <div className="mb-3" style={{color:props.mode==='light' ? '#495464':'rgb(212 212 216)'}}>
            <h2 className="mb-2">{props.heading}</h2>
            <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode === 'light'?'#EEEEEE':'#334257',color:props.mode==='light' ? '#495464':'rgb(212 212 216)'}} id="text_Area" rows="6" placeholder={text}></textarea>
            <button className="btn btn-secondary my-2 mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-secondary my-2 mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-secondary my-2 mx-1" onClick={handleLoClick}>Convert to CapitalizeCase</button>
            <button className="btn btn-secondary my-2 mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
            <button className="btn btn-secondary my-2 mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-secondary my-2 mx-1" onClick={handleCopy}>Copy Text</button>
        </div>

        <div className="container" style={{color:props.mode==='light' ? '#495464':'rgb(212 212 216)'}}>
          
          <h2>Your text summary</h2>
          <p>{count} <b>words</b> and {text.length} <b>characters</b></p>
          <p>{0.008 * text.split(" ").length} Minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length === 0 ? "Enter something to preview" : text}</p>
        </div>
        </>
      </div>
    )
  }
