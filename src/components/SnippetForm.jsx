import React, { useState } from 'react';
import toast from 'react-hot-toast';
import axiosInstance from '../api/axios';

function SnippetForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      toast.error('Please fill all fields');
      return;
    }

    try {
      const response = await axiosInstance.post('/snippets', {
        title,
        content,
        createdAt: new Date().toISOString()
      });

      if (response.data) {
        toast.success('Snippet saved successfully!');
        setTitle('');
        setContent('');
      }
    } catch (error) {
      console.error('Error saving snippet:', error);
      toast.error('Failed to save snippet');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Snippet</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Snippet Title"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Snippet Content"
            className="w-full p-2 border rounded h-32"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Snippet
        </button>
      </form>
    </div>
  );
}

export default SnippetForm; 