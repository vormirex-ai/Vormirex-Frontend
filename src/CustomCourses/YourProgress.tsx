import React from 'react';
import CustomCoursePage from './CustomCoursePage';

const YourProgress: React.FC = () => {
  return (
    <CustomCoursePage
      title="Your Progress"
      description="See exactly how far you've come with stunning dashboards, badges, and insights that keep you motivated every day."
      benefits={[
        'Beautiful heatmaps showing your daily learning streaks',
        'Earn exclusive badges for milestones and mastery',
        'AI recommendations to close skill gaps faster',
        'Track improvement across all subjects in one place',
      ]}
      testimonials={[
        {
          name: 'Jordan P.',
          text: 'Seeing my streak grow keeps me coming back every day.',
        },
        {
          name: 'Lisa W.',
          text: 'Finally understand where I need to improve — game changer!',
        },
      ]}
      heroImageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
      featureImages={[
        'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1542744094-3a5e1c0a4d5d?ixlib=rb-4.0.3',
        'https://images.unsplash.com/photo-1551434678-e76b9232c0a5?ixlib=rb-4.0.3',
      ]}
    />
  );
};

export default YourProgress;
