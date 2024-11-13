import React, {useState} from "react";
import axios from "axios";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';



function FileUploadModal({  open, handleClose, onSuccess }){
   const [selectedFile, setSelectedFile]= useState();
  
   const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
   };
   
   
//    fetch file from API

    const uploadFile  = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append("file", selectedFile);
            
            console.log(localStorage.getItem('accessToken'),JSON.parse(localStorage.getItem('userdata')));
            //return false;
            try{
                const fileResponse= await axios.post('http://127.0.0.1:8000/api/file', formData, {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                      'Authorization': 'Bearer '+localStorage.getItem('accessToken')
                    },
                  } )
                 
                  if (onSuccess) onSuccess();  
                  setSelectedFile(null);
                  handleClose();
                console.log(fileResponse.data);
                

            }
            catch(error){
                console.log('error uploading the file', error);
            }
        
        }else {
        console.log("File or folder not selected.");
    }
    };
   
    return(
        <div>
            <Modal open={ open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description" >
            <Box className="modal-box">
                <h2>Upload your file</h2>
                <input type="file" placeholder="add a file" onChange={handleFileChange} accept="image/*,application/pdf"/>
                <button onClick={uploadFile }>Upload File</button>
            </Box>
            </Modal>    
        </div>
    );
};

export default FileUploadModal;