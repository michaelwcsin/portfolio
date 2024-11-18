import { Badge } from "@/components/ui/badge";
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
      case "3": // Prospect
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
            <br />
            <span>
              <Badge>Excel</Badge>
              <Badge>R</Badge>
              <Badge>MySQL</Badge>
              <Badge>Python</Badge>
              <Badge>Django</Badge>
              <Badge>JavaScript</Badge>
              <Badge>React</Badge>
            </span>
          </p>
        );
      case "4":
        return (
          <p>
            I hope you enjoy the{" "}
            <Dialog>
              <DialogTrigger className="text-blue-500 underline">
                demo
              </DialogTrigger>
              <DialogContent className="">
                <video
                  className="rounded-lg"
                  src="prospect.mp4"
                  controls
                  autoPlay
                />
              </DialogContent>
            </Dialog>
            !
          </p>
        );
      case "6": // MINK
        return (
          <p>
            MINK is a full stack web application using MERN stack,{" "}
            <a
              href="MINK_document.pdf"
              className="text-blue-600 underline"
              rel="noreferrer noopener"
              target="_blank"
            >
              documentation
            </a>{" "}
            can be found here. Using Node.js and Express.js to build REST APIs,
            the following implemented features are as follows:
            <br />
            <br />
            Current features for customers include: login, choosing a
            restaurant, adding menu items to card, and checking out.
            <br />
            <br />
            For managers: login, changing/creating menu items and editing their
            availability and price, and accepting order requests.
            <br />
            <span>
              <Badge>MongoDB</Badge>
              <Badge>Express.js</Badge>
              <Badge>React</Badge>
              <Badge>Node.js</Badge>
            </span>
          </p>
        );
      case "7":
        return (
          <p>
            I hope you enjoy the{" "}
            <Dialog>
              <DialogTrigger className="text-blue-500 underline">
                demo
              </DialogTrigger>
              <DialogContent className="">
                <video
                  className="rounded-lg"
                  src="mink.mp4"
                  controls
                  autoPlay
                />
              </DialogContent>
            </Dialog>
            !
          </p>
        );
      case "9": // Course registration
        return (
          <p>
            One of the very first full stack web application that I was able to
            complete using MERN stack. This web application highlighted the
            implementing a database in MongoDB, building a connection from the
            backend to the frontend using Node and Express, and using React
            hooks for the functional components.
            <br />
            <span>
              <Badge>MongoDB</Badge>
              <Badge>Express.js</Badge>
              <Badge>React</Badge>
              <Badge>Node.js</Badge>
            </span>
          </p>
        );
      case "10":
        return (
          <p>
            I hope you enjoy the{" "}
            <Dialog>
              <DialogTrigger className="text-blue-500 underline">
                demo
              </DialogTrigger>
              <DialogContent className="">
                <video
                  className="rounded-lg"
                  src="course_registration.mp4"
                  controls
                  autoPlay
                />
              </DialogContent>
            </Dialog>
            !
          </p>
        );
      case "12":
        return (
          <p>
            An android application built using Kotlin. This application was
            built to address the problem the hours managers spend on shift
            scheduling for their employees.
            <br />
            <br />
            To solve this problem, our team developed ShiftSage in order to
            automate this process which allows managers to invest their time
            more effectively towards other tasks.
            <br />
            <span>
              <Badge>Kotlin</Badge>
              <Badge>SQLite</Badge>
              <Badge>Android Studio</Badge>
            </span>
          </p>
        );
      case "18": // Blockbuster
        return (
          <p>
            This desktop application mimics the operations of what a blockbuster
            system may be like.
            <br />
            <br />
            Features included login verification, search functionalities within
            the movie database, creating or editing customers, as well as adding
            new entries for the movie database within the employee login screen.
            <br />
            <span>
              <Badge>MS SQL</Badge>
              <Badge>C#</Badge>
              <Badge>Visual Studio</Badge>
            </span>
          </p>
        );
      case "19":
        return (
          <p>
            I hope you enjoy the{" "}
            <Dialog>
              <DialogTrigger className="text-blue-500 underline">
                demo
              </DialogTrigger>
              <DialogContent className="">
                <video
                  className="rounded-lg"
                  src="blockbuster.mp4"
                  controls
                  autoPlay
                />
              </DialogContent>
            </Dialog>
            !
          </p>
        );

      // Works in progress
      case "21": // bargainquest
        return (
          <p>
            Though I don&apos;t use Amazon services a lot, I do recognize the
            value and ease it brings for many users. With the cost of living
            constantly rising, I wanted to create a solution where people can
            keep track of the price of the items they wish to buy.
            <br />
            <br />
            The idea of this application is to scrape Amazon&apos;s website to
            get the price values on a daily basis. Which in turn can transform
            this data into a visually appealing graph for users to identify
            trends or a timing in which they can save money.
            <br />
            <br />
            In addition, this project will also keep the history of pricing data
            for the particular item in order to track and update the average
            price, lowest price, and highest price. I believe this would further
            help users with better decision-making when evaluating purchasing
            windows.
          </p>
        );
      case "22": // kaggle
        return (
          <p>
            Currently working slowly through Kaggle&apos;s free learning modules
            which also gives certification. This is not only to review, but also
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
  const [selectedFile, setSelectedFile] = useState("21");

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
              initialSelectedId="21"
              initialExpandedItems={["1", "2", "5", "8", "20"]}
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
                    <Dialog>
                      <DialogTrigger>blockbuster.mp4</DialogTrigger>
                      <DialogContent className="">
                        <video
                          className="rounded-lg"
                          src="blockbuster.mp4"
                          controls
                          autoPlay
                        />
                      </DialogContent>
                    </Dialog>
                  </File>
                </Folder>
              </Folder>

              <Folder element="works_in_progress" value="20">
                <File
                  fileIcon={<MessageSquareText size="16" />}
                  value="21"
                  onFileSelect={handleFileSelect}
                >
                  bargainquest
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
          <div className="h-full bg-white p-[12px] text-[1.5vh] md:text-[2vh]">
            <ProjectInfo selectedFile={selectedFile} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
