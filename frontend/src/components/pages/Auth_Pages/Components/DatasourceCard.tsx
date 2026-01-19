import { VStack, FileUpload, Icon, Card,Image,Text, Box,Dialog, Button, Portal, CloseButton} from "@chakra-ui/react";
import {Lock, Upload} from 'lucide-react';
import { useState } from "react";
import { DataUpload } from "./DataUpload";
import { DataLoading } from "./DataLoading";

interface DataSourceCardProps {
  imageSrc: string,
  label: string,
  variant?: "default" | "locked"
}

export function DataSourceCard({ imageSrc, label, variant = "default" }: DataSourceCardProps) {
  const isLocked = variant === "locked";
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>(() => {
      const saved = localStorage.getItem("uploadedFiles");
      return saved ? JSON.parse(saved) : [];
  });
  const CardContent = (
    <Card.Root
      as="button"
      variant="outline"
      bgColor="#F9F9F9"
      width="150px"
      height="150px"
      justifyContent="center"
      cursor={isLocked ? "not-allowed" : "pointer"}
    >
      {isLocked && (
        <Box
          zIndex="overlay"
          position="absolute"
          color="brand.primary"
          alignSelf="center"
          justifySelf="center"
        >
          <Image src={`/images/MdLock.png`} height="32px" fit="contain" />
        </Box>
      )}
      <Card.Body
        width="100%"
        filter={isLocked ? "blur(1px)" : "none"}
        p={4}
        gap={3}
        justifyContent="center"
      >
        <Image
          src={`/images/Sources/${imageSrc}.png`}
          alt="Datasource Placeholder"
          height="60px"
          fit="contain"
        />
        <Text textStyle="sm" textAlign="center">
          {label}
        </Text>
      </Card.Body>
    </Card.Root>
  );

  return (
    <>
      {isLocked ? (
        CardContent
      ) : (
        <Dialog.Root>
          <Dialog.Trigger asChild>{CardContent}</Dialog.Trigger>
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title>Create Data Source ({label})</Dialog.Title>
                </Dialog.Header>
            
                  {isUploading ? (
                        <DataLoading />
                    ) : (
                        <DataUpload 
                            files={uploadedFiles}
                            setFiles={setUploadedFiles}
                            setIsUploading={setIsUploading}
                        />
                    )}
                <Dialog.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Dialog.CloseTrigger>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
      )}
    </>
  );
}

