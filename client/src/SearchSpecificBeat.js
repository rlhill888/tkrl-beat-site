import { Container } from "@mui/material";
import React from "react";
import NavBar from "./Navbar";
import SearchBeat from "./SearchBeat";


function SearchSpecificBeat({setSongSrc, user, songSrc}){

    return(
        <>
        <NavBar songSrc={songSrc} user={user} />
        <Container>
             <SearchBeat setSongSrc={setSongSrc}/>
        </Container>
       

        </>
    )
}
export default SearchSpecificBeat