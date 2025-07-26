const AnimatedBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-violet-100 dark:from-[#181926] dark:via-[#181926] dark:to-[#23243a]">
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
        {/* ...copy the rest of the animation divs... */}
      </div>
      <div className="relative z-10 backdrop-blur-[1px]">{children}</div>
    </div>
  );
};

export default AnimatedBackground;
