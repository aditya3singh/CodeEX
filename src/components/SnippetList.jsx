import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axios';
import toast from 'react-hot-toast';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/outline';

function SnippetList() {
  const [snippets, setSnippets] = useState([]);
  const [selectedSnippet, setSelectedSnippet] = useState(null);

  useEffect(() => {
    fetchSnippets();
  }, []);

  const fetchSnippets = async () => {
    try {
      const response = await axiosInstance.get('/snippets');
      setSnippets(response.data);
    } catch (error) {
      console.error('Error fetching snippets:', error);
      toast.error('Failed to load snippets');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/snippets/${id}`);
      toast.success('Snippet deleted successfully');
      fetchSnippets(); // Refresh the list
    } catch (error) {
      console.error('Error deleting snippet:', error);
      toast.error('Failed to delete snippet');
    }
  };

  const handleView = (snippet) => {
    setSelectedSnippet(snippet);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Your Snippets</h2>
      <div className="space-y-4">
        {snippets.length === 0 ? (
          <p className="text-gray-500">No snippets yet</p>
        ) : (
          snippets.map((snippet) => (
            <div key={snippet._id} className="border p-4 rounded hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{snippet.title}</h3>
                  <p className="text-gray-600 mt-2 line-clamp-2">{snippet.content}</p>
                  <p className="text-sm text-gray-400 mt-2">
                    {new Date(snippet.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleView(snippet)}
                    className="p-2 text-blue-500 hover:bg-blue-50 rounded"
                  >
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(snippet._id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Snippet View Modal */}
      {selectedSnippet && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <h3 className="text-xl font-bold mb-4">{selectedSnippet.title}</h3>
            <div className="prose max-w-none">
              <p className="whitespace-pre-wrap">{selectedSnippet.content}</p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedSnippet(null)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SnippetList; 