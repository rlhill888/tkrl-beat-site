import React, {useState} from "react";

function TempBeatForm(){
    const [albumnCover, setalbumnCover]=useState([])
    const [beatName, setBeatName]=useState('')
    const [description, setDescription]=useState('')
    const [mp3Price, setMp3Price]= useState(0)
    const [wavPrice, setWavPrice]= useState(0)
    const [trackOutPrice, setTrackOutPrice]= useState(0)
    const [genre, setGenre]=useState('')
    const [collaborators, setCollaborators]=useState(null)
    const [currentDealSale, setCurrentDealSale]= useState(false)
    const [featuredBeats, setFeaturedBeats]= useState(false)
    const [saleDiscountPercentage, setSaleDiscountPercentage]= useState(0)
    const [instruments, setInstruments]= useState('')
    const [sampledBeat, setSampledBeat]= useState(false)
    const [sampledBeatLink, setSampledBeatLink]= useState(null)
    const [mp3File, setMp3File]=useState([])
    const [wavFile, setWavFile]= useState([])
    const [trackoutsFile, setTrackoutsFile]= useState([])


    console.log(albumnCover)
    

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
        formData.append('albumn_cover', albumnCover)
        formData.append('description', description)
        formData.append('mp3_price', mp3Price)
        formData.append('wav_price', wavPrice)
        formData.append('track_outs_price', trackOutPrice)
        formData.append('genre', genre)
        formData.append('collaborators', collaborators)
        formData.append('current_deal_sale', currentDealSale)
        formData.append('featured_beats', featuredBeats)
        formData.append('sale_discount_percentage', saleDiscountPercentage)
        formData.append('instruments', instruments)
        formData.append('sampled_beat', sampledBeat)
        formData.append('sampled_beat_link', sampledBeatLink)
        formData.append('mp3_file', mp3File)
        formData.append('wav_file', wavFile)
        formData.append('track_outs', trackoutsFile)




        fetch('http://localhost:4000/beats',{
            method: 'POST',
            body: formData
           
        })
        .then(res=> res.json())
        .then(res=> console.log(res))

    }}>
        <h1>beat name</h1>
        <input value={beatName} onChange={(e)=> setBeatName(e.target.value)}></input>
        <br />
        <br />
        <h1> beat image albumnCover</h1>
        <input  onChange={(e)=> setalbumnCover(e.target.files[0])} type='file'></input>
        <br />
        <br />
        <h1> mp3 file</h1>
        <input  onChange={(e)=> setMp3File(e.target.files[0])} type='file'></input>
        <br />
        <br />
        <h1> Wav File</h1>
        <input  onChange={(e)=> setWavFile(e.target.files[0])} type='file'></input>
        <br />
        <br />
        <h1> Trackouts</h1>
        <input  onChange={(e)=> setTrackoutsFile(e.target.files[0])} type='file'></input>
        <br />
        <br />
        <h1>Description</h1>
        <input value={description} onChange={(e)=> setDescription(e.target.value)}></input>
        <br />
        <br />
        <h1>mp3 price</h1>
        <input value={mp3Price} onChange={(e)=> setMp3Price(e.target.value)}></input>
        <br />
        <br />
        <h1>wav price</h1>
        <input value={wavPrice} onChange={(e)=> setWavPrice(e.target.value)}></input>
        <br />
        <br />
        <h1>track outs price</h1>
        <input value={trackOutPrice} onChange={(e)=> setTrackOutPrice(e.target.value)}></input>
        <br />
        <br />
        <h1>genre</h1>
        <input value={genre} onChange={(e)=> setGenre(e.target.value)}></input>
        <br />
        <br />
        <h1>collaborators</h1>
        <input value={collaborators} onChange={(e)=> setCollaborators(e.target.value)}></input>
        <br />
        <br />
        <h1>current deal sale</h1>
        <input type='checkbox' checked={currentDealSale} onChange={(e)=> setCurrentDealSale(e.target.checked)}></input>
        <br />
        <br />
        <h1>featured beats</h1>
        <input type='checkbox' checked={featuredBeats} onChange={(e)=> setFeaturedBeats(e.target.checked)}></input>
        <br />
        <br />
        <h1>sale discount percentage</h1>
        <input value={saleDiscountPercentage} onChange={(e)=> setSaleDiscountPercentage(e.target.value)}></input>
        <br />
        <br />
        <h1>Instruments</h1>
        <input value={instruments} onChange={(e)=> setInstruments(e.target.value)}></input>
        <br />
        <br />
        <h1>Sampled Beat</h1>
        <input type='checkbox' checked={sampledBeat} onChange={(e)=> setSampledBeat(e.target.checked)}></input>
        <br />
        <br />
        <h1>Sampled Beat link</h1>
        <input value={sampledBeatLink} onChange={(e)=> setSampledBeatLink(e.target.value)}></input>
        <br />
        <br />
       






        <input type='submit'></input>
    </form>
    </div>
    )
}

export default TempBeatForm