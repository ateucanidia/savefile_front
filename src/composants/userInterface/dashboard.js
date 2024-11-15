import React, { useState, useEffect } from "react";
import Navbar from './navbar.js';
import { FaFolder } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { AiOutlineFileJpg, AiOutlineFilePdf } from "react-icons/ai";
import { IoArrowBack } from "react-icons/io5";
import { CgFileAdd } from "react-icons/cg";
import { RiFolderAddFill } from "react-icons/ri";
import FileUploadModal from "./fileUpload.js";
import AddFolderModal from "./addFolder.js";
import { RiLogoutCircleFill } from "react-icons/ri";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";

import {FolderContext} from './AppContext';

function DashboardInterface(){
    return(
        <div>
            <Navbar/>
            <Dashboard/>
        </div>
    )
}

function ContextMenu({ x, y, onClose }) {
    return (
        <div>
            <div className="context-menu"  onClick={(e) => e.stopPropagation()}>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    <li onClick={() => alert('Open folder')}>Open</li>
                    <li onClick={() => alert('Rename folder')}>Rename</li>
                    <li onClick={() => alert('Delete folder')}>Delete</li>
                </ul>
            </div>
            <div className="overlay" onClick={onClose} />
        </div>
    );
}

function Dashboard(){
    const [folders, setFolders] = useState([]);
    const [currentFolderId, setCurrentFolderId] = useState(1);
    const [files, setFiles] = useState([]);
    const [subfolders, setSubFolders] = useState([]);
    const [clickedFolderId, setClickedFolderId] = useState(null);
    const [openFileModal, setOpenFileModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [contextMenu, setContextMenu] = useState(null);
    const [rightClickedFolderId, setRightClickedFolderId] = useState(null);
    const handleOpenFileModal = () => setOpenFileModal(true);
    const handleCloseFileModal = () => setOpenFileModal(false);
    const [folderId, setFolder] = useState('');
    const [openFolderModal, setOpenFolderModal] = useState(false);
    const handleOpenFolderModal = () => setOpenFolderModal(true);
    const handleCloseFolderModal = () => setOpenFolderModal(false);

    const userdata = JSON.parse(localStorage.getItem('userdata'));
    const Navigate = useNavigate
    const logout =() =>{
        localStorage.clear();
        Navigate('/login')
    }

        const fetchSubfoldersAndFiles = async(folderId ) =>{
            try {
                console.log("Fetching files for folder:", folderId);
                let userdata = JSON.parse(localStorage.getItem('userdata'));
                // Extract rootfolderId from userdata
                const subFolderResponse = await axios.get("http://127.0.0.1:8000/api/folders/"+folderId+"/subfolders");
                setSubFolders(subFolderResponse.data);
                console.log(subFolderResponse.data, 'sub Folder')

                const fileResponse = await axios.get("http://127.0.0.1:8000/api/folders/"+folderId+"/files");
                setFiles(fileResponse.data);
                console.log("Loaded files in root folder:", fileResponse.data);
                
            } catch (error) {
                console.log("Erreur de chargement des données:", error);
                setLoading(false); 
            }
        }
        const handleFileUploadSuccess = () => {
            refreshSubfolders(); // Reloads the files after successful upload
            setTimeout(() => refreshSubfolders(), 500);
            console.log("Files reloaded after upload.");
        };
        const refreshSubfolders = () => {
            // Use the current folder ID or root folder ID to refresh the list
            // const folderId = clickedFolderId || currentFolderId;
            console.log("Refreshing files for folder:", folderId);
            fetchSubfoldersAndFiles(folderId);
        };
        
        
        useEffect(() => {
            const getInitialFoldersAndFiles = async () => {
                
                try {
                    let userdata = JSON.parse(localStorage.getItem('userdata'));
                    let rootfolderId = userdata.rootFolder.split('root-folder-user-')[1];
                    console.log("Root Folder ID:", rootfolderId);
                    await fetchSubfoldersAndFiles(rootfolderId);
                    setClickedFolderId(null);
                    setCurrentFolderId(rootfolderId);
                    setFolder(rootfolderId); // Set the current folder as the root folder
                    setLoading(false);
                } catch (error) {
                    console.log("Erreur de chargement des données:", error);
                    setLoading(false);
                }
            };
            getInitialFoldersAndFiles();
            console.log("Files state updated:", files);
        }, []);


    const handleFolderDoubleClick = (folderId) => {
        setClickedFolderId(folderId);
        fetchSubfoldersAndFiles(folderId); 
        setFolder(folderId);
    };

    const goBackToDashboard = () => {
        let userdata = JSON.parse(localStorage.getItem('userdata'));
        let rootFolderId = userdata.rootFolder.split('root-folder-user-')[1];
        setClickedFolderId(null);
        fetchSubfoldersAndFiles(rootFolderId);
    };

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

    const handleRightClick = (e, folderId) => {
        e.preventDefault();
        setContextMenu({
            x: e.pageX,
            y: e.pageY,
        });
        setRightClickedFolderId(folderId);
    };
    const closeContextMenu = () => setContextMenu(null);
    

        return(
            <FolderContext.Provider value={{folderId, setFolder}}>
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
                    <li><a href="/dashboard"><i className="fa fa-dashboard"></i> Dashboard</a></li>
                    <li><a href="/"><FaHome/> Home</a></li>
                    <li>{ userdata ?<a href="/login" onClick ={logout}><RiLogoutCircleFill/> LogOut</a>: null}</li>
                    {/* <li><RiLogoutCircleFill background colour/>{ userdata ? <Link onClick ={logout} className="nav-link" to="/login">LogOut</Link> : null}</li> */}
                    
                </ul>
            </div>

            <div className="main-content">
                <div className = "header-content header-dashdoard">
                <button  onClick={goBackToDashboard} type="button" className="action-faff"><IoArrowBack   size={30}/></button>
                    <input type="search" id="search-bar" placeholder="search files"/>
                    <div className="header-button">
                        <button  onClick={handleOpenFolderModal} type="button" className="action-faff"><RiFolderAddFill size={30}/></button>
                        <button  onClick={handleOpenFileModal} type="button" className="action-faff"><CgFileAdd size={30}/></button>
                    </div>
                </div>
                <div className=" content-dashboard content-grid">
                {/* {clickedFolderId ? (
                            <h2>FolderID: {clickedFolderId}</h2>
                    ) : (
                        
                        <></>
                    )} */}
                    <>
                        {/* Display Subfolders */}
                            {subfolders.map(subfolder => (
                                <div className="folder-item" onContextMenu={handleRightClick} key={subfolder.id} onDoubleClick={() => handleFolderDoubleClick(subfolder.id)}>
                                    <FaFolder className="folder-icon" />
                                    <p>{subfolder.foldername}</p>
                                    {contextMenu && rightClickedFolderId === subfolder.id && (
                                    <ContextMenu
                                        x={contextMenu.x}
                                        y={contextMenu.y}
                                        onClose={closeContextMenu}
                                        />
                                    )}
                                    {contextMenu && <div className="overlay" onClick={closeContextMenu} />}
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
                              
                        </>
                    
                </div>
            </div>
                    
            
            
                <AddFolderModal open={openFolderModal} handleClose={handleCloseFolderModal} onAddSuccess={refreshSubfolders}/>
                <FileUploadModal open={openFileModal} handleClose={handleCloseFileModal} onSuccess={handleFileUploadSuccess} />
            
        </div>
        </FolderContext.Provider>
        )
}

 export default DashboardInterface;