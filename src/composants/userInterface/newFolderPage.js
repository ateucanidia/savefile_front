function Dashboard() {
    const [folders, setFolders] = useState([]);
    const [currentFolderId, setCurrentFolderId] = useState(null);
    const [files, setFiles] = useState([]);
    const [subfolders, setSubFolders] = useState([]);
    const [clickedFolderId, setClickedFolderId] = useState(null);
    const [openFileModal, setOpenFileModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const handleOpenFileModal = () => setOpenFileModal(true);
    const handleCloseFileModal = () => setOpenFileModal(false);

    const [openFolderModal, setOpenFolderModal] = useState(false);
    const handleOpenFolderModal = () => setOpenFolderModal(true);
    const handleCloseFolderModal = () => setOpenFolderModal(false);

    const fetchSubfoldersAndFiles = async () => {
        try {
            let userdata = JSON.parse(localStorage.getItem('userdata'));
            let rootfolderId = userdata.rootFolder.split('root-folder-user-')[1];

            const subFolderResponse = await axios.get("http://127.0.0.1:8000/api/folders/" + rootfolderId + "/subfolders");
            setSubFolders(subFolderResponse.data);

            const fileResponse = await axios.get("http://127.0.0.1:8000/api/folders/" + rootfolderId + "/files");
            setFiles(fileResponse.data);

        } catch (error) {
            console.log("Erreur de chargement des données:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        const getInitialFoldersAndFiles = async () => {
            try {
                let userdata = JSON.parse(localStorage.getItem('userdata'));
                let rootfolderId = userdata.rootFolder.split('root-folder-user-')[1];

                await fetchSubfoldersAndFiles(rootfolderId);
                setCurrentFolderId(rootfolderId);
                setLoading(false);
            } catch (error) {
                console.log("Erreur de chargement des données:", error);
                setLoading(false);
            }
        };
        getInitialFoldersAndFiles();
    }, []);

    const handleFolderDoubleClick = (folderId) => {
        setClickedFolderId(folderId);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="sidebar">
                {/* Sidebar code */}
            </div>

            <div className="main-content">
                <div className="header-content header-dashboard">
                    {/* Header content */}
                </div>

                <div className="content content-dashboard content-grid">
                    {clickedFolderId ? (
                        // Folder-specific content
                        <div className="new-folder-page">
                            <h2>Folder ID: {clickedFolderId}</h2>
                            <p>This is the new page for the folder with ID: {clickedFolderId}</p>
                            <button onClick={() => setClickedFolderId(null)}>Back to Dashboard</button>
                        </div>
                    ) : (
                        // Dashboard content
                        <>
                            {subfolders.map(subfolder => (
                                <div className="folder-item" key={subfolder.id} onDoubleClick={() => handleFolderDoubleClick(subfolder.id)}>
                                    <FaFolder className="folder-icon" />
                                    <p>{subfolder.foldername}</p>
                                </div>
                            ))}

                            {files.map(file => (
                                <div className="file-item" key={file.id}>
                                    <FaFile className="folder-icon" />
                                    <p>{file.fileName}</p>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>

            <AddFolderModal open={openFolderModal} handleClose={handleCloseFolderModal} />
            <FileUploadModal open={openFileModal} handleClose={handleCloseFileModal} />
        </div>
    );
}
