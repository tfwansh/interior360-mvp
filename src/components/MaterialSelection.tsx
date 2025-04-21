'use client';

import { useState } from 'react';

type MaterialCategory = 'FLOORING' | 'WALL' | 'FURNITURE' | 'LIGHTING' | 'ACCESSORIES' | 'OTHER';
type MaterialStatus = 'SELECTED' | 'ORDERED' | 'DELIVERED' | 'INSTALLED';

type Material = {
  id: string;
  name: string;
  category: MaterialCategory;
  brand: string;
  price: number;
  quantity: number;
  status: MaterialStatus;
  imageUrl?: string;
  vendorId?: string;
};

type Vendor = {
  id: string;
  name: string;
  contact: string;
  address: string;
};

export default function MaterialSelection() {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [vendors, setVendors] = useState<Vendor[]>([
    { id: 'v1', name: 'Premium Suppliers', contact: '+1 (555) 123-4567', address: '123 Main St, City' },
    { id: 'v2', name: 'Design Materials Co.', contact: '+1 (555) 987-6543', address: '456 Oak St, Town' },
    { id: 'v3', name: 'Modern Finishes', contact: '+1 (555) 345-6789', address: '789 Pine St, Village' },
  ]);
  const [selectedCategory, setSelectedCategory] = useState<MaterialCategory>('FLOORING');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMaterial, setNewMaterial] = useState<Partial<Material>>({
    category: 'FLOORING',
    status: 'SELECTED',
    price: 0,
    quantity: 1,
  });
  
  const materialCategories: { value: MaterialCategory; label: string }[] = [
    { value: 'FLOORING', label: 'Flooring' },
    { value: 'WALL', label: 'Wall' },
    { value: 'FURNITURE', label: 'Furniture' },
    { value: 'LIGHTING', label: 'Lighting' },
    { value: 'ACCESSORIES', label: 'Accessories' },
    { value: 'OTHER', label: 'Other' },
  ];
  
  const materialStatuses: { value: MaterialStatus; label: string }[] = [
    { value: 'SELECTED', label: 'Selected' },
    { value: 'ORDERED', label: 'Ordered' },
    { value: 'DELIVERED', label: 'Delivered' },
    { value: 'INSTALLED', label: 'Installed' },
  ];
  
  const handleAddMaterial = () => {
    if (!newMaterial.name || !newMaterial.brand) {
      alert('Please fill in required fields');
      return;
    }
    
    const material: Material = {
      id: Math.random().toString(36).substring(2, 9),
      name: newMaterial.name || '',
      brand: newMaterial.brand || '',
      category: newMaterial.category as MaterialCategory,
      price: newMaterial.price || 0,
      quantity: newMaterial.quantity || 1,
      status: newMaterial.status as MaterialStatus,
      imageUrl: newMaterial.imageUrl,
      vendorId: newMaterial.vendorId,
    };
    
    setMaterials([...materials, material]);
    setShowAddForm(false);
    setNewMaterial({
      category: selectedCategory,
      status: 'SELECTED',
      price: 0,
      quantity: 1,
    });
  };
  
  const updateMaterialStatus = (id: string, status: MaterialStatus) => {
    setMaterials(
      materials.map(material => 
        material.id === id ? { ...material, status } : material
      )
    );
  };
  
  const deleteMaterial = (id: string) => {
    setMaterials(materials.filter(material => material.id !== id));
  };
  
  const filterMaterialsByCategory = (category: MaterialCategory) => {
    return materials.filter(material => material.category === category);
  };
  
  const getVendorName = (vendorId: string) => {
    const vendor = vendors.find(v => v.id === vendorId);
    return vendor ? vendor.name : 'Unassigned';
  };
  
  const calculateTotalCost = () => {
    return materials.reduce((total, material) => total + (material.price * material.quantity), 0);
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Material Selection</h2>
      
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {materialCategories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-4 py-2 rounded-md whitespace-nowrap ${
                selectedCategory === category.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <button
          onClick={() => {
            setNewMaterial({ ...newMaterial, category: selectedCategory });
            setShowAddForm(true);
          }}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Add Material
        </button>
      </div>
      
      {showAddForm && (
        <div className="mb-8 p-4 border rounded-md bg-gray-50">
          <h3 className="text-lg font-semibold mb-4">Add New Material</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2">Name*</label>
              <input
                type="text"
                value={newMaterial.name || ''}
                onChange={(e) => setNewMaterial({ ...newMaterial, name: e.target.value })}
                className="w-full p-2 border rounded-md"
                placeholder="Material name"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Brand*</label>
              <input
                type="text"
                value={newMaterial.brand || ''}
                onChange={(e) => setNewMaterial({ ...newMaterial, brand: e.target.value })}
                className="w-full p-2 border rounded-md"
                placeholder="Brand name"
                required
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Category</label>
              <select
                value={newMaterial.category}
                onChange={(e) => setNewMaterial({ ...newMaterial, category: e.target.value as MaterialCategory })}
                className="w-full p-2 border rounded-md"
              >
                {materialCategories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Vendor</label>
              <select
                value={newMaterial.vendorId || ''}
                onChange={(e) => setNewMaterial({ ...newMaterial, vendorId: e.target.value })}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Select a vendor</option>
                {vendors.map((vendor) => (
                  <option key={vendor.id} value={vendor.id}>
                    {vendor.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Price ($)</label>
              <input
                type="number"
                value={newMaterial.price}
                onChange={(e) => setNewMaterial({ ...newMaterial, price: parseFloat(e.target.value) })}
                className="w-full p-2 border rounded-md"
                min="0"
                step="0.01"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Quantity</label>
              <input
                type="number"
                value={newMaterial.quantity}
                onChange={(e) => setNewMaterial({ ...newMaterial, quantity: parseInt(e.target.value) })}
                className="w-full p-2 border rounded-md"
                min="1"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Image URL</label>
              <input
                type="text"
                value={newMaterial.imageUrl || ''}
                onChange={(e) => setNewMaterial({ ...newMaterial, imageUrl: e.target.value })}
                className="w-full p-2 border rounded-md"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Status</label>
              <select
                value={newMaterial.status}
                onChange={(e) => setNewMaterial({ ...newMaterial, status: e.target.value as MaterialStatus })}
                className="w-full p-2 border rounded-md"
              >
                {materialStatuses.map((status) => (
                  <option key={status.value} value={status.value}>
                    {status.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => setShowAddForm(false)}
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              onClick={handleAddMaterial}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Add Material
            </button>
          </div>
        </div>
      )}
      
      {filterMaterialsByCategory(selectedCategory).length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No materials in this category. Click "Add Material" to add some.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filterMaterialsByCategory(selectedCategory).map((material) => (
            <div key={material.id} className="border rounded-md overflow-hidden flex">
              {material.imageUrl && (
                <div className="w-32 h-32 flex-shrink-0">
                  <img
                    src={material.imageUrl}
                    alt={material.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="flex-grow p-4">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium text-lg">{material.name}</h3>
                    <p className="text-gray-600">{material.brand}</p>
                    <p className="text-sm text-gray-500">
                      Vendor: {material.vendorId ? getVendorName(material.vendorId) : 'Unassigned'}
                    </p>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-semibold">${material.price.toFixed(2)} × {material.quantity}</p>
                    <p className="font-bold">${(material.price * material.quantity).toFixed(2)}</p>
                    
                    <div className="mt-2 flex space-x-2">
                      <select
                        value={material.status}
                        onChange={(e) => updateMaterialStatus(material.id, e.target.value as MaterialStatus)}
                        className="p-1 text-sm border rounded"
                      >
                        {materialStatuses.map((status) => (
                          <option key={status.value} value={status.value}>
                            {status.label}
                          </option>
                        ))}
                      </select>
                      
                      <button
                        onClick={() => deleteMaterial(material.id)}
                        className="p-1 text-sm bg-red-100 text-red-800 rounded hover:bg-red-200"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="mt-6 p-4 bg-gray-50 rounded-md">
            <p className="text-right font-bold text-lg">
              Total Cost: ${calculateTotalCost().toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
} 