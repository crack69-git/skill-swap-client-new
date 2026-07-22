import BrowseTask from "@/Components/MainComponents/AllSection/BrowseTask";
import PaginationComponent from "@/Components/MainComponents/Pagination/PaginationComponent";
import { browseOpenTasks } from "@/lib/actions/tasks";
import { auth } from "@/lib/auth";
import {
  Button,
  Card,
  CardFooter,
  Input,
  Label,
  ListBox,
  Select,
} from "@heroui/react";
import { headers } from "next/headers";
import React from "react";
import { BiTaskX } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { RiFilter3Line } from "react-icons/ri";
const page = async ({ searchParams }) => {
  const params = await searchParams;
  //   const session = await auth.api.getSession({
  //     headers: await headers(),
  //   });
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const name = params.name || "";
  const skill = params.skill || "";

  const currentPage = parseInt(params.page || "1", 10);
  const { tasks = [], totalItems = 0 } = await browseOpenTasks(
    name,
    skill,
    currentPage,
  );
  const selectOptions = (
    <>
      <ListBox.Item id="frontend-development" textValue="Frontend Development">
        Frontend Development
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="backend-development" textValue="Backend Development">
        Backend Development
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item
        id="full-stack-development"
        textValue="Full Stack Development"
      >
        Full Stack Development
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item
        id="mobile-app-development"
        textValue="Mobile App Development"
      >
        Mobile App Development
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="game-development" textValue="Game Development">
        Game Development
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="ui-ux-design" textValue="UI/UX Design">
        UI/UX Design
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="graphic-design" textValue="Graphic Design">
        Graphic Design
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="web-design" textValue="Web Design">
        Web Design
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="motion-graphics" textValue="Motion Graphics">
        Motion Graphics
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="video-editing" textValue="Video Editing">
        Video Editing
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="animation" textValue="Animation">
        Animation
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="digital-illustration" textValue="Digital Illustration">
        Digital Illustration
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="content-writing" textValue="Content Writing">
        Content Writing
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="copywriting" textValue="Copywriting">
        Copywriting
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="technical-writing" textValue="Technical Writing">
        Technical Writing
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="translation" textValue="Translation">
        Translation
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="teaching-tutoring" textValue="Teaching & Tutoring">
        Teaching & Tutoring
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="language-learning" textValue="Language Learning">
        Language Learning
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="music-lessons" textValue="Music Lessons">
        Music Lessons
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="data-science" textValue="Data Science">
        Data Science
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="machine-learning" textValue="Machine Learning">
        Machine Learning
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item
        id="artificial-intelligence"
        textValue="Artificial Intelligence"
      >
        Artificial Intelligence
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="cybersecurity" textValue="Cybersecurity">
        Cybersecurity
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="cloud-computing" textValue="Cloud Computing">
        Cloud Computing
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="devops" textValue="DevOps">
        DevOps
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="database-management" textValue="Database Management">
        Database Management
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="seo" textValue="SEO">
        SEO
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="digital-marketing" textValue="Digital Marketing">
        Digital Marketing
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item
        id="social-media-management"
        textValue="Social Media Management"
      >
        Social Media Management
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="project-management" textValue="Project Management">
        Project Management
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="virtual-assistance" textValue="Virtual Assistance">
        Virtual Assistance
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="business-consulting" textValue="Business Consulting">
        Business Consulting
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="accounting-finance" textValue="Accounting & Finance">
        Accounting & Finance
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="photography" textValue="Photography">
        Photography
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="3d-modeling" textValue="3D Modeling">
        3D Modeling
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="product-design" textValue="Product Design">
        Product Design
        <ListBox.ItemIndicator />
      </ListBox.Item>
    </>
  );
  return (
    <div className="w-11/12 mx-auto my-5 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold">Available Tasks</h1>
        <p>
          Explore <span className="font-bold">{totalItems}</span> available
          tasks
        </p>

        <form method="GET" className="flex gap-3 my-5">
          {/* Reset page parameter back to 1 on clean filter execution */}
          <input type="hidden" name="page" value="1" />

          <div className="flex flex-col gap-1">
            <Label htmlFor="input-type-email">Task Name</Label>
            <Input
              name="name"
              defaultValue={name}
              placeholder="Enter Task name"
              type="text"
            />
          </div>

          <Select
            name="skill"
            defaultSelectedKeys={skill ? [skill] : []}
            className="w-[256px]"
            placeholder="Select"
          >
            <Label>Category</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>{selectOptions}</ListBox>
            </Select.Popover>
          </Select>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 rounded flex items-center gap-2 cursor-pointer hover:bg-blue-600 transition-colors duration-300"
          >
            <RiFilter3Line />
            Filter
          </button>
        </form>

        {/* Cards Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {tasks.length > 0 ? (
            tasks.map((task) => <BrowseTask key={task._id} task={task} />)
          ) : (
            <div className="col-span-3  mt-10">
              <Card className="p-4 mx-auto shadow-md border border-default-200">
                <div className="flex flex-col items-center justify-center text-center py-6 px-4">
                  <h3 className="flex flex-col items-center justify-center text-lg font-semibold text-foreground">
                    <BiTaskX className="text-3xl" />
                    No Tasks Found
                  </h3>
                  <p className="text-sm text-default-500 mt-1 max-w-sm">
                    Please check back later, Post a Task or adjust your filters
                    to view ongoing projects.
                  </p>
                </div>

                <CardFooter className="justify-center pb-4">
                  <Button variant="primary" size="sm">
                    <FaPlus />
                    Post a Task
                  </Button>
                </CardFooter>
              </Card>
            </div>
          )}
        </div>

        {/* Pagination Navigation Interface */}
        <PaginationComponent totalItems={totalItems} itemsPerPage={9} />
      </div>
    </div>
  );
};

export default page;
