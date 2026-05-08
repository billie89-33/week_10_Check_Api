import { useState, useEffect } from 'react';
import memberService from '../services/memberService';

export const useMembers = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMembers = async () => {
    setLoading(true);
    try {
      const res = await memberService.getAll();
      setMembers(res.data);
    } finally {
      setLoading(false);
    }
  };

  const createMember = async (data) => {
    await memberService.create(data);
    fetchMembers();
  };

  const deleteMember = async (id) => {
    await memberService.delete(id);
    fetchMembers();
  };

  useEffect(() => { fetchMembers(); }, []);

  return { members, loading, createMember, deleteMember };
};

 