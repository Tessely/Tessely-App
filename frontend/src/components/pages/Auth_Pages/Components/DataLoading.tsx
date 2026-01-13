import { ProgressCircle, VStack, FileUpload, Icon, Card,Image,Text, Box,Dialog, Button, Portal, CloseButton} from "@chakra-ui/react";
import {Lock, Upload} from 'lucide-react';
import { useState } from "react";


export function DataLoading() {
  
  return (
    <>
    <Dialog.Body>
        <VStack alignItems={"center"} textAlign="center" gap={4}>
            <ProgressCircle.Root value={null} size="sm">
            <ProgressCircle.Circle>
                <ProgressCircle.Track />
                <ProgressCircle.Range />
            </ProgressCircle.Circle>
            </ProgressCircle.Root>
        <Text justifyContent={'center'}>Hang tight! We’re processing your data and will notify you when it’s done.</Text>
        </VStack>
      </Dialog.Body>
      <Dialog.Footer>
          <Dialog.ActionTrigger asChild>
            <Button variant="solid" bgColor={'brand.error'}>Cancel Upload</Button>
          </Dialog.ActionTrigger>
          <Dialog.ActionTrigger asChild>
            <Button variant="solid">OK</Button>
          </Dialog.ActionTrigger>
      </Dialog.Footer>
    </>
  );
}

