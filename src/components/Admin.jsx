import { useState } from 'react';

const AdminSection = ({ members, onCreate, onDelete }) => {
  const [formData, setFormData] = useState({ name: '', lastname: '', position: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.lastname || !formData.position) return alert("Please fill all fields");
    onCreate(formData);
    setFormData({ name: '', lastname: '', position: '' }); // ล้างฟอร์ม
  };

  return (
    <div className="space-y-10 animate-in slide-in-from-bottom-4 duration-700">
      {/* --- ส่วนฟอร์มสร้าง User --- */}
      <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-md">
        <h3 className="text-lg font-black text-slate-800 mb-6">Create User Here</h3>
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
          <input
            className="flex-1 min-w-[150px] px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none transition-all"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            className="flex-1 min-w-[150px] px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none transition-all"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
          />
          <input
            className="flex-1 min-w-[150px] px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none transition-all"
            placeholder="Position"
            value={formData.position}
            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
          />
          <button
            type="submit"
            className="px-8 py-2 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 hover:shadow-lg active:scale-95 transition-all"
          >
            Save
          </button>
        </form>
      </div>

      {/* --- ส่วนตารางจัดการ --- */}
      <div className="overflow-x-auto rounded-2xl border border-slate-100 shadow-sm bg-white">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="px-6 py-4 text-sm font-bold text-slate-600">Name</th>
              <th className="px-6 py-4 text-sm font-bold text-slate-600">Last Name</th>
              <th className="px-6 py-4 text-sm font-bold text-slate-600">Position</th>
              <th className="px-6 py-4 text-sm font-bold text-slate-600 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {members.map((member) => (
              <tr key={member.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 text-slate-600">{member.name}</td>
                <td className="px-6 py-4 text-slate-600">{member.lastname}</td>
                <td className="px-6 py-4 text-slate-600">{member.position}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => onDelete(member.id)}
                    className="text-red-400 hover:text-red-600 font-bold transition-colors"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminSection;