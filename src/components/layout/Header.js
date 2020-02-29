import React, {useState} from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { AddTask } from '../AddTask';
import logo from '../../logo.png';

export const Header = ({ darkMode, setDarkMode}) => {
   const [shouldShowMain, setShouldShowMain] = useState(false);
   const [showQuickAddTask, setShowQuickAddTask] = useState(false);

   return (
      <header className="header" data-testid="header">
         <nav>
            <div className="logo">
               <img src={logo} alt="Todoish" />
            </div>
            <div className="settings">
               <ul>
               <li data-testid="quick-add-task-action" className="settings__add"
                  onClick={() =>
                     {setShowQuickAddTask(true);
                      setShouldShowMain(true);
                  }}
               >+</li>
               <li
                  data-testid="dark-mode-action"
                  className="settings__darkmode"
                  onClick={() => setDarkMode(!darkMode)}
               >
                     <FaPizzaSlice/></li>
               </ul>
            </div>
         </nav>
         <AddTask
            showAddTaskMain={false}
            shouldShowMain={setShouldShowMain}
            showQuickAddTask={showQuickAddTask}
            setShowQuickAddTask={setShowQuickAddTask}
            />
      </header>
   );
};
