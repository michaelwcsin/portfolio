import { File, Folder, Tree } from "@/components/ui/file-tree";
import { projects } from "@/data/data-storage";
import { Database, FileVideo, Glasses, ScrollText } from "lucide-react";
import React from "react";

const Projects = () => {
  return (
    <div className="flex h-screen w-full items-center">
      <div className="flex w-full items-center gap-[10vw] m-[7vw]">
        {/* Completed projects */}
        <Tree
          className="overflow-hidden w-full h-[70vh]"
          initialSelectedId="1"
          initialExpandedItems={["1", "2", "3"]}
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
            <Folder value="5" element="course_registration">
              <File value="7">
                <p>README.md</p>
              </File>
              <File fileIcon={<FileVideo size="16" />} value="8">
                <p>course_registration_demo.mp4</p>
              </File>
            </Folder>
            <Folder value="5" element="shift_sage">
              <File value="7">
                <p>README.md</p>
              </File>
              <File fileIcon={<FileVideo size="16" />} value="8">
                <p>shift_sage_demo.mp4</p>
              </File>
            </Folder>
            <Folder value="5" element="data_warehouse">
              <File value="7">
                <p>README.md</p>
              </File>
              <File fileIcon={<FileVideo size="16" />} value="8">
                <p>data_warehouse_demo.mp4</p>
              </File>
            </Folder>
            <Folder value="5" element="blockbuster">
              <File value="7">
                <p>README.md</p>
              </File>
              <File fileIcon={<FileVideo size="16" />} value="8">
                <p>blockbuster.mp4</p>
              </File>
            </Folder>
          </Folder>

          <Folder element="works_in_progress" value="10">
            <File value="11">mink_v2</File>
            <File fileIcon={<Database size="16" />} value="11">
              kaggle
            </File>
            <File value="11">portfolio</File>
            <File fileIcon={<Glasses size="16" />} value="11">
              review
            </File>
          </Folder>
        </Tree>
      </div>
    </div>
  );
};

export default Projects;
