'use client';

import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

type DrawingType = 'ELECTRICAL' | 'PLUMBING' | 'CEILING' | 'WALL' | 'TILES' | 'FURNITURE';

type Drawing = {
  id: string;
  type: DrawingType;
  name: string;
  fileUrl: string;
  uploadDate: Date;
  isApproved: boolean;
};

export default function WorkingDrawings() {
  const [drawings, setDrawings] = useState<Drawing[]>([]);
  const [selectedType, setSelectedType] = useState<DrawingType>('ELECTRICAL');
  const [drawingName, setDrawingName] = useState('');
  
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
      'image/*': ['.jpeg', '.jpg', '.png', '.dwg', '.dxf']
    },
    onDrop: (acceptedFiles) => {
      const newDrawings = acceptedFiles.map(file => ({
        id: Math.random().toString(36).substring(2, 9),
        type: selectedType,
        name: drawingName || file.name,
        fileUrl: URL.createObjectURL(file),
        uploadDate: new Date(),
        isApproved: false,
      }));
      
      setDrawings([...drawings, ...newDrawings]);
      setDrawingName('');
    }
  });
  
  const removeDrawing = (id: string) => {
    setDrawings(drawings.filter(drawing => drawing.id !== id));
  };
  
  const toggleApproval = (id: string) => {
    setDrawings(
      drawings.map(drawing => 
        drawing.id === id ? { ...drawing, isApproved: !drawing.isApproved } : drawing
      )
    );
  };
  
  const filterDrawingsByType = (type: DrawingType) => {
    return drawings.filter(drawing => drawing.type === type);
  };
  
  const drawingTypes: { type: DrawingType; label: string }[] = [
    { type: 'ELECTRICAL', label: 'Electrical' },
    { type: 'PLUMBING', label: 'Plumbing' },
    { type: 'CEILING', label: 'Ceiling' },
    { type: 'WALL', label: 'Wall Concepts' },
    { type: 'TILES', label: 'Tiles' },
    { type: 'FURNITURE', label: 'Furniture' },
  ];
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Working Drawings</h2>
      
      <div className="mb-6">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {drawingTypes.map((dt) => (
            <button
              key={dt.type}
              onClick={() => setSelectedType(dt.type)}
              className={`px-4 py-2 rounded-md whitespace-nowrap ${
                selectedType === dt.type
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              {dt.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <div
          {...getRootProps()}
          className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:bg-gray-50 cursor-pointer"
        >
          <input {...getInputProps()} />
          <p className="text-gray-500">
            Drag & drop drawing files here, or click to select files
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Supported formats: PDF, JPG, PNG, DWG, DXF
          </p>
          
          <div className="mt-3">
            <label className="block text-gray-700 mb-2">Drawing Name (optional)</label>
            <input
              type="text"
              value={drawingName}
              onChange={(e) => setDrawingName(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Enter a name for the next uploaded drawing(s)"
            />
          </div>
        </div>
      </div>
      
      {drawings.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">
            {drawingTypes.find(dt => dt.type === selectedType)?.label} Drawings
          </h3>
          
          <div className="space-y-4">
            {filterDrawingsByType(selectedType).length === 0 ? (
              <p className="text-gray-500 italic">No drawings of this type uploaded yet.</p>
            ) : (
              filterDrawingsByType(selectedType).map((drawing) => (
                <div
                  key={drawing.id}
                  className={`border rounded-md p-4 ${
                    drawing.isApproved ? 'bg-green-50 border-green-200' : 'bg-white'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{drawing.name}</h4>
                      <p className="text-sm text-gray-500">
                        Uploaded: {drawing.uploadDate.toLocaleDateString()}
                      </p>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => toggleApproval(drawing.id)}
                        className={`px-3 py-1 rounded-md text-sm ${
                          drawing.isApproved
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        {drawing.isApproved ? 'Approved' : 'Mark as Approved'}
                      </button>
                      
                      <a
                        href={drawing.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm hover:bg-blue-200"
                      >
                        View
                      </a>
                      
                      <button
                        onClick={() => removeDrawing(drawing.id)}
                        className="px-3 py-1 bg-red-100 text-red-800 rounded-md text-sm hover:bg-red-200"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
      
      <div className="flex justify-end">
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          disabled={drawings.length === 0}
        >
          Submit All Drawings
        </button>
      </div>
    </div>
  );
} 