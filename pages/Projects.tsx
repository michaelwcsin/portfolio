import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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

interface ProjectInfo {
  selectedFile: string;
}

const ProjectInfo: React.FC<ProjectInfo> = ({ selectedFile }) => {
  const renderContent = () => {
    switch (selectedFile) {
      // Complete work
      case "3":
        return (
          <p>
            Prospect was developed for potential home buyers & sellers in the
            City of Edmonton. It showcases how data can be used in combination
            with visualization to allow users to be able to make a well informed
            decisions.
            <br />
            <br />
            Included was data sourced from Edmonton&apos;s Open Data Portal such
            as housing costs, crime stats, overall rating and walkability - how
            accessible the neighborhood is to certain services was also
            considered.
            <br />
            <br />
            Using this information, trends were determined and linear regression
            was utilized to evaluate future housing prices as well. For more
            information please take a look at the{" "}
            <a
              href="prospect_document_sm.pdf"
              rel="noreferrer noopener"
              target="_blank"
              className="text-blue-600 underline"
            >
              documentation
            </a>
            .
          </p>
        );
      case "4":
        return <p>I hope you enjoyed the demo!</p>;
      case "6":
        return (
          <p>
            MINK is a full stack web application using MERN technology stack{" "}
            <a
              href="MINK_document.pdf"
              className="text-blue-600 underline"
              rel="noreferrer noopener"
              target="_blank"
            >
              documentation
            </a>{" "}
            can be found here.
          </p>
        );
      case "7":
        return <p>I hope you enjoyed the demo!</p>;
      case "9":
        return (
          <p>
            One of the very first full stack web application that I was able to
            complete using MERN stack. This web application highlighted the
            implementing a database in MongoDB, building a connection from the
            backend to the frontend, and using React hooks.
          </p>
        );
      case "10":
        return <p>I hope you enjoyed the demo!</p>;
      // Works in progress
      case "21": // mink v2
        return (
          <p>
            Developing new features for previous project mink_v1; some new ones
            to be implemented in version 2.0 are:
            <br />
            <br />
            <ul>
              <li>1. Authentication - OAuth2</li>
              <li>2. Implementing payment methods using Stripe</li>
              <li>3. Updating UI/UX components</li>
            </ul>
          </p>
        );
      case "22": // kaggle
        return (
          <p>
            Currently working slowly through Kaggle&apos;s free learning modules
            which also gives certification. This is to not only review, but also
            learn more about data analysis and machine learning.
          </p>
        );
      case "23": // review
        return (
          <p>
            Reviewing previous course materials, mostly a refresh on data
            structures and algorithms.
          </p>
        );
      default:
        return <p>Coming soon!</p>;
    }
  };
  return <div>{renderContent()}</div>;
};

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
          currently under construction. If you&apos;d like to know more or would
          like a live demo. Please contact me or you may check out my{" "}
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

      <div className="flex md:h-[70vh] w-[90vw] md:w-[80vw] rounded-2xl overflow-hidden border-[1px] border-gray-300 shadow-2xl">
        <div className="border-r-[1px] w-[25vw] md:w-[20vw] border-gray-300">
          <div className="flex w-[60%] md:w-full h-[6vh] items-center pl-[10px] md:pl-[20px]">
            <Image
              src="finderControls.svg"
              width={50}
              height={50}
              alt="controls"
            />
          </div>
          <div className="md:pl-[10px] w-full text-ellipsis overflow-y-auto">
            <Tree
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
                    <p>prospect.txt</p>
                  </File>
                  <File
                    fileIcon={<FileVideo size="16" />}
                    value="4"
                    onFileSelect={handleFileSelect}
                  >
                    <Dialog>
                      <DialogTrigger>prospect_demo.mp4</DialogTrigger>
                      <DialogContent className="">
                        <video
                          className="rounded-lg"
                          src="prospect.mp4"
                          controls
                          autoPlay
                        />
                      </DialogContent>
                    </Dialog>
                  </File>
                </Folder>
                <Folder value="5" element="mink_v1">
                  <File
                    fileIcon={<ScrollText size="16" />}
                    value="6"
                    onFileSelect={handleFileSelect}
                  >
                    <p>mink.txt</p>
                  </File>
                  <File
                    fileIcon={<FileVideo size="16" />}
                    value="7"
                    onFileSelect={handleFileSelect}
                  >
                    <Dialog>
                      <DialogTrigger>mink_demo.mp4</DialogTrigger>
                      <DialogContent className="">
                        <video
                          className="rounded-lg"
                          src="mink.mp4"
                          controls
                          autoPlay
                        />
                      </DialogContent>
                    </Dialog>
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
                    <Dialog>
                      <DialogTrigger>registration_demo.mp4</DialogTrigger>
                      <DialogContent className="">
                        <video
                          className="rounded-lg"
                          src="course_registration.mp4"
                          controls
                          autoPlay
                        />
                      </DialogContent>
                    </Dialog>
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
                  kaggled
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
          <div className="h-full bg-white p-[12px] text-[1.5vh] md:text-[2vh]">
            <ProjectInfo selectedFile={selectedFile} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
