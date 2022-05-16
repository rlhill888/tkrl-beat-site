import { Container } from "@mui/material";
import React from "react";
import NavBar from "./Navbar";
import SearchBeat from "./SearchBeat";


function SearchSpecificBeat(){

    return(
        <>
        <NavBar />
        <Container>
             <SearchBeat />
        </Container>
       

        </>
    )
}
export default SearchSpecificBeat