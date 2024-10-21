import { File, Folder, Tree } from "@/components/ui/file-tree";
import { projects } from "@/data/data-storage";
import {
  Database,
  FileVideo,
  Glasses,
  MessageSquareText,
  ScrollText,
} from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Projects = () => {
  const [selectedFile, setSelectedFile] = useState("22");

  const handleFileSelect = (fileValue: string) => {
    console.log(`Selected value: ${fileValue}`);
    setSelectedFile(fileValue);
  };

  useEffect(() => {
    console.log("Current selectedFile state:", selectedFile);
  }, [selectedFile]);

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <div className="w-[80vw]">
        <p className="font-bold md:block text-[2.5vw] md:text-[1.25vw] w-full text-center mb-10">
          Hello, this portfolio, more importantly this section of projects is
          currently under construction as of Oct 20, 2024. If you&apos;d like to
          know more or would like a live demo. Please contact me or you may
          check out my{" "}
          <span>
            <a
              href="https://mwcsinold.vercel.app/"
              rel="noreferrer noopener"
              target="_blank"
              className="text-blue-500"
            >
              old portfolio
            </a>
          </span>{" "}
          for more info.
        </p>
      </div>

      <div className="flex md:h-[70vh] w-[80vw] rounded-2xl overflow-hidden border-[1px] border-gray-300 shadow-2xl">
        <div className="border-r-[1px] w-[25vw] md:w-[20vw] border-gray-300">
          <div className="flex w-[60%] md:w-full h-[6vh] items-center pl-[10px] md:pl-[20px]">
            <Image
              src="finderControls.svg"
              width={50}
              height={50}
              alt="controls"
            />
          </div>
          <div className="md:pl-[10px] w-full text-ellipsis h-full">
            <Tree
              className="overflow-y-auto overflow-x-auto"
              initialSelectedId="22"
              initialExpandedItems={["1", "2", "20"]}
              elements={projects}
            >
              <Folder element="completed_projects" value="1">
                <Folder value="2" element="prospect">
                  <File
                    fileIcon={<ScrollText size="16" />}
                    value="3"
                    onFileSelect={handleFileSelect}
                  >
                    <p>prospect_doc.pdf</p>
                  </File>
                  <File
                    fileIcon={<FileVideo size="16" />}
                    value="4"
                    onFileSelect={handleFileSelect}
                  >
                    <p>prospect_demo.mp4</p>
                  </File>
                </Folder>
                <Folder value="5" element="mink_v1">
                  <File
                    fileIcon={<ScrollText size="16" />}
                    value="6"
                    onFileSelect={handleFileSelect}
                  >
                    <p>mink_doc.pdf</p>
                  </File>
                  <File
                    fileIcon={<FileVideo size="16" />}
                    value="7"
                    onFileSelect={handleFileSelect}
                  >
                    <p>mink_v1_demo.mp4</p>
                  </File>
                </Folder>
                <Folder value="8" element="course_registration">
                  <File value="9" onFileSelect={handleFileSelect}>
                    <p>README.md</p>
                  </File>
                  <File
                    fileIcon={<FileVideo size="16" />}
                    value="10"
                    onFileSelect={handleFileSelect}
                  >
                    <p>registration_demo.mp4</p>
                  </File>
                </Folder>
                <Folder value="11" element="shift_sage">
                  <File value="12" onFileSelect={handleFileSelect}>
                    <p>README.md</p>
                  </File>
                  <File
                    fileIcon={<FileVideo size="16" />}
                    value="13"
                    onFileSelect={handleFileSelect}
                  >
                    <p>shift_sage_demo.mp4</p>
                  </File>
                </Folder>
                <Folder value="14" element="data_warehouse">
                  <File value="15" onFileSelect={handleFileSelect}>
                    <p>README.md</p>
                  </File>
                  <File
                    fileIcon={<FileVideo size="16" />}
                    value="16"
                    onFileSelect={handleFileSelect}
                  >
                    <p>warehouse_demo.mp4</p>
                  </File>
                </Folder>
                <Folder value="17" element="blockbuster">
                  <File value="18" onFileSelect={handleFileSelect}>
                    <p>README.md</p>
                  </File>
                  <File
                    fileIcon={<FileVideo size="16" />}
                    value="19"
                    onFileSelect={handleFileSelect}
                  >
                    <p>blockbuster.mp4</p>
                  </File>
                </Folder>
              </Folder>

              <Folder element="works_in_progress" value="20">
                <File
                  fileIcon={<MessageSquareText size="16" />}
                  value="21"
                  onFileSelect={handleFileSelect}
                >
                  mink_v2
                </File>
                <File
                  fileIcon={<Database size="16" />}
                  value="22"
                  onFileSelect={handleFileSelect}
                >
                  kaggle
                </File>
                <File
                  fileIcon={<Glasses size="16" />}
                  value="23"
                  onFileSelect={handleFileSelect}
                >
                  review
                </File>
              </Folder>
            </Tree>
          </div>
        </div>
        <div className="w-full">
          <div className="font-semibold flex w-full text-[1.5vh] h-[6vh] items-center pl-[12px] bg-white border-b-[1px] border-gray-300">
            Projects Drive
          </div>
          <div className="h-full bg-white pl-[12px] pt-[12px] text-[1.5vh] md:text-[2vh]">
            {selectedFile === "21" && (
              <p>
                Developing new features for previous project mink_v1; some new
                ones to be implemented in version 2.0 are:
                <ul>
                  <li>1. OAuth2</li>
                  <li>2. Updating UI/UX components</li>
                </ul>
              </p>
            )}
            {selectedFile === "22" && (
              <p>
                Working slowly through Kaggle&apos;s learning modules on data
                analysis and machine learning to make sure that the material
                remains in my brain.
              </p>
            )}
            {selectedFile === "23" && (
              <p>
                Reviewing previous course materials, mostly a refresh on data
                structures and algorithms.
              </p>
            )}
            {selectedFile !== "21" &&
              selectedFile !== "22" &&
              selectedFile !== "23" && <p>Coming soon!</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
