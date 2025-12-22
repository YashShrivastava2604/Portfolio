export const projects = [
  // 1️⃣ KEEP FITIFY AS-IS
  {
    id: 1,
    title: 'Fitify',
    shortDesc: 'AI-powered food nutrition tracking app',
    fullDesc: `Fitify is a comprehensive nutrition tracking application that leverages AI/ML to recognize food items from images and provide detailed nutritional analysis. Built as a final-year project, it combines cutting-edge computer vision with a seamless user experience.`,
    challenges: [
      'Integrating ML models for accurate food recognition',
      'Handling real-time nutrition data processing',
      'Creating an intuitive UI for complex data',
    ],
    features: [
      'Food recognition via image upload using TensorFlow',
      'Real-time calorie and macro tracking',
      'Personalized meal plans based on dietary goals',
      'Social sharing and community features',
      'Progress analytics and insights',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'TensorFlow', 'Cloudinary', 'Express'],
    metrics: {
      performance: '95%',
      users: '500+',
      accuracy: '92%',
    },
    images: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
    ],
    github: 'https://github.com',
    live: 'https://fitify.vercel.app',
    learnings: [
      'Implementing ML pipelines in production',
      'Optimizing image processing for web',
      'Building scalable APIs',
    ],
  },

  // 2️⃣ E-STORE
  {
    id: 2,
    title: 'E-Store',
    shortDesc: 'Full-stack e-commerce platform with admin control',
    fullDesc: `E-Store is a complete e-commerce web application featuring product management, secure authentication, cart functionality, and order handling. It focuses on clean architecture, scalable APIs, and a smooth user experience for both users and admins.`,
    challenges: [
      'Designing scalable REST APIs',
      'Managing cart and order state efficiently',
      'Handling image uploads and admin permissions',
    ],
    features: [
      'User authentication and authorization',
      'Product listing and search',
      'Cart and checkout flow',
      'Admin dashboard for product management',
      'Cloudinary-based image uploads',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Cloudinary'],
    metrics: {
      modules: '5+',
      api_endpoints: '20+',
    },
    images: [
      'https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&h=600&fit=crop',
    ],
    github: 'https://github.com',
    live: '',
    learnings: [
      'End-to-end feature ownership',
      'Backend data modeling',
      'Role-based access control',
    ],
  },

  // 3️⃣ ALL-CHAT
  {
    id: 3,
    title: 'All-Chat',
    shortDesc: 'Real-time full-stack chat application',
    fullDesc: `All-Chat is a real-time messaging application supporting one-to-one conversations with a clean UI and efficient backend architecture. It emphasizes real-time communication, state management, and scalable backend design.`,
    challenges: [
      'Handling real-time message delivery',
      'Managing user presence and state',
      'Designing a responsive chat UI',
    ],
    features: [
      'Real-time messaging',
      'User authentication',
      'Conversation history',
      'Online/offline status handling',
      'Clean and responsive interface',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    metrics: {
      latency: '<200ms',
      messages: '10k+',
    },
    images: [
      'https://images.unsplash.com/photo-1525186402429-b4ff38bedbec?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=600&fit=crop',
    ],
    github: 'https://github.com',
    live: '',
    learnings: [
      'WebSocket communication',
      'State synchronization',
      'Real-time system design',
    ],
  },

  // 4️⃣ VISION BOARD
  {
    id: 4,
    title: 'Vision Board',
    shortDesc: 'Goal visualization and self-improvement web app',
    fullDesc: `Vision Board is a personal productivity and visualization tool that helps users define goals, visualize their ideal future, and stay consistent through reminders and reflection. The project focuses on clarity, simplicity, and long-term habit building.`,
    challenges: [
      'Designing a minimal yet motivating UI',
      'Structuring personal goal data',
      'Keeping the experience distraction-free',
    ],
    features: [
      'Create and manage vision boards',
      'Goal categorization and reflections',
      'Daily motivation and reminders',
      'Clean and calming UI',
    ],
    tech: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    metrics: {
      consistency: 'Daily use focus',
    },
    images: [
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=800&h=600&fit=crop',
    ],
    github: 'https://github.com',
    live: '',
    learnings: [
      'User-centered design',
      'Building for long-term engagement',
      'Clarity-driven UX',
    ],
  },
  {
  id: 5,
    title: 'Job Copilot',
    shortDesc: 'AI-powered job application assistant',
    fullDesc: `Job Copilot is an AI-driven web application designed to simplify and personalize the job application process. Users can upload their resume, list skills and projects, and paste a job description to generate tailored cover letters, professional emails, and resume improvement suggestions using Gemini AI.`,
    challenges: [
      'Designing effective prompts for job-specific personalization',
      'Structuring resume and project data for AI consumption',
      'Balancing useful AI output with user control',
    ],
    features: [
      'Generate job-specific cover letters',
      'Create professional application emails',
      'Analyze job descriptions for key skills and requirements',
      'Suggest resume tweaks aligned with the job role',
      'Editable AI-generated output',
    ],
    tech: ['React', 'Node.js', 'Gemini API', 'MongoDB'],
    metrics: {
      turnaround: '<10s per generation',
    },
    images: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    ],
    github: '',
    live: '',
    learnings: [
      'Prompt engineering',
      'Working with generative AI APIs',
      'Designing AI-assisted user workflows',
    ],
  }

];
