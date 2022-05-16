import React, {useState} from "react";

function TempBeatForm(){
    const [file, setFile]=useState([])
    const [beatName, setBeatName]=useState('')
    console.log(file)
    

    return(
    <div
    style={{
        color: 'white'
    }}
    >
    <form onSubmit={(e)=>{
        e.preventDefault()
        const formData = new FormData();

        formData.append('beat_name', beatName)
        formData.append('albumn_cover', file)

        console.log(formData)




        fetch('http://localhost:4000/beats',{
            method: 'POST',
            body: formData
           
        })
        .then(res=> res.json())
        .then(res=> console.log(res))

    }}>
        <h1>beat name</h1>
        <input onChange={(e)=> setBeatName(e.target.value)}></input>
        <h1> beat image file</h1>
        <input onChange={(e)=> setFile(e.target.files[0])} type='file'></input>
        <input type='submit'></input>
    </form>
    </div>
    )
}

export default TempBeatForm