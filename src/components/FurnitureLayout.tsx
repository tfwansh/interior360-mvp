'use client';

import { useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

type FurnitureItem = {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
  type: string;
  label: string;
};

export default function FurnitureLayout() {
  const [layoutItems, setLayoutItems] = useState<FurnitureItem[]>([
    { i: 'sofa-1', x: 0, y: 0, w: 4, h: 2, type: 'sofa', label: 'Sofa' },
    { i: 'table-1', x: 4, y: 0, w: 2, h: 2, type: 'table', label: 'Coffee Table' },
    { i: 'chair-1', x: 6, y: 0, w: 1, h: 1, type: 'chair', label: 'Chair 1' },
    { i: 'chair-2', x: 6, y: 1, w: 1, h: 1, type: 'chair', label: 'Chair 2' },
  ]);
  
  const [availableFurniture, setAvailableFurniture] = useState([
    { type: 'sofa', label: 'Sofa', w: 4, h: 2 },
    { type: 'loveseat', label: 'Loveseat', w: 3, h: 2 },
    { type: 'chair', label: 'Chair', w: 1, h: 1 },
    { type: 'table', label: 'Coffee Table', w: 2, h: 2 },
    { type: 'tv', label: 'TV Stand', w: 3, h: 1 },
    { type: 'bed', label: 'Bed', w: 4, h: 4 },
    { type: 'dresser', label: 'Dresser', w: 3, h: 1 },
    { type: 'desk', label: 'Desk', w: 3, h: 1 },
  ]);
  
  const [roomType, setRoomType] = useState('living');
  
  const handleLayoutChange = (layout: any) => {
    const updatedItems = layoutItems.map(item => {
      const updatedLayout = layout.find((l: any) => l.i === item.i);
      if (updatedLayout) {
        return {
          ...item,
          x: updatedLayout.x,
          y: updatedLayout.y,
          w: updatedLayout.w,
          h: updatedLayout.h,
        };
      }
      return item;
    });
    
    setLayoutItems(updatedItems);
  };
  
  const addFurnitureItem = (type: string, label: string, w: number, h: number) => {
    const newId = `${type}-${layoutItems.length + 1}`;
    setLayoutItems([
      ...layoutItems,
      {
        i: newId,
        x: 0,
        y: 0,
        w,
        h,
        type,
        label: `${label} ${layoutItems.length + 1}`,
      },
    ]);
  };
  
  const removeFurnitureItem = (id: string) => {
    setLayoutItems(layoutItems.filter(item => item.i !== id));
  };
  
  const handleSaveLayout = () => {
    // Here you would save the layout to your database
    alert('Layout saved successfully!');
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Furniture Layout</h2>
      
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Room Type</label>
        <select
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="living">Living Room</option>
          <option value="bedroom">Bedroom</option>
          <option value="kitchen">Kitchen</option>
          <option value="dining">Dining Room</option>
          <option value="office">Office</option>
        </select>
      </div>
      
      <div className="flex flex-wrap gap-3 mb-6">
        <h3 className="w-full text-lg font-semibold mb-2">Available Furniture</h3>
        {availableFurniture.map((item, idx) => (
          <button
            key={idx}
            onClick={() => addFurnitureItem(item.type, item.label, item.w, item.h)}
            className="bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-md text-sm"
          >
            {item.label}
          </button>
        ))}
      </div>
      
      <div className="border p-4 bg-gray-50 rounded-md mb-6" style={{ height: '500px' }}>
        <ResponsiveGridLayout
          className="layout"
          layouts={{ lg: layoutItems }}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={30}
          onLayoutChange={handleLayoutChange}
          isDraggable
          isResizable
          compactType="vertical"
        >
          {layoutItems.map((item) => (
            <div key={item.i} className="border border-gray-300 bg-white rounded-md p-2 flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">{item.label}</span>
                <button 
                  onClick={() => removeFurnitureItem(item.i)}
                  className="text-red-500 hover:text-red-700"
                >
                  ✕
                </button>
              </div>
              <div 
                className="flex-grow bg-gray-100 rounded-sm flex items-center justify-center"
                style={{ minHeight: '20px' }}
              >
                {item.type === 'sofa' && (
                  <div className="w-full h-full bg-blue-100 rounded-md flex items-center justify-center">
                    Sofa
                  </div>
                )}
                {item.type === 'table' && (
                  <div className="w-full h-full bg-amber-100 rounded-md flex items-center justify-center">
                    Table
                  </div>
                )}
                {item.type === 'chair' && (
                  <div className="w-full h-full bg-green-100 rounded-md flex items-center justify-center">
                    Chair
                  </div>
                )}
                {!['sofa', 'table', 'chair'].includes(item.type) && (
                  <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center">
                    {item.label}
                  </div>
                )}
              </div>
            </div>
          ))}
        </ResponsiveGridLayout>
      </div>
      
      <div className="flex justify-end">
        <button
          onClick={handleSaveLayout}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Submit Layout
        </button>
      </div>
    </div>
  );
} 