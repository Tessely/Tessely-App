import React from 'react';
import { useEffect,useState } from 'react';
import { Box, Card, Heading, VStack, Text, HStack} from '@chakra-ui/react';
import { DataSourceCard } from './Components/DatasourceCard';
import { getUserCSVFiles, deleteUserCSVFile } from '../../../api/datasource';
import { UserCSVFile } from '../../../types';
import { Toaster,toaster } from '../../ui/toaster';

interface DataSourcesProps {}

const DataSources: React.FC<DataSourcesProps> = () => {
    const [files, setFiles]=useState<UserCSVFile[]>([]);
    useEffect(() => {
        const fetchFiles = async () => {
        try {
            const data = await getUserCSVFiles(); // fetch files from API
            console.log("Fetched files:", data);
            setFiles(data); // set state with fetched files
        } catch (err) {
            console.error("Failed to fetch files:", err);
        }
        };

        fetchFiles(); // call the async function
  }, []); // empty dependency array -> runs once on mount

  

    return (
        <>
        <Box bgColor="brand.greybg" p={8} minHeight='100vh' minWidth="100vw">
            <Card.Root px={4} variant='outline'>
                <Card.Header />
                    <Heading>Data Sources</Heading>
                    <Card.Body alignItems="start" gap={6} px={2}>
                        <VStack alignItems="start">
                            <Text fontWeight="medium">Current</Text>
                            {files.length>0?(
                                <HStack wrap="wrap" gap={5}>
                                    {files.map((file:any)=>(
                                    <DataSourceCard
                                    imageSrc="excel"
                                    label={file.file_name}
                                    variant="active"
                                    fileID={file.id}
                                    handleDelete={async () => {
                                          const deletePromise = deleteUserCSVFile(file.id);
                                            toaster.promise(deletePromise, {
                                                loading: { title: `Deleting ${file.file_name}...` },
                                                success: { title: "Deleted!", description: `${file.file_name} removed` },
                                                error: { title: "Delete failed" },
                                            });

                                            deletePromise.then(() => {
                                                setFiles(prev => prev.filter(f => f.id !== file.id)); // automatically updates UI
                                            });
                                       
                                    }}
                                />
                                ))}
                                </HStack>
                                
                            ):
                            (
                                <Text fontWeight="thin">No data sources yet, start uploading some!</Text>
                            )}
                        </VStack>
                        <VStack alignItems="start">
                            <Text fontWeight="medium">Custom File</Text>
                            <DataSourceCard imageSrc="excel" label="Excel File"/>
                        </VStack>
                        <VStack alignItems="start">
                            <Text fontWeight="medium">ERP Systems</Text>
                            <HStack wrap="wrap" gap={5}>
                                <DataSourceCard imageSrc="sap_ecc" label="SAP ERP Central Component " variant='locked'/>
                                <DataSourceCard imageSrc="dynamics" label="Dynamics 365" variant='locked'/>
                                <DataSourceCard imageSrc="netsuite" label="Netsuite" variant='locked'/>
                                <DataSourceCard imageSrc="workday" label="Workday" variant='locked'/> 
                            </HStack>
                        </VStack>
                        <VStack alignItems="start">
                            <Text fontWeight="medium">CRM & Ticketing Systems</Text>
                            <HStack wrap="wrap" gap={5}>
                                <DataSourceCard imageSrc="sap_crm" label="SAP CRM" variant='locked'/>
                                <DataSourceCard imageSrc="siebel" label="Oracle Siebel" variant='locked'/>
                                <DataSourceCard imageSrc="salesforce" label="Salesforce" variant='locked'/>
                                <DataSourceCard imageSrc="servicenow" label="ServiceNow" variant='locked'/> 
                            </HStack>
                        </VStack>
                        <VStack alignItems="start">
                            <Text fontWeight="medium">Databases & Data Warehouses</Text>
                            <HStack wrap="wrap" gap={5}>
                                <DataSourceCard imageSrc="postgresql" label="PostgreSQL" variant='locked'/>
                                <DataSourceCard imageSrc="mysql" label="MySQL" variant='locked'/>
                                <DataSourceCard imageSrc="snowflake" label="Snowflake" variant='locked'/>
                            </HStack>
                        </VStack>
                    </Card.Body>
                <Card.Footer />
            </Card.Root>
        </Box>
        </>
    );
};

export default DataSources;