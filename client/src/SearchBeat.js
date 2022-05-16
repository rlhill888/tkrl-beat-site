import React, {useState} from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { color } from "@mui/system";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch';


function SearchBeat(){
    const [beatName, setBeatName]= useState('')
    const [genre, setGenre]= useState('')
    const [tempo, setTempo]= useState('')
    const [instruments, setInstruments]= useState('')

    const [showFilters, setShowFilters]=useState(false)

    let showFilterJsx

    if(showFilters===false){
       showFilterJsx = <> </>
    }

    if(showFilters===true){
        showFilterJsx = 
        <>
        <Box>
            <Container>
                <Paper className='main_paper_background'>
                   
                    <Box p={4}>

                       
                        <br />
                        <br />
                        <Grid spacing={4} container> 
                        
                        {/* <Grid item>
                            <Box>
                                <Paper>
                                    <Box>

                                    </Box>
                                </Paper>
                            </Box>
                        </Grid> */}

                        <Grid  item>
                            <Box>
                                <Paper>
                                    <Box p={2}>
                                            <h3
                                            >Beat Name</h3>
                                            <TextField value={beatName} onChange={(e)=> setBeatName(e.target.value)}></TextField>
                                    </Box>
                                </Paper>
                            </Box>
                        </Grid>

                        <Grid  item>
                            <Box>
                                <Paper>
                                    <Box p={2}>
                                            <h3
                                            >Genre</h3>
                                            <TextField value={genre} onChange={(e)=> setGenre(e.target.value)}></TextField>
                                    </Box>
                                </Paper>
                            </Box>
                        </Grid>

                        <Grid  item>
                            <Box>
                                <Paper>
                                    <Box p={2}>
                                            <h3
                                            >Tempo/BPM</h3>
                                            <TextField value={tempo} onChange={(e)=> setTempo(e.target.value)}></TextField>
                                    </Box>
                                </Paper>
                            </Box>
                        </Grid>

                        <Grid  item>
                            <Box>
                                <Paper>
                                    <Box p={2}>
                                            <h3
                                            >Instruments</h3>
                                            <TextField value={instruments} onChange={(e)=> setInstruments(e.target.value)}></TextField>
                                    </Box>
                                </Paper>
                            </Box>
                        </Grid>



                        </Grid>
                        <h3></h3>
                    </Box>
                    </Paper>
                    
               
            </Container>
        </Box>
            
        </>

    }

    




    return(
        <>
        <Box width={300}>
            <Container>
        <Paper>
            <Box px={1}>
         <h3 style={{
             textAlign: 'center'
         }}>Show Search Filters
                <Switch checked={showFilters} onChange={()=> setShowFilters(previousState=> !previousState)}/>
        </h3>
            </Box>
        </Paper>
        </Container>
        </Box>
        <br />
        <br />
        {showFilterJsx}

            
        </>
    )
}

export default SearchBeat