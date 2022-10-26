import { Meteor } from 'meteor/meteor';
import React, { useState, Fragment } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import Sidebar from './SideBar';
import { Home } from './Home';


export const App = () => {
    

  const user = useTracker(() => Meteor.user());

  const hideCompletedFilter = { isChecked: { $ne: true } };

  const userFilter = user ? { userId: user._id } : {};

  const logout = () => Meteor.logout();
  
  return (
    <div className='app'>
      <Sidebar></Sidebar>
      <Home></Home>
    </div>
    // <div className="app">
    //   <header>
    //     <div className="app-bar">
    //       <div className="app-header">
    //         <h1>
    //           <CasinoIcon className="app-icon " /> 
    //           Test
    //           {pendingTasksTitle}
    //         </h1>
    //       </div>
    //     </div>
    //   </header>

    //   <div className="main">
    //     {user ? (
    //       <Fragment>
    //         <div className="user" onClick={logout}>
    //         {user.username || user.profile.name} 🚫
    //         </div>
    //         <TaskForm user={user} />

    //         <div className="filter">
    //           <button onClick={() => setHideCompleted(!hideCompleted)}>
    //             {hideCompleted ? 'Show All' : 'Hide Completed'}
    //           </button>
    //         </div>

    //         {isLoading && <div className="loading">loading...</div>}

    //         <ul className="tasks">
    //           {tasks.map(task => (
    //             <Task
    //               key={task._id}
    //               task={task}
    //               onCheckboxClick={toggleChecked}
    //               onDeleteClick={deleteTask}
    //             />
    //           ))}
    //         </ul>
    //       </Fragment>
    //     ) : (
    //       <LoginForm />
    //     )}
    //   </div>
    // </div>
  );
};
