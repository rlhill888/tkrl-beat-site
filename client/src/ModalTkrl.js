import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';


function ModalTkrl({openModal, modalText, setOpenModal}){
    const handleCloseModal = () => setOpenModal(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400
      }

    return(<>
    <Modal
       open={openModal}
       onClose={handleCloseModal}
       >
           <Paper className='main_paper_background'>
               <Box
               sx={style}
               >
                   <Paper className='main_paper_background'>
                       <Box p={4}>
                           <Paper style={{
                               backgroundColor: 'white'
                           }}>
                                <Box p={4}>
               {modalText}
               </Box>
               </Paper>
                     </Box>
                    </Paper>
               </Box>
           </Paper>

       </Modal>
    </>)
}

export default ModalTkrl