import { VStack, FileUpload, Icon, Card,Image,Text, Box,Dialog, Button, Portal, CloseButton} from "@chakra-ui/react";
import {Lock, Upload} from 'lucide-react';
import { useState } from "react";
import { DataLoading } from "./DataLoading";

interface DataUploadProps {
    files: File[];
    setFiles: (files: File[]) => void;
    setIsUploading: (loading: boolean) => void;
}

export function DataUpload({ files, setFiles, setIsUploading }: DataUploadProps) {
  
    const handleClick = () => {
        if (files.length === 0)
          return alert("Please select files first.");

        setIsUploading(true); // start loading
        console.log("Uploading files:", files);
        setTimeout(() => {
            console.log("Files processed:", files.map(f => f.name));
            setIsUploading(false);
        }, 100000);
    }

  return (
    <>
    <Dialog.Body>
      <VStack align="start" gap={2}>
        <Text>Please upload your .csv/.xlsx/.xls files.</Text>
        <FileUpload.Root
            maxW="xl"
            alignItems="stretch"
            maxFiles={10}
            accept={[".xls", ".csv", ".xlsx"]}
            onFileAccept={({ files }) => {
                console.log("Accepted files:", files)
                setFiles(files);
            }}
            >
            <FileUpload.HiddenInput />
            <FileUpload.Dropzone>
            <Icon size="md" color="fg.muted">
                <Upload />
            </Icon>
            <FileUpload.DropzoneContent>
                <Box>Drag and drop files to upload</Box>
                <Box color="fg.muted">.csv, .xlsx, .xls</Box>
            </FileUpload.DropzoneContent>
            </FileUpload.Dropzone>
            <FileUpload.List />
        </FileUpload.Root>
        </VStack>
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.ActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </Dialog.ActionTrigger>
          <Button onClick={handleClick} variant="solid">Upload</Button>
        </Dialog.Footer>
    </>
  );
}

