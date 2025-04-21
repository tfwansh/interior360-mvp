'use client';

import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

type MoodBoardImage = {
  id: string;
  url: string;
  caption: string;
};

export default function MoodBoard() {
  const [images, setImages] = useState<MoodBoardImage[]>([]);
  const [selectedStyle, setSelectedStyle] = useState('modern');
  const [caption, setCaption] = useState('');
  
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    onDrop: (acceptedFiles) => {
      const newImages = acceptedFiles.map(file => ({
        id: Math.random().toString(36).substring(2, 9),
        url: URL.createObjectURL(file),
        caption: caption || '',
      }));
      
      setImages([...images, ...newImages]);
      setCaption('');
    }
  });
  
  const removeImage = (id: string) => {
    setImages(images.filter(image => image.id !== id));
  };
  
  const handleCaptionChange = (id: string, newCaption: string) => {
    setImages(
      images.map(image => 
        image.id === id ? { ...image, caption: newCaption } : image
      )
    );
  };
  
  const handleRequestApproval = () => {
    // Here you would send the mood board to the client for approval
    alert('Approval request sent to client!');
  };
  
  const styleOptions = [
    { value: 'modern', label: 'Modern' },
    { value: 'scandinavian', label: 'Scandinavian' },
    { value: 'industrial', label: 'Industrial' },
    { value: 'minimalist', label: 'Minimalist' },
    { value: 'traditional', label: 'Traditional' },
    { value: 'bohemian', label: 'Bohemian' },
    { value: 'mid-century', label: 'Mid-Century Modern' },
  ];
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Mood Board Generation</h2>
      
      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Design Style</label>
        <select
          value={selectedStyle}
          onChange={(e) => setSelectedStyle(e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          {styleOptions.map((style) => (
            <option key={style.value} value={style.value}>
              {style.label}
            </option>
          ))}
        </select>
      </div>
      
      <div className="mb-6">
        <div
          {...getRootProps()}
          className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center hover:bg-gray-50 cursor-pointer"
        >
          <input {...getInputProps()} />
          <p className="text-gray-500">Drag & drop images here, or click to select files</p>
          
          <div className="mt-3">
            <label className="block text-gray-700 mb-2">Caption (optional)</label>
            <input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Enter a caption for the next uploaded image(s)"
            />
          </div>
        </div>
      </div>
      
      {images.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Mood Board Images</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image) => (
              <div key={image.id} className="relative border rounded-md overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.caption} 
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-2">
                  <input
                    type="text"
                    value={image.caption}
                    onChange={(e) => handleCaptionChange(image.id, e.target.value)}
                    className="w-full p-1 border rounded-md text-sm"
                    placeholder="Add caption"
                  />
                </div>
                
                <button
                  onClick={() => removeImage(image.id)}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="flex justify-end">
        <button
          onClick={handleRequestApproval}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          disabled={images.length === 0}
        >
          Request Approval
        </button>
      </div>
    </div>
  );
} 