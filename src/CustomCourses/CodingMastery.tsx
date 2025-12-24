import React from 'react';
import CustomCoursePage from './CustomCoursePage';

const CodingMastery: React.FC = () => {
  return (
    <CustomCoursePage
      title="Coding Mastery"
      description="Transform from beginner to job-ready developer with real-world projects, AI code reviews, and paths trusted by top tech companies."
      benefits={[
        'Build full apps: frontend, backend, databases, deployment',
        'Get instant AI feedback like having a senior mentor 24/7',
        'Master clean code, algorithms & system design',
        'Create a stunning portfolio that gets you hired',
      ]}
      testimonials={[
        {
          name: 'Alex T.',
          text: 'Landed a full-stack role just 4 months after starting!',
        },
        {
          name: 'Priya S.',
          text: 'The AI code reviews are better than most human tutors.',
        },
      ]}
      heroImageUrl="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
      featureImages={[
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPhvNF1iFmeZ0jwPNyswZklbsOQ1ErgfoIg&s',
        'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3',
      ]}
    />
  );
};

export default CodingMastery;
