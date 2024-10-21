import { File, Folder, Tree } from "@/components/ui/file-tree";
import { projects } from "@/data/data-storage";
import {
  Database,
  FileVideo,
  Glasses,
  MessageSquareText,
  ScrollText,
} from "lucide-react";
import React from "react";

const Projects = () => {
  return (
    <div className="flex h-screen w-full items-center">
      <div className="flex-col w-full md:w-[80vw] items-center gap-[10vw] m-[7vw]">
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
        <Tree
          className="overflow-hidden w-full h-[70vh]"
          initialSelectedId="21"
          initialExpandedItems={["1", "20"]}
          elements={projects}
        >
          <Folder element="completed_projects" value="1">
            <Folder value="2" element="prospect">
              <File fileIcon={<ScrollText size="16" />} value="3">
                <p>prospect_doc.pdf</p>
              </File>
              <File fileIcon={<FileVideo size="16" />} value="4">
                <p>prospect_demo.mp4</p>
              </File>
            </Folder>
            <Folder value="5" element="mink_v1">
              <File fileIcon={<ScrollText size="16" />} value="6">
                <p>mink_doc.pdf</p>
              </File>
              <File fileIcon={<FileVideo size="16" />} value="7">
                <p>mink_v1_demo.mp4</p>
              </File>
            </Folder>
            <Folder value="8" element="course_registration">
              <File value="9">
                <p>README.md</p>
              </File>
              <File fileIcon={<FileVideo size="16" />} value="10">
                <p>course_registration_demo.mp4</p>
              </File>
            </Folder>
            <Folder value="11" element="shift_sage">
              <File value="12">
                <p>README.md</p>
              </File>
              <File fileIcon={<FileVideo size="16" />} value="13">
                <p>shift_sage_demo.mp4</p>
              </File>
            </Folder>
            <Folder value="14" element="data_warehouse">
              <File value="15">
                <p>README.md</p>
              </File>
              <File fileIcon={<FileVideo size="16" />} value="16">
                <p>data_warehouse_demo.mp4</p>
              </File>
            </Folder>
            <Folder value="17" element="blockbuster">
              <File value="18">
                <p>README.md</p>
              </File>
              <File fileIcon={<FileVideo size="16" />} value="19">
                <p>blockbuster.mp4</p>
              </File>
            </Folder>
          </Folder>

          <Folder element="works_in_progress" value="20">
            <File fileIcon={<MessageSquareText size="16" />} value="21">
              mink_v2
            </File>
            <File fileIcon={<Database size="16" />} value="22">
              kaggle
            </File>
            <File fileIcon={<Glasses size="16" />} value="23">
              review
            </File>
          </Folder>
        </Tree>
      </div>
    </div>
  );
};

export default Projects;
