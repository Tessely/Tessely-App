import { Box, Flex, Text, Heading, VStack } from '@chakra-ui/react';
import MdLockIcon from '../../../assets/icons/DataSources/MdLock.svg?react';
import ExcelIcon from '../../../assets/icons/DataSources/ExcelIcon.svg?react';
import SAPECCIcon from '../../../assets/icons/DataSources/SAP_ECC.svg?react';
import SAPCRMIcon from '../../../assets/icons/DataSources/SAP_CRM.svg?react';
import Dynamics365Icon from '../../../assets/icons/DataSources/Dynamics365.svg?react';
import NetSuiteIcon from '../../../assets/icons/DataSources/NetSuite.svg?react';
import WorkdayIcon from '../../../assets/icons/DataSources/Workday.svg?react';
import OracleIcon from '../../../assets/icons/DataSources/Oracle.svg?react';
import SalesforceIcon from '../../../assets/icons/DataSources/Salesforce.svg?react';
import ServicenowIcon from '../../../assets/icons/DataSources/Servicenow.svg?react';
import PostGreSQLIcon from '../../../assets/icons/DataSources/PostgreSQL.svg?react';
import MySQLIcon from '../../../assets/icons/DataSources/MySQL.svg?react';
import SnowflakeIcon from '../../../assets/icons/DataSources/Snowflake.svg?react';

// Data source card component
interface DataSourceCardProps {
  name: string;
  LogoIcon: React.FC<React.SVGProps<SVGSVGElement>>;
  isLocked?: boolean;
  isActive?: boolean;
}

function DataSourceCard({ name, LogoIcon, isLocked = false, isActive = false }: DataSourceCardProps) {
  const backgroundColor = isActive ? '#E2E8F0' : isLocked ? '#E6E6E6' : '#FFFFFF';
  const borderColor = isActive ? 'green.500' : 'gray.200';

  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={4}
      borderRadius="lg"
      borderWidth="2px"
      borderColor={borderColor}
      cursor="pointer"
      transition="all 0.2s"
      _hover={{ shadow: 'md' }}
      w="150px"
      h="150px"
      bg={backgroundColor}
    >
      {isLocked && (
        <Flex
          position="absolute"
          inset={0}
          borderRadius="lg"
          alignItems="center"
          justifyContent="center"
        >
          <Box as={MdLockIcon} w={10} h={10} />
        </Flex>
      )}
      <Box as={LogoIcon} w="60px" h="60px" mb={2} />
      <Text fontSize="xs" textAlign="center" color="gray.600" lineHeight="tight">
        {name}
      </Text>
    </Box>
  );
}

// Section component
interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <VStack align="flex-start" gap={3} mb={8}>
      <Text fontSize="sm" fontWeight="medium" color="gray.500">
        {title}
      </Text>
      <Flex flexWrap="wrap" gap={3}>
        {children}
      </Flex>
    </VStack>
  );
}

export function DataSources() {
  return (
    <Box minH="100vh" bg="white">
      <Box p={6} maxW="1200px">
        {/* Header */}
        <Heading as="h1" size="lg" color="gray.900" mb={6}>
          Data Sources
        </Heading>

        {/* Current */}
        <Section title="Current">
          <DataSourceCard name="XLSX/CSV File" LogoIcon={ExcelIcon} isActive />
        </Section>

        {/* Custom File */}
        <Section title="Custom File">
          <DataSourceCard name="XLSX/CSV File" LogoIcon={ExcelIcon} />
        </Section>

        {/* ERP Systems */}
        <Section title="ERP Systems">
          <DataSourceCard name="SAP ERP Central Component" LogoIcon={SAPECCIcon} isLocked />
          <DataSourceCard name="Dynamics 365" LogoIcon={Dynamics365Icon} isLocked />
          <DataSourceCard name="Netsuite" LogoIcon={NetSuiteIcon} isLocked />
          <DataSourceCard name="Workday" LogoIcon={WorkdayIcon} isLocked />
        </Section>

        {/* CRM & Ticketing Systems */}
        <Section title="CRM & Ticketing Systems">
          <DataSourceCard name="SAP CRM" LogoIcon={SAPCRMIcon} isLocked />
          <DataSourceCard name="Oracle Siebel" LogoIcon={OracleIcon} isLocked />
          <DataSourceCard name="Salesforce" LogoIcon={SalesforceIcon} isLocked />
          <DataSourceCard name="ServiceNow" LogoIcon={ServicenowIcon} isLocked />
        </Section>

        {/* Databases & Data Warehouses */}
        <Section title="Databases & Data Warehouses">
          <DataSourceCard name="PostgreSQL" LogoIcon={PostGreSQLIcon} isLocked />
          <DataSourceCard name="MySQL" LogoIcon={MySQLIcon} isLocked />
          <DataSourceCard name="Snowflake" LogoIcon={SnowflakeIcon} isLocked />
        </Section>
      </Box>
    </Box>
  );
}
