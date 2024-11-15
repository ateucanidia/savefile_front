import {createContext} from "react";


const FolderContext = createContext({
  folderId:'1',
  setFolder:(folderId) => {}
});

export {FolderContext};