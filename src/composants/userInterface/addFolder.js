import React, {useState} from "react";
import axios from "axios";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {FolderContext} from './AppContext';
import {useContext} from 'react';

function AddFolderModal({  open, handleClose, onAddSuccess }){
    const {folderId} = useContext(FolderContext);
    const [addfolder, setAddFolder] = useState([]);
   
    const handleFolderChange = (e) =>{
        setAddFolder(e.target.value);
    }

    const newFolder = async() => {
        if (addfolder) {
            let formData = {
                "foldername": addfolder,
                "parentId": folderId
              };
            //return false;
            try{
            
                const folderRespons = await axios.post('http://127.0.0.1:8000/api/folders', formData)
                console.log('Folder added', folderRespons.data);
                onAddSuccess();
            }
            catch(error) {
                console.log('error adding the folder', error); 
                alert('please enter the folder name!')
            }
        }else {
            console.log("folder not added.");
            
        }
        handleClose();
    }
    return(
        <div>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title"  aria-describedby="modal-modal-description">
            <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4,}}>
            <h2>Create a new folder</h2>
            <input onChange={handleFolderChange} type="folder" name="foldername" className="addfolder" placeholder="Enter file name"/>
            <button onClick={newFolder}>Save Folder</button>
            </Box>
            </Modal>
        </div>
    )
}

export default AddFolderModal;