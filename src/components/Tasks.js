import React, { useState, useEffect } from 'react';
import { Checkbox } from "./Checkbox";
import { AddTask } from "./AddTask";
import { useTasks } from '../hooks';
import { collatedTasks } from '../constants';
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers';
import { useSelectedProjectValue, useProjectsValue } from '../context';
import { FaTrashAlt } from 'react-icons/fa';
import { firebase } from '../firebase';

export const Tasks = () => {
   const { selectedProject } = useSelectedProjectValue();
   const { projects } = useProjectsValue();
   const { tasks, archivedTasks } = useTasks(selectedProject);
   const [showConfirm, setShowConfirm] = useState(false);

   const deleteTask = docId => {
      firebase
         .firestore()
         .collection('tasks')
         .doc(docId)
         .delete();
      };

   let projectName = '';

   if (projects && selectedProject && !collatedTasksExist(selectedProject)) {
      projectName = getTitle(projects, selectedProject).name;
      console.log("projectname 1: ", projectName);
   }

   if (collatedTasksExist(selectedProject) && selectedProject) {
      projectName = getCollatedTitle(collatedTasks, selectedProject).name;
            console.log("projectname 2: ", projectName);
   }

   useEffect(() => {
      document.title = `${projectName}: Todoist`;
   });

   console.log(tasks);
   console.log(archivedTasks);
   return (
      <div className="tasks" data-testid="tasks">
         <h2 data-test-id="project-name">{projectName}</h2>
         <ul className="tasks__list">
            {tasks.map(task=> (
               <li key={`${task.id}`}>
                  <Checkbox id={task.id} />
                  <span>{task.task}</span>
               </li>
            ))}
         </ul>

         <AddTask />
         <ul className="tasks__list archived">
            {archivedTasks.map(task=> (
               <li key={`${task.id}`}>
                  <span>{task.task}</span>
               </li>
            ))}
         </ul>
      </div>
   )
}
