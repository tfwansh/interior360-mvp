'use client';

import { useState } from 'react';
import Link from 'next/link';

type Project = {
  id: string;
  title: string;
  clientName: string;
  spaceType: string;
  progress: number;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
  createdAt: Date;
  updatedAt: Date;
};

type Task = {
  id: string;
  name: string;
  projectId: string;
  dueDate: Date | null;
  isCompleted: boolean;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
};

export default function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 'p1',
      title: 'Modern Living Room Redesign',
      clientName: 'John Smith',
      spaceType: 'Living Room',
      progress: 65,
      status: 'IN_PROGRESS',
      createdAt: new Date(2023, 4, 15),
      updatedAt: new Date(2023, 5, 10),
    },
    {
      id: 'p2',
      title: 'Master Bedroom Makeover',
      clientName: 'Emily Johnson',
      spaceType: 'Bedroom',
      progress: 30,
      status: 'IN_PROGRESS',
      createdAt: new Date(2023, 5, 5),
      updatedAt: new Date(2023, 5, 15),
    },
    {
      id: 'p3',
      title: 'Kitchen Renovation',
      clientName: 'Michael Davis',
      spaceType: 'Kitchen',
      progress: 10,
      status: 'PENDING',
      createdAt: new Date(2023, 6, 1),
      updatedAt: new Date(2023, 6, 1),
    },
    {
      id: 'p4',
      title: 'Home Office Setup',
      clientName: 'Sarah Wilson',
      spaceType: 'Office',
      progress: 100,
      status: 'COMPLETED',
      createdAt: new Date(2023, 3, 10),
      updatedAt: new Date(2023, 4, 25),
    },
  ]);
  
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 't1',
      name: 'Submit furniture layout for approval',
      projectId: 'p1',
      dueDate: new Date(2023, 6, 15),
      isCompleted: false,
      priority: 'HIGH',
    },
    {
      id: 't2',
      name: 'Order main sofa',
      projectId: 'p1',
      dueDate: new Date(2023, 6, 20),
      isCompleted: false,
      priority: 'MEDIUM',
    },
    {
      id: 't3',
      name: 'Review mood board with client',
      projectId: 'p2',
      dueDate: new Date(2023, 6, 12),
      isCompleted: false,
      priority: 'HIGH',
    },
    {
      id: 't4',
      name: 'Schedule site measurement',
      projectId: 'p3',
      dueDate: new Date(2023, 6, 10),
      isCompleted: false,
      priority: 'HIGH',
    },
  ]);
  
  const [activeFilter, setActiveFilter] = useState<'all' | 'pending' | 'in-progress' | 'completed'>('all');
  
  const toggleTaskCompletion = (id: string) => {
    setTasks(
      tasks.map(task => 
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };
  
  const filterProjects = () => {
    switch (activeFilter) {
      case 'pending':
        return projects.filter(project => project.status === 'PENDING');
      case 'in-progress':
        return projects.filter(project => project.status === 'IN_PROGRESS');
      case 'completed':
        return projects.filter(project => project.status === 'COMPLETED');
      default:
        return projects;
    }
  };
  
  const getProjectById = (id: string) => {
    return projects.find(project => project.id === id);
  };
  
  const formatDate = (date: Date | null) => {
    if (!date) return 'No date set';
    return date.toLocaleDateString();
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <Link 
          href="/client-onboarding"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          New Project
        </Link>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Projects</h3>
        
        <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-md whitespace-nowrap ${
              activeFilter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveFilter('pending')}
            className={`px-4 py-2 rounded-md whitespace-nowrap ${
              activeFilter === 'pending'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setActiveFilter('in-progress')}
            className={`px-4 py-2 rounded-md whitespace-nowrap ${
              activeFilter === 'in-progress'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            In Progress
          </button>
          <button
            onClick={() => setActiveFilter('completed')}
            className={`px-4 py-2 rounded-md whitespace-nowrap ${
              activeFilter === 'completed'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            Completed
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filterProjects().map((project) => (
            <div key={project.id} className="border rounded-md overflow-hidden">
              <div className={`p-4 ${
                project.status === 'COMPLETED' 
                  ? 'bg-green-50'
                  : project.status === 'PENDING'
                    ? 'bg-yellow-50'
                    : 'bg-white'
              }`}>
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold">{project.title}</h4>
                  <div className={`px-2 py-1 rounded-full text-xs ${
                    project.status === 'COMPLETED'
                      ? 'bg-green-100 text-green-800'
                      : project.status === 'PENDING'
                        ? 'bg-yellow-100 text-yellow-800'
                        : project.status === 'CANCELLED'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status.replace('_', ' ')}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm">Client: {project.clientName}</p>
                <p className="text-gray-600 text-sm">Space: {project.spaceType}</p>
                
                <div className="mt-3">
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        project.progress === 100
                          ? 'bg-green-600'
                          : 'bg-blue-600'
                      }`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between text-sm text-gray-500">
                  <span>Created: {formatDate(project.createdAt)}</span>
                  <span>Updated: {formatDate(project.updatedAt)}</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-3 flex justify-between">
                <Link
                  href={`/furniture-layout?projectId=${project.id}`}
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  View Details
                </Link>
                
                <div className="flex space-x-2">
                  <Link
                    href={`/material-selection?projectId=${project.id}`}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    Materials
                  </Link>
                  <Link
                    href={`/execution-tracking?projectId=${project.id}`}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    Execution
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Upcoming Tasks</h3>
        
        {tasks.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No tasks scheduled.</p>
        ) : (
          <div className="space-y-3">
            {tasks
              .filter(task => !task.isCompleted)
              .sort((a, b) => {
                // Sort by priority first
                const priorityOrder = { HIGH: 0, MEDIUM: 1, LOW: 2 };
                const priorityDiff = 
                  priorityOrder[a.priority as keyof typeof priorityOrder] - 
                  priorityOrder[b.priority as keyof typeof priorityOrder];
                
                if (priorityDiff !== 0) return priorityDiff;
                
                // Then by due date
                if (!a.dueDate) return 1;
                if (!b.dueDate) return -1;
                return a.dueDate.getTime() - b.dueDate.getTime();
              })
              .slice(0, 5) // Only show the top 5 tasks
              .map(task => {
                const project = getProjectById(task.projectId);
                
                return (
                  <div key={task.id} className="flex items-start border-l-4 border-blue-500 bg-gray-50 p-3 rounded-r-md">
                    <input
                      type="checkbox"
                      checked={task.isCompleted}
                      onChange={() => toggleTaskCompletion(task.id)}
                      className="mt-1 mr-3 h-5 w-5"
                    />
                    
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <span className="font-medium">{task.name}</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                          task.priority === 'HIGH'
                            ? 'bg-red-100 text-red-800'
                            : task.priority === 'MEDIUM'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-green-100 text-green-800'
                        }`}>
                          {task.priority}
                        </span>
                      </div>
                      
                      <div className="mt-1 flex justify-between text-sm">
                        <span className="text-gray-600">
                          {project ? project.title : 'Unknown Project'}
                        </span>
                        <span className={`${
                          task.dueDate && task.dueDate < new Date()
                            ? 'text-red-600 font-medium'
                            : 'text-gray-600'
                        }`}>
                          Due: {formatDate(task.dueDate)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
} 