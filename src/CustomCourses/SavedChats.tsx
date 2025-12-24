import React from 'react';
import CustomCoursePage from './CustomCoursePage';

const SavedChats: React.FC = () => {
  return (
    <CustomCoursePage
      title="Saved Chats"
      description="Your personal knowledge vault. Every brilliant explanation, code snippet, and insight — organized and ready when you need it."
      benefits={[
        'Search thousands of past conversations instantly',
        'Tag, categorize, and export your best learning moments',
        'Build your own reference library of solved problems',
        'Resume any chat exactly where you left off',
      ]}
      testimonials={[
        {
          name: 'David H.',
          text: 'I refer back to my saved explanations all the time — pure gold.',
        },
        { name: 'Anita G.', text: 'Like having my own private tutor archive.' },
      ]}
      heroImageUrl="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
      featureImages={[
        'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3',
      ]}
    />
  );
};

export default SavedChats;
