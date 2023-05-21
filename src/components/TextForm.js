import React, {useState} from 'react'




export default function TextForm(props) {
  const handleUpClick = ()=> { 
    console.log("uppercase was clicked" + text);
    let newText= text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = ()=> { 
    console.log("uppercase was clicked" + text);
    let newText= text.toLowerCase();
    setText(newText)
  }

  const handleOnChange = (event)=> { 
    console.log("On Change");
    setText(event.target.value);
  }

  const [text, setText] = useState('Enter the text here');
  

  return (
    <div>

        <h1> {props.heading} </h1>
      
   <>


  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows={8} defaultValue={""} />
    

    <button className="btn btn-primary my-2 mx-1" onClick={handleUpClick}> convert to UPPER case</button>
    <button className="btn btn-primary my-2 mx-1" onClick={handleLoClick}> convert to Lower case</button>

  </div>

    <div className="Container my-2">

      <h1>Your text summary</h1>
      <p>{text.split(" ").length} and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minute read time   </p>

    </div>

</>


    </div>
  )
}
