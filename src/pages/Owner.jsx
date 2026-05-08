const Owner = () => {
  return (
    <div className="flex flex-col items-center space-y-10 py-10 animate-in fade-in duration-1000">
      
      
      <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight text-center">
        03 Bowvorn (Bank) - JSD12
      </h1>

     
      <div className="relative group">
        
        <div className="w-64 h-64 md:w-80 md:h-80 bg-slate-200 border-2 border-slate-300 rounded-2xl shadow-inner flex flex-col items-center justify-center overflow-hidden transition-all duration-500 group-hover:shadow-xl group-hover:border-blue-200">
          
          
          <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
             <div className="absolute w-full h-[1px] bg-slate-400 rotate-45"></div>
             <div className="absolute w-full h-[1px] bg-slate-400 -rotate-45"></div>
          </div>
          
          <span className="text-slate-500 font-bold text-lg z-10">picture</span>
          
          
          <img  src="https://img2.pic.in.th/th.jpg" alt="th" className="absolute inset-0 w-full h-full object-cover" /> 
         
        </div>
        
       
        <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-50 rounded-2xl -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
      </div>

     
      <div className="max-w-3xl space-y-6 px-6">
        <h3 className="text-xl font-extrabold text-slate-700 text-center md:text-left">
          Short Biography:
        </h3>
        <p className="text-slate-600 leading-relaxed text-center md:text-left text-sm md:text-base antialiased">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      
      <button 
        onClick={() => window.history.back()}
        className="mt-8 text-sm font-bold text-blue-500 hover:text-blue-700 transition-colors"
      >
        ← Back to Home
      </button>
    </div>
  );
};

export default Owner;