import { Link, useNavigate} from "react-router-dom";
import {
  Database,
  GitBranch,
  Brain,
  BarChart3,
  Upload,
  Play,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Heading,
  HStack,
  Group,
  Text,
  Image,
  Box,
  Button,
  FileUpload,
  VStack,
  Icon,
  Dialog,
  Portal,
  CloseButton,
} from "@chakra-ui/react";
import { DataLoading } from "../Auth_Pages/Components/DataLoading";
import { uploadCSV } from "../../../api/datasource";
import { isAuthenticated } from "../../../api/auth";
import { Toaster, toaster } from "../../ui/toaster";
import datasourcespreview from "/images/datasourcespreview.png?url";
import processmappingpreview from "/images/processmappingpreview.png?url";
import dashboardpreview from "/images/dashboardpreview.png?url";
import aiinsightspreview from "/images/aiinsightspreview.png?url";
import bannerbg from "/images/bannerbg.png?url";


export function HowItWorks() {
  const [files, setFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [showAuthDialog, setShowAuthDialog] = useState(false);
  const navigate = useNavigate();
  const handleUpload = async () => {
    if (files.length === 0) {
      toaster.create({
        title: "No files selected",
        description: "Please select files first.",
        type: "error",
      });
      return;
    }
    if (!isAuthenticated()) {
      setShowAuthDialog(true);
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
        navigate("/data-sources");
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

  const steps = [
    {
      icon: Database,
      number: "1",
      title: "Connect Data",
      description:
        "Link your existing systems, databases, or upload files. No data cleaning required.",
      details: "Support for SQL, CSV, Excel, ERP systems, and more.",
      image: datasourcespreview,
    },
    {
      icon: GitBranch,
      number: "2",
      title: "Automated Mapping",
      description:
        "Our AI automatically discovers and maps your business processes.",
      details:
        "Machine learning identifies patterns, relationships, and workflows.",
      image: processmappingpreview,
    },
    {
      icon: Brain,
      number: "3",
      title: "AI Insight Layer",
      description:
        "Advanced algorithms detect bottlenecks, anomalies, and optimization opportunities.",
      details: "Real-time analysis with predictive capabilities.",
      image: aiinsightspreview,
    },
    {
      icon: BarChart3,
      number: "4",
      title: "Impact Dashboard",
      description:
        "Visualize insights through interactive dashboards and get actionable recommendations.",
      details: "Custom reports, alerts, and continuous monitoring.",
      image: dashboardpreview,
    },
  ];

  return (
    <div>
      <Toaster />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-blue-50/30 to-emerald-50/30 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <VStack
            align="center"
            gap={2}
            mb={12}
            p={{ base: 4, sm: 6, lg: 8 }}
            textAlign={"center"}
          >
            <Heading
              size="2xl"
              color="black"
              fontWeight="black"
              whiteSpace="pre-line"
            >
              {"From Raw Data to Real-Time Intelligence."}
            </Heading>
            <Text color={"gray.600"}>
              Tessely transforms complex data into clear, actionable insights
              through intelligent automation.
            </Text>
          </VStack>
        </motion.div>
      </section>

      {/* Four-Step Diagram */}
      <Box width="100%" p={12}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-4"
                    style={{
                      background:
                        "linear-gradient(to bottom, #003F72, #C6EBE7)",
                    }}
                  >
                    <step.icon className="w-8 h-8" />
                  </div>
                  <VStack alignItems={"start"}>
                    <HStack>
                      <Text
                        bgColor="brand.primary"
                        className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-medium"
                      >
                        {step.number}
                      </Text>
                      <Text>{step.title}</Text>
                    </HStack>
                    <Text color={"brand.primary"}>{step.description}</Text>
                    <Text color={"gray.500"} fontSize={"sm"}>
                      {step.details}
                    </Text>
                  </VStack>
                </div>
                <div className="flex-1">
                  <Image
                    src={step.image}
                    alt="How it works Preview"
                    borderRadius={"xl"}
                    borderWidth={"1px"}
                    shadow={"sm"}
                    borderColor={"brand.border"}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Box>

      {/* From Chaos to Clarity - Video Section */}

      <Box p={12} width={"100%"}>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Text fontSize="xl" color="gray.900" mb={4} fontWeight="bold">
              From Chaos to Clarity
            </Text>
            <Text color="gray.600" maxW="2xl" mx="auto" whiteSpace="pre-line">
              {
                "Watch how Tessely transforms complex processes into clear,\nactionable insights in minutes."
              }
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-3xl overflow-hidden max-w-5xl mx-auto group cursor-pointer hover:shadow-2xl transition-all"
            style={{
              background: "linear-gradient(to bottom right, #f3f4f6, #e5e7eb)",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
              >
                <Play
                  className="w-10 h-10 ml-1"
                  style={{ color: "#003f72" }}
                  fill="#003f72"
                />
              </div>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 h-1/3"
              style={{
                background:
                  "linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent)",
              }}
            />
          </motion.div>
        </div>
      </Box>

      {/* Interactive Preview */}
      <Box width="100%" p={12}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Text fontSize="xl" color="gray.900" mb={4} fontWeight="bold">
            See It In Action
          </Text>
          <Text color="gray.600" maxW="2xl" mx="auto" whiteSpace="pre-line">
            {"Upload sample data and preview how Tessely maps your process"}
          </Text>
        </motion.div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <VStack align="center" gap={6} p={10}>
            <FileUpload.Root
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
                  <Box>Upload Sample Data</Box>
                  <Box color="fg.muted">
                    Drop a CSV or Excel file to see instant process mapping
                  </Box>
                  <Box color="brand.primary">.csv, .xlsx, .xls</Box>
                </FileUpload.DropzoneContent>
              </FileUpload.Dropzone>
              <FileUpload.List />
            </FileUpload.Root>
            <Group alignItems="end">
              <Button size="md" onClick={handleUpload}>Upload</Button>
              <Dialog.Root open={isUploading} placement={"center"} motionPreset="slide-in-bottom" onOpenChange={(e) => !e.open && setIsUploading(false)}>
                <Portal>
                  <Dialog.Backdrop />
                  <Dialog.Positioner>
                    <Dialog.Content>
                      <Dialog.Header>
                        <Dialog.Title>Uploading Data</Dialog.Title>
                      </Dialog.Header>
                      <DataLoading />
                    </Dialog.Content>
                  </Dialog.Positioner>
                </Portal>
              </Dialog.Root>
              <Dialog.Root open={showAuthDialog} onOpenChange={(e) => setShowAuthDialog(e.open)} placement={"center"} motionPreset="slide-in-bottom">
                <Portal>
                  <Dialog.Backdrop />
                  <Dialog.Positioner>
                    <Dialog.Content>
                      <Dialog.Header>
                        <Dialog.Title>Account Required</Dialog.Title>
                        <Dialog.CloseTrigger asChild>
                          <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                      </Dialog.Header>
                      <Dialog.Body>
                        <Text color="gray.600">
                          You need to be logged in to upload files. Please sign up or log in to continue.
                        </Text>
                      </Dialog.Body>
                      <Dialog.Footer>
                        <HStack gap={3}>
                          <Link to="/login">
                            <Button variant="outline">Log In</Button>
                          </Link>
                          <Link to="/signup">
                            <Button>Sign Up</Button>
                          </Link>
                        </HStack>
                      </Dialog.Footer>
                    </Dialog.Content>
                  </Dialog.Positioner>
                </Portal>
              </Dialog.Root>
            </Group>
          </VStack>
        </div>
      </Box>

      {/* CTA Section */}

      <Box
        w="full"
        minH="screen"
        bgAttachment="fixed"
        bgImage={`url(${bannerbg})`}
        bgSize="100% 100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={16}
        textAlign={"center"}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Text fontSize="xl" color="white" mb={4}>
            Ready to Get Started?
          </Text>
          <Group gap={4}>
            <Link to="/solutions">
              <Button variant={"white"} size="lg">
                Explore Solutions
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant={"white"} size="lg">
                Free Trial
              </Button>
            </Link>
          </Group>
        </motion.div>
      </Box>
    </div>
  );
}
