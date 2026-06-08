import React, { useState, useEffect } from 'react';
import { BookOpen, CheckCircle, Trophy, Star, ArrowRight } from 'lucide-react';

export default function App() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [showBalloons, setShowBalloons] = useState(false);

  // Trigger gamification effects
  const handleCompleteTask = () => {
    setIsCompleted(true);
    setShowBalloons(true);
    
    // Stop rendering balloons after animation completes to clean up DOM
    setTimeout(() => {
      setShowBalloons(false);
    }, 6000);
  };

  const handleReset = () => {
    setIsCompleted(false);
    setShowBalloons(false);
  };

  // Generate random balloons
  const renderBalloons = () => {
    const balloonColors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-400', 'bg-purple-500', 'bg-pink-500'];
    const balloons = [];
    
    for (let i = 0; i < 15; i++) {
      const randomColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
      const randomLeft = Math.floor(Math.random() * 100); // 0 to 100vw
      const randomDelay = Math.random() * 2; // 0 to 2s delay
      const randomScale = 0.8 + Math.random() * 0.4; // 0.8 to 1.2 scale

      balloons.push(
        <div 
          key={i} 
          className="absolute bottom-0 balloon-anim z-50 flex flex-col items-center"
          style={{ 
            left: `${randomLeft}%`, 
            animationDelay: `${randomDelay}s`,
            transform: `scale(${randomScale})` 
          }}
        >
          {/* Balloon Body */}
          <div className={`w-12 h-16 rounded-[50%] ${randomColor} shadow-inner relative`}>
            {/* Balloon Reflection/Shine */}
            <div className="absolute top-2 left-2 w-3 h-5 bg-white/30 rounded-full rotate-[-45deg]"></div>
          </div>
          {/* Balloon Tie */}
          <div className={`w-2 h-2 ${randomColor} mt-[-2px] rotate-45`}></div>
          {/* Balloon String */}
          <div className="w-[1px] h-24 bg-gray-300 opacity-50"></div>
        </div>
      );
    }
    return balloons;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans p-6 relative overflow-hidden flex flex-col">
      {/* --- Inline CSS for Custom Gamification Animations --- */}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(100vh); opacity: 1; }
          100% { transform: translateY(-120vh); opacity: 0.8; }
        }
        .balloon-anim {
          animation: floatUp 4s ease-in forwards;
        }
        @keyframes popIn {
          0% { transform: scale(0.5); opacity: 0; }
          70% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .pop-in-anim {
          animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin-bg {
          animation: spinSlow 10s linear infinite;
        }
      `}</style>

      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg z-10">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-black text-gray-900 tracking-tight z-10">TechLearn LMS</span>
        </div>
        <div className="flex items-center gap-3 z-10">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-gray-900">Rachith Poojary</p>
            <p className="text-xs text-gray-500">Roll: 252010035</p>
          </div>
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center border border-blue-200">
            <span className="text-blue-700 font-bold">RP</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        
        {/* State 1: Task Pending */}
        {!isCompleted && (
          <div className="max-w-lg w-full bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Java Capstone Project</h2>
            <p className="text-gray-500 mb-8">Submit your final project code to complete the module. This task is required to earn your certificate.</p>
            
            <div className="bg-gray-50 border border-gray-200 border-dashed rounded-xl p-6 text-center mb-8">
              <p className="text-sm font-medium text-gray-600">project_final_v2.zip</p>
              <p className="text-xs text-gray-400">Successfully uploaded</p>
            </div>

            <button 
              onClick={handleCompleteTask}
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              Complete Assignment
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* State 2: Gamified Task Completed (Pop-in animation) */}
        {isCompleted && (
          <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 text-center pop-in-anim relative overflow-hidden">
            
            {/* Spinning background effect behind trophy */}
            <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-64 h-64 bg-yellow-100/50 rounded-full blur-3xl -z-10 spin-bg"></div>

            <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner relative">
              <Trophy className="w-12 h-12 text-yellow-600" />
              <div className="absolute -top-2 -right-2">
                <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              </div>
            </div>
            
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Level Up!</h2>
            <p className="text-gray-600 mb-2 font-medium">Assignment successfully completed.</p>
            <p className="text-sm text-gray-400 mb-8">You've earned +500 XP and unlocked the Java Expert Badge!</p>

            <div className="flex items-center justify-center gap-2 text-green-600 font-bold mb-8 bg-green-50 py-3 rounded-lg border border-green-100">
              <CheckCircle className="w-5 h-5" />
              Task Marked as Done
            </div>

            <button 
              onClick={handleReset}
              className="text-gray-500 font-semibold hover:text-gray-800 text-sm underline"
            >
              Reset Prototype
            </button>
          </div>
        )}
      </div>

      {/* Overlay Gamification Layer: Render Balloons floating up */}
      {showBalloons && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {renderBalloons()}
        </div>
      )}
    </div>
  );
}
