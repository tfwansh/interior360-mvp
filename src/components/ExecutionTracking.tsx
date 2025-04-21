'use client';

import { useState } from 'react';

type ExecutionTask = {
  id: string;
  name: string;
  isCompleted: boolean;
  startDate: Date | null;
  endDate: Date | null;
  notes: string;
  assignedTo: string;
};

type ChecklistItem = {
  id: string;
  category: string;
  label: string;
  isChecked: boolean;
};

export default function ExecutionTracking() {
  const [progress, setProgress] = useState<number>(0);
  const [tasks, setTasks] = useState<ExecutionTask[]>([
    {
      id: 't1',
      name: 'Site Measurement',
      isCompleted: true,
      startDate: new Date(2023, 5, 1),
      endDate: new Date(2023, 5, 2),
      notes: 'Completed on schedule',
      assignedTo: 'John Doe',
    },
    {
      id: 't2',
      name: 'Demolition',
      isCompleted: false,
      startDate: new Date(2023, 5, 5),
      endDate: null,
      notes: 'Waiting for permits',
      assignedTo: 'Construction Team',
    },
    {
      id: 't3',
      name: 'Electrical Work',
      isCompleted: false,
      startDate: null,
      endDate: null,
      notes: 'Waiting for demolition',
      assignedTo: 'Electrician',
    },
    {
      id: 't4',
      name: 'Plumbing',
      isCompleted: false,
      startDate: null,
      endDate: null,
      notes: '',
      assignedTo: 'Plumber',
    },
  ]);
  
  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    { id: 'c1', category: 'Site Preparation', label: 'Permits Acquired', isChecked: true },
    { id: 'c2', category: 'Site Preparation', label: 'Area Cleared', isChecked: false },
    { id: 'c3', category: 'Electrical', label: 'Layout Marked', isChecked: false },
    { id: 'c4', category: 'Electrical', label: 'Wiring Installed', isChecked: false },
    { id: 'c5', category: 'Electrical', label: 'Fixtures Installed', isChecked: false },
    { id: 'c6', category: 'Ceiling', label: 'Frame Installed', isChecked: false },
    { id: 'c7', category: 'Ceiling', label: 'Drywall Completed', isChecked: false },
    { id: 'c8', category: 'Wall Concepts', label: 'Paint Applied', isChecked: false },
    { id: 'c9', category: 'Wall Concepts', label: 'Wallpaper Installed', isChecked: false },
  ]);
  
  const [newTask, setNewTask] = useState<Partial<ExecutionTask>>({
    name: '',
    isCompleted: false,
    startDate: null,
    endDate: null,
    notes: '',
    assignedTo: '',
  });
  
  const [showAddTask, setShowAddTask] = useState(false);
  
  const categories = [...new Set(checklist.map(item => item.category))];
  
  const toggleChecklistItem = (id: string) => {
    const updatedChecklist = checklist.map(item => 
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );
    
    setChecklist(updatedChecklist);
    
    // Update progress based on checked items
    const checkedCount = updatedChecklist.filter(item => item.isChecked).length;
    const totalCount = updatedChecklist.length;
    setProgress(Math.round((checkedCount / totalCount) * 100));
  };
  
  const toggleTaskCompletion = (id: string) => {
    setTasks(
      tasks.map(task => 
        task.id === id ? { 
          ...task, 
          isCompleted: !task.isCompleted,
          endDate: !task.isCompleted ? new Date() : null
        } : task
      )
    );
  };
  
  const addNewTask = () => {
    if (!newTask.name) {
      alert('Task name is required');
      return;
    }
    
    const task: ExecutionTask = {
      id: Math.random().toString(36).substring(2, 9),
      name: newTask.name || '',
      isCompleted: false,
      startDate: newTask.startDate || null,
      endDate: null,
      notes: newTask.notes || '',
      assignedTo: newTask.assignedTo || '',
    };
    
    setTasks([...tasks, task]);
    setShowAddTask(false);
    setNewTask({
      name: '',
      isCompleted: false,
      startDate: null,
      endDate: null,
      notes: '',
      assignedTo: '',
    });
  };
  
  const formatDate = (date: Date | null) => {
    if (!date) return 'Not set';
    return date.toLocaleDateString();
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Execution Tracking</h2>
      
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">Overall Progress</h3>
          <span className="font-semibold">{progress}%</span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div 
            className="bg-blue-600 h-4 rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Execution Checklist</h3>
          </div>
          
          {categories.map(category => (
            <div key={category} className="mb-4">
              <h4 className="font-medium text-gray-700 mb-2">{category}</h4>
              <div className="space-y-2 pl-2">
                {checklist
                  .filter(item => item.category === category)
                  .map(item => (
                    <div key={item.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={item.id}
                        checked={item.isChecked}
                        onChange={() => toggleChecklistItem(item.id)}
                        className="mr-2 h-5 w-5"
                      />
                      <label 
                        htmlFor={item.id}
                        className={`${item.isChecked ? 'line-through text-gray-500' : ''}`}
                      >
                        {item.label}
                      </label>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Task Management</h3>
            <button
              onClick={() => setShowAddTask(true)}
              className="bg-green-600 text-white px-3 py-1 rounded-md text-sm hover:bg-green-700"
            >
              Add Task
            </button>
          </div>
          
          {showAddTask && (
            <div className="mb-4 p-4 border rounded-md bg-gray-50">
              <h4 className="font-medium mb-3">Add New Task</h4>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-gray-700 mb-1 text-sm">Task Name*</label>
                  <input
                    type="text"
                    value={newTask.name || ''}
                    onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter task name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1 text-sm">Assigned To</label>
                  <input
                    type="text"
                    value={newTask.assignedTo || ''}
                    onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}
                    className="w-full p-2 border rounded-md"
                    placeholder="Person or team responsible"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1 text-sm">Start Date</label>
                  <input
                    type="date"
                    value={newTask.startDate ? newTask.startDate.toISOString().split('T')[0] : ''}
                    onChange={(e) => setNewTask({ 
                      ...newTask, 
                      startDate: e.target.value ? new Date(e.target.value) : null 
                    })}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-1 text-sm">Notes</label>
                  <textarea
                    value={newTask.notes || ''}
                    onChange={(e) => setNewTask({ ...newTask, notes: e.target.value })}
                    className="w-full p-2 border rounded-md"
                    rows={2}
                    placeholder="Additional details"
                  />
                </div>
                
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => setShowAddTask(false)}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-md hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={addNewTask}
                    className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
                  >
                    Add Task
                  </button>
                </div>
              </div>
            </div>
          )}
          
          <div className="space-y-3">
            {tasks.map((task) => (
              <div 
                key={task.id} 
                className={`border rounded-md p-3 ${
                  task.isCompleted ? 'bg-green-50 border-green-200' : 'bg-white'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id={`task-${task.id}`}
                        checked={task.isCompleted}
                        onChange={() => toggleTaskCompletion(task.id)}
                        className="mr-2 h-5 w-5"
                      />
                      <label 
                        htmlFor={`task-${task.id}`}
                        className={`font-medium ${task.isCompleted ? 'line-through text-gray-500' : ''}`}
                      >
                        {task.name}
                      </label>
                    </div>
                    
                    <div className="ml-7 text-sm text-gray-600">
                      <p>Assigned to: {task.assignedTo || 'Unassigned'}</p>
                      <p>Start: {formatDate(task.startDate)}</p>
                      {task.isCompleted && <p>Completed: {formatDate(task.endDate)}</p>}
                      {task.notes && <p className="italic mt-1">{task.notes}</p>}
                    </div>
                  </div>
                  
                  <div className="text-xs px-2 py-1 rounded-full bg-gray-100">
                    {task.isCompleted ? 'Completed' : 'In Progress'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 