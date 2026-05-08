const UserSection = ({ members }) => {
  return (
    <div className="่ overflow-x-auto rounded-2xl border border-slate-100 shadow-sm bg-white animate-in fade-in duration-500">

      <table className="w-full text-left ">

        <thead className="bg-slate-50/50 border-b border-slate-100">
          <tr>
            <th className="px-6 py-4 text-sm font-bold text-slate-600">Name</th>
            <th className="px-6 py-4 text-sm font-bold text-slate-600">
              Last Name
            </th>
            <th className="px-6 py-4 text-sm font-bold text-slate-600">
              Position
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-50">
          {members.map((member) => (
            <tr
              key={member.id}
              className="hover:bg-slate-50/50 transition-colors duration-200"
            >
              <td className="px-6 py-4 text-slate-600">{member.name}</td>
              <td className="px-6 py-4 text-slate-600">{member.lastname}</td>
              <td className="px-6 py-4 text-slate-600">{member.position}</td>
            </tr>
            
          ))}
        </tbody>

      </table>

    </div>
  );
};

export default UserSection;
