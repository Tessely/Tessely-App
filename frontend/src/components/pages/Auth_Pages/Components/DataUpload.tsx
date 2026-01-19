import {  VStack, FileUpload, Icon, Card, Image, Text, Box, Dialog, Button} from "@chakra-ui/react";
import {Upload} from 'lucide-react';
import { Toaster, toaster } from "../../../ui/toaster";
import { uploadCSV } from "../../../../api/datasource";

interface DataUploadProps {
    files: File[];
    setFiles: (files: File[]) => void;
    setIsUploading: (loading: boolean) => void;
}

export function DataUpload({ files, setFiles, setIsUploading }: DataUploadProps) {
  const handleClick = async () => {
    if (files.length === 0) {
      toaster.create({
        title: "No files selected",
        description: "Please select files first.",
        type: "error",
      });
      return;
    }
      setIsUploading(true);
      const uploadPromise = uploadCSV(files);
      uploadPromise
        .then(() => {
          setFiles([]);
        })
        .catch((error) => {
          console.error("Upload error:", error);
        })
        .finally(() => {
          setIsUploading(false);
        });
      toaster.promise(uploadPromise, {
        success: {
          title: "Successfully uploaded!",
          description: "Your files have been uploaded.",
        },
        error: {
          title: "Upload failed",
          description: "Something went wrong with the upload",
        },
        loading: {
          title: "Uploading...",
          description: "Please wait",
        },
          });
  };

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
              console.log("Accepted files:", files);
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