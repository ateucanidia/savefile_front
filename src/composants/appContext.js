import React, { useState } from 'react';

function ContextMenu({ x, y, onClose }) {
    return (
        <div className="context-menu" onClick={onClose}>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                <li onClick={() => alert('Open folder')}>Open</li>
                <li onClick={() => alert('Rename folder')}>Rename</li>
                <li onClick={() => alert('Delete folder')}>Delete</li>
            </ul>
        </div>
    );
}

function FileFolder({ name }) {
    const [contextMenu, setContextMenu] = useState(null);

    const handleRightClick = (e) => {
        e.preventDefault();
        setContextMenu({
            x: e.pageX,
            y: e.pageY,
        });
    };

    const closeContextMenu = () => setContextMenu(null);

    return (
        <div onContextMenu={handleRightClick} style={{ cursor: 'pointer' }}>
            {name}
            {contextMenu && (
                <ContextMenu
                    x={contextMenu.x}
                    y={contextMenu.y}
                    onClose={closeContextMenu}
                />
            )}
            {contextMenu && <div className="overlay" onClick={closeContextMenu} />}
        </div>
    );
}

export default function AppContext() {
    return (
        <div>
            <h2>Right-click on the folder</h2>
            <FileFolder name="Folder 1" />
            <FileFolder name="File 1" />
        </div>
    );
}
