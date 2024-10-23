"use client";
import AppInput from "@/components/AppInput";
import Button from "@/components/button";
import HeaderLeft from "@/components/HeaderLeft";
import Suscribe from "@/components/Suscribe";
import Task from "@/components/Task";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface TaskBeDone {
  title: string;
  isCompleted: boolean;
  id: number;
}

export default function Home() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [data, setData] = useState<TaskBeDone[]>([
    { title: "Training in Gym", isCompleted: false, id: 1 },
    { title: "Playing Paddle with Friends", isCompleted: false, id: 2 },
    { title: "Burger BBQ with Family", isCompleted: false, id: 3 },
  ]);
  const [title, setTitle] = useState<string>("");
  const [taskEdit, setTaskEdit] = useState<TaskBeDone>();

  const handleCompletedTask = (task: TaskBeDone, e: boolean) => {
    setData(
      data.map((item) =>
        item.id === task.id ? { ...item, isCompleted: e } : item
      )
    );
  };

  const handleAddTask = () => {
    if (title === "" || title.trim() === "") {
      alert("Please enter a title");
      return;
    }
    const newTask: TaskBeDone = {
      title,
      isCompleted: false,
      id: data.length + 1,
    };
    setData([...data, newTask]);
    setTitle("");
  };

  const handleEditTask = (task: TaskBeDone) => {
    if (title === "" || title.trim() === "") {
      alert("Please enter a title");
      return;
    }
    setData(
      data.map((item) =>
        item.id === task.id ? { ...item, title: title.trim() } : item
      )
    );
    setIsEditing(false);

    setTitle("");
  };

  const handleSubmit = () => {
    if (!isEditing) {
      handleAddTask();
    } else {
      handleEditTask(taskEdit!);
    }
  };

  return (
    <div className="bg-gray-100 h-full w-full flex items-center justify-center">
      <div className="flex flex-row w-full items-center h-full">
        <div className="relative h-full w-1/3 shadow-xl">
          {/* Header */}
          <HeaderLeft />
          {/* advert */}
          <Suscribe price={1} />
          {/* Events */}
          <div className="h-[70%] overflow-y-scroll">
            {data.length === 0 ? (
              <p className="text-center my-4 font-bold">
                No Task yet. Click the Add button to add task
              </p>
            ) : (
              data.map((task) => (
                <Task
                  checked={task.isCompleted}
                  onChange={(e) => handleCompletedTask(task, e)}
                  title={task.title}
                  key={task.id}
                  onEdit={() => {
                    setIsEditing(true);
                    setTaskEdit(task);
                    setTitle(task.title);
                  }}
                />
              ))
            )}
          </div>
          {/* Floating button */}
          <div className="absolute bottom-7 right-5 w-14 h-14">
            <Button
              className="bg-[#3556AB] border-[#123EB1] border-2 w-14 h-14  rounded-full flex items-center justify-center"
              onClick={() => {
                setIsEditing(false);
              }}
            >
              <Plus color="white" size={30} />
            </Button>
          </div>
        </div>
        <div className=" h-full w-2/3 flex flex-col overflow-hidden">
          {/* Heading */}
          <div className="bg-[#3556AB] h-32 flex items-center justify-center">
            <h1 className="capitalize text-2xl text-white font-[500]">
              {isEditing ? "Edit task" : "Add Task"}
            </h1>
          </div>
          {/* Input for editing */}
          <div className="flex flex-col flex-1 px-5 py-3">
            <div className="space-y-2 w-full">
              <h3 className="">Task Name</h3>
              <AppInput
                placeholder="Add event"
                onChange={(e) => setTitle(e.currentTarget.value)}
                value={title}
              />
            </div>
          </div>
          {/* Footer */}
          <div className="flex items-center gap-2 my-4 mb-7 mx-5 text-white">
            <div className="w-1/4">
              <Button
                className="bg-[#ab3535] border-2 border-[#720D0D] rounded-md shadow-sm"
                onClick={() => setTitle("")}
              >
                Delete
              </Button>
            </div>
            <div className="w-3/4">
              <Button
                className="bg-[#3556AB] border-2 border-[#0D2972] rounded-md shadow-sm"
                onClick={handleSubmit}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
