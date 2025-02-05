import React, { useState } from "react";

import AllTasks from "./AllTasks";
import Header from "./Header";
import InputField from "./InputField";

export default function Layout() {
    const [tasks, setTasks] = useState([]);

    function addTask(text) {
        if(text === "") return;
        
        const task = text;
        setTasks([...tasks, task]);
    }

    function deleteTask(index) {
        const newTasks = tasks.filter((task, i) => i !== index);
        setTasks(newTasks);
    }

    return (
        <div className="layout flex-col justify-center items-center mx-auto w-1/2 border border-gray-200 rounded-lg shadow-lg p-4 mt-32">
            <Header />
            <br /><br />
            <InputField add={addTask} />

            <p className="text-center font-bold text-xl mt-14 underline">Your Tasks</p>
            <AllTasks tasks={tasks} del={deleteTask} />
        </div>
    )
}