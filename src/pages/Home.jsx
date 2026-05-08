

import { useState } from 'react';
import { useMembers } from '../้hooks/useMembers';
import UserSection from '../components/UserSection';
import AdminSection from '../components/Admin';



const Home = () => {
  
  const { members, loading, createMember, deleteMember } = useMembers();
  
  
  const [sector, setSector] = useState(""); 

  
  const renderHeader = () => {
    if (sector === "user") return "Generation Thailand Home - User Sector";
    if (sector === "admin") return "Generation Thailand Home - Admin Sector";
    return "Generation Thailand React - Assessment";
  };

  return (
    <div className="flex flex-col items-center w-full space-y-12 py-10 animate-in fade-in duration-700">
      
      
      <header className="text-center">
        <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight leading-tight transition-all">
          {renderHeader()}
        </h1>
      </header>

      
      <div className="flex gap-8">
        <button 
          onClick={() => setSector("user")}
          className={`px-10 py-3 rounded-xl font-bold shadow-sm transition-all duration-300 border
            ${sector === "user" 
              ? "bg-white border-blue-200 text-slate-900 shadow-md scale-105" 
              : "bg-slate-100 border-transparent text-slate-400 hover:bg-white hover:border-slate-200"
            }`}
        >
          User Home Section
        </button>

        <button 
          onClick={() => setSector("admin")}
          className={`px-10 py-3 rounded-xl font-bold shadow-sm transition-all duration-300 border
            ${sector === "admin" 
              ? "bg-white border-blue-200 text-slate-900 shadow-md scale-105" 
              : "bg-slate-100 border-transparent text-slate-400 hover:bg-white hover:border-slate-200"
            }`}
        >
          Admin Home Section
        </button>
      </div>

      {/* ส่วนแสดงผล Content (Table / Form) */}
      <div className="w-full max-w-5xl">
        {loading ? (
          <div className="flex flex-col items-center py-20 space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="text-slate-400 font-medium animate-pulse">กำลังดึงข้อมูลจาก API...</p>
          </div>
        ) : (
          <div className="transition-all duration-500">
            {/* สลับโหมดการแสดงผลตาม State sector */}
            {sector === "user" && (
              <div className="animate-in slide-in-from-bottom-5 duration-500">
                <UserSection members={members} />
              </div>
            )}
            
            {sector === "admin" && (
              <div className="animate-in slide-in-from-bottom-5 duration-500">
                <AdminSection 
                  members={members} 
                  onCreate={createMember} 
                  onDelete={deleteMember} 
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;