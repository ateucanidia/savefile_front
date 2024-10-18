import React, { useState, useEffect } from "react";
import Navbar from './navbar.js';
import { FaFolder } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { AiOutlineFileJpg, AiOutlineFilePdf } from "react-icons/ai";
import { CgFileAdd } from "react-icons/cg";
import { RiFolderAddFill } from "react-icons/ri";
import FileUploadModal from "./fileUpload.js";
import AddFolderModal from "./addFolder.js";
import axios from "axios";



function DashboardInterface(){
    return(
        <div>
            <Navbar/>
            <Dashboard/>
        </div>
    )
}

 function Dashboard(){
    const [folders, setFolders] = useState([]);
    const [files, setFiles] = useState([]);
    const [subfolders, setSubFolders] = useState([]);
    const [openFileModal, setOpenFileModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const handleOpenFileModal = () => setOpenFileModal(true);
    const handleCloseFileModal = () => setOpenFileModal(false);

    const [openFolderModal, setOpenFolderModal] = useState(false);
    const handleOpenFolderModal = () => setOpenFolderModal(true);
    const handleCloseFolderModal = () => setOpenFolderModal(false);

    useEffect(() => {
        const getFolderFile = async() =>{
            try {
                // const folderResponse = await axios.get("http://127.0.0.1:8000/api/folders");
                // setFolders(folderResponse.data);
                // console.log(folderResponse.data, 'Folder')
                let userdata = JSON.parse(localStorage.getItem('userdata'));
            let rootfolderId = userdata.rootFolder.split('root-folder-user-')[1];
                
                const subFolderResponse = await axios.get("http://127.0.0.1:8000/api/folders/"+rootfolderId+"/subfolders");
                setSubFolders(subFolderResponse.data);
                console.log(subFolderResponse.data, 'sub Folder')

                const fileResponse = await axios.get("http://127.0.0.1:8000/api/folders/"+rootfolderId+"/files");
                setFiles(fileResponse.data);
                console.log(fileResponse.data, 'File');
                setLoading(false); //indique que le chargement est terminer
            } catch (error) {
                console.log("Erreur de chargement des données:", error);
                setLoading(false); //indique que le chargement est terminer
            }
        }
        getFolderFile();
    },[]);
  
    const renderFileIcon = (filename) => {
        const fileExtension = filename.split('.').pop().toLowerCase();
        switch (fileExtension) {
            case 'jpg':
            case 'jpeg':
                return <AiOutlineFileJpg className="file-icon" />;
            case 'pdf':
                return <AiOutlineFilePdf className="file-icon" />;
            default:
                return <FaFile className="file-icon" />;
        }
    };

    if (loading) {
        return <div>Loading...</div>; // Replace with your loading component or spinner
    }


     return(
        <div>
            <div className="sidebar">
                <br></br>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    {/* Font Awesome Free 6.6.0 by @fontawesome - License: https://fontawesome.com/license/free */}
                    <path d="M512 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l128 0c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8l160 0c35.3 0 64 28.7 64 64l0 256zM232 376c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0 0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 64-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0 0 64z"/>
                </svg>
                </div>
                <ul>
                    <li><a href="/dashnoard"><i className="fa fa-dashboard"></i> Dashboard</a></li>
                    <li><a href="/"><FaHome/> Home</a></li>
                    <li><a href="/folder"><FaFolder/> Folders</a></li>
                    <li><a href="/"><FaFile/> Recent Files</a></li>
                    <li><a href="/"><i className="fa fa-cog"></i> Shared Files</a></li>
                    <li><a href="/"><i className="fa fa-cog"></i> Deleted Files</a></li>
                </ul>
            </div>

            <div className="main-content">
                <div className = "header-content header-dashdoard">
                    <input type="search" id="search-bar" placeholder="search files"/>
                    <div className="header-button">
                        <button  onClick={handleOpenFolderModal} type="button" className="action-faff"><RiFolderAddFill size={30}/></button>
                        <button  onClick={handleOpenFileModal} type="button" className="action-faff"><CgFileAdd size={30}/></button>
                    </div>
                </div>
                <div className="content content-dashboard content-grid">
                   {/* Display Subfolders */}
                    {subfolders.map(subfolder => (
                        <div className="folder-item" key={subfolder.id}>
                            <FaFolder className="folder-icon" />
                            <p>{subfolder.foldername}</p>
                        </div>
                    ))}

                    {/* Display Files */}
                    {files
                        .map(file => (
                            <div className="file-item" key={file.id}>
                                <FaFile className="folder-icon"/>
                                <p>{file.fileName}</p>
                            </div>
                        ))}
                </div>
            </div>

            <AddFolderModal open={openFolderModal} handleClose={handleCloseFolderModal} />
            <FileUploadModal open={openFileModal} handleClose={handleCloseFileModal} />
        </div>
     )
 }

 export default DashboardInterface;