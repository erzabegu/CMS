import React from "react";
import { FileType } from "reader/types";

interface Props {
  files: Array<FileType>;
}

const FilesListTemplate = ({ files }: Props) => {
  return (
    <div>
      {files.map((file: any) => <h1>
        {file.fileName}
      </h1>)}
    </div>
  )
}

export default FilesListTemplate;