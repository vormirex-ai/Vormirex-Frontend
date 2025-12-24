import React from 'react';
import CustomCoursePage from './CustomCoursePage';

const ExamPrep: React.FC = () => {
  return (
    <CustomCoursePage
      title="Exam Prep"
      description="Score higher with realistic mock exams, smart revision plans, and proven strategies that turn stress into success."
      benefits={[
        'Unlimited full-length practice tests with instant scoring',
        'AI-generated explanations that make weak areas your strengths',
        'Personalized study schedules based on your progress',
        'Techniques used by top scorers worldwide',
      ]}
      testimonials={[
        {
          name: 'Mike L.',
          text: 'Scored 95% on my certification — thank you VORMIREX!',
        },
        {
          name: 'Emma R.',
          text: 'The mock exams felt exactly like the real thing.',
        },
      ]}
      heroImageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
      featureImages={[
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3',
      ]}
    />
  );
};

export default ExamPrep;
