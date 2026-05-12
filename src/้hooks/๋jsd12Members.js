import { useState, useEffect } from 'react';
import jsd12 from '../services/jsd12'; // คุณเรียกชื่อนี้ (jsd12)

export const useLocalMembers = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMembers = async () => {
    setLoading(true);
    setError(null);
    try {
      // แก้จาก memberService เป็น jsd12 ตามที่ import มาข้างบนครับ
      const res = await jsd12.getAll(); 
      
      setMembers(res.data);
    } catch (err) {
      setError("ไม่สามารถเชื่อมต่อกับ Server ได้");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return { members, loading, error, fetchMembers };
};