import React from "react";
import Pallete from "../pallete/pallete";
import Workspace from "../workspace/workspace";
import './editor.css'

const Editor = () =>{
    return(
        <div className="editor">
            <Pallete/>
            <Workspace/>
      </div>
    );
}

export default Editor;