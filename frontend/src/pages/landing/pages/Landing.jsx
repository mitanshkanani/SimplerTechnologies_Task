import React from "react";
import Home from "./Home";

const Landing = () => {
  return (
    <div className="relative min-h-screen pt-16 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-violet-100 dark:from-[#181926] dark:via-[#181926] dark:to-[#23243a]">
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20 dark:opacity-60">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-200/30 via-transparent to-violet-200/30 dark:from-blue-900/40 dark:via-transparent dark:to-purple-900/40 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-200/20 via-transparent to-pink-200/20 dark:from-purple-900/30 dark:via-transparent dark:to-pink-900/30 animate-pulse animation-delay-3000"></div>
        </div>
        <div className="absolute inset-0 opacity-40 dark:opacity-70">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-300 to-cyan-300 dark:from-blue-900 dark:to-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-20 w-80 h-80 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-900 dark:to-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-900 dark:to-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-r from-pink-300 to-rose-300 dark:from-pink-900 dark:to-rose-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-blob animation-delay-6000"></div>
        </div>
        <div className="absolute inset-0 opacity-25 dark:opacity-50">
          <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-gradient-to-r from-cyan-200 to-blue-200 dark:from-cyan-900 dark:to-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-2xl animate-blob animation-delay-1000"></div>
          <div className="absolute top-2/3 right-1/3 w-40 h-40 bg-gradient-to-r from-violet-200 to-purple-200 dark:from-violet-900 dark:to-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-2xl animate-blob animation-delay-3000"></div>
          <div className="absolute top-1/2 left-10 w-32 h-32 bg-gradient-to-r from-emerald-200 to-teal-200 dark:from-emerald-900 dark:to-teal-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl animate-blob animation-delay-5000"></div>
        </div>
        <div className="absolute inset-0 opacity-3 dark:opacity-10">
          <div className="absolute top-20 right-20 w-20 h-20 border border-slate-300/60 dark:border-white/20 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 border border-slate-250/50 dark:border-white/15 rotate-12 animate-pulse"></div>
        </div>
        <div
          className="absolute inset-0 opacity-0 dark:opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(100,116,139,0.4) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative z-10 backdrop-blur-[1px]">
        <Home/>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-6000 {
          animation-delay: 6s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-5000 {
          animation-delay: 5s;
        }
      `}</style>
    </div>
  );
};

export default Landing;
