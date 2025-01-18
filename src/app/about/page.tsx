// AboutPage.tsx
import Footer from '@/components/Footer';
import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center text-gray-500">About Me</h1>
        <p className="mt-4 text-lg text-gray-700 text-center">
          Hi, I’m [Your Name], a passionate React frontend developer focused on creating user-friendly and performant web applications. I specialize in building modern, responsive, and accessible UI/UX with React, TypeScript, and various frontend technologies.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-500">Who am I?</h2>
            <p className="mt-4 text-lg text-gray-700">
              I am a React developer with a strong understanding of frontend technologies. My goal is to create seamless user experiences and deliver high-quality code. I have experience with modern JavaScript tools, UI frameworks, and methodologies like React, Redux, and Next.js.
            </p>
          </div>

          {/* Right Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-500">Skills & Technologies</h2>
            <ul className="mt-4 text-lg text-gray-700 list-disc pl-5">
              <li>React & React Router</li>
              <li>TypeScript</li>
              <li>Next.js & Server-side Rendering</li>
              <li>State Management (Redux, Context API)</li>
              <li>CSS-in-JS (Styled Components, Emotion)</li>
              <li>Responsive Design & Mobile-First Approach</li>
              <li>Version Control (Git & GitHub)</li>
              <li>API Integration (RESTful APIs, GraphQL)</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-500">Let’s Connect!</h2>
          <p className="mt-4 text-lg text-gray-700">
            I’m always open to new opportunities and collaborations. Feel free to reach out to me through my email or connect with me on LinkedIn.
          </p>
          <div className="mt-4">
            <a href="https://github.com/Mohammad-ghiasi" className="text-blue-500 hover:underline">My Gitghub</a>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
