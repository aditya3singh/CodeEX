import React from 'react';
import SnippetForm from '../components/SnippetForm';
import SnippetList from '../components/SnippetList';

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SnippetForm />
        <SnippetList />
      </div>
    </div>
  );
}

export default Home; 