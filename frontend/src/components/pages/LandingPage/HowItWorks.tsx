import { Link } from "react-router-dom";
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
import { Group, Text, Image, Box, Button, FileUpload,VStack, Icon} from "@chakra-ui/react";
import datasourcespreview from "/images/datasourcespreview.png?url";
import processmappingpreview from "/images/processmappingpreview.png?url";
import dashboardpreview from "/images/dashboardpreview.png?url";
import aiinsightspreview from "/images/aiinsightspreview.png?url";
import heroBg from "/images/bg2.png?url";
import { UserCSVFile } from '../../../types';

export function HowItWorks() {
  const [files, setFiles]=useState<File[]>([]);
  

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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-blue-50/30 to-emerald-50/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-gray-900 mb-6" style={{ fontWeight: "bold" }}>
              From Raw Data to Real-Time Intelligence.
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Tessely transforms complex data into clear, actionable insights
              through intelligent automation.
            </p>
          </motion.div>
        </div>
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
                  <div className="flex items-center gap-2 mb-3">
                    <Text
                      bgColor="brand.primary"
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-medium"
                    >
                      {step.number}
                    </Text>
                    <h2 className="text-gray-900">{step.title}</h2>
                  </div>
                  <p
                    className="text-gray-600 mb-2"
                    style={{ color: "second_blue" }}
                  >
                    {step.description}
                  </p>
                  <p className="text-sm text-gray-500">{step.details}</p>
                </div>
                <div className="flex-1">
                  <Image 
                    src={step.image}
                    alt="Data Sources Preview"
                    className="rounded-2xl w-full h-auto"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Box>

      {/* Video Section */}
      <Box width="100%" p={12}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">From Chaos to Clarity</h2>
            <p className="text-gray-600">
              Watch how Tessely transforms complex data into actionable insights
            </p>
          </div>

          <div className="relative aspect-video bg-gradient-to-br from-[#0047AB]/10 to-[#00D9B5]/10 rounded-2xl overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Play className="w-8 h-8 text-[#0047AB] ml-1" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </Box>

      {/* Interactive Preview */}
      <Box width="100%" p={12}>
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">See It In Action</h2>
            <p className="text-gray-600">
              Upload sample data and preview how Tessely maps your process
            </p>
          </div>
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
                          <Box color="fg.muted">Drop a CSV or Excel file to see instant process mapping</Box>
                          <Box color="brand.primary">.csv, .xlsx, .xls</Box>
                        </FileUpload.DropzoneContent>
                      </FileUpload.Dropzone>
                      <FileUpload.List />
                    </FileUpload.Root>
                    <Group alignItems="end">
                      <Button size="xl">Upload</Button>
                    </Group>
                  </VStack>
          </div>
  
        
      </Box>

      {/* CTA Section */}
      <Box
          w="full"
          minH="screen"
          bgAttachment="fixed"
          bgImage={`url(${heroBg})`}
          bgSize="cover"
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
            <p className="text-white mb-6">
              Ready to Get Started?
            </p>
            <Group>
                      <Link to="/solutions">
              <Button variant={"white"}>Explore Solutions</Button>
            </Link>
            <Link to="/contact">
              <Button variant={"white"}>Free Trial</Button>
            </Link>
            </Group>
            
          </motion.div>
        </Box>
      
    </div>
  );
}
