import { memberApi } from './api';

const memberService = {
  
  getAll: () => {
    return memberApi.get('/members');
  },

  
  create: (data) => {
    return memberApi.post('/members', data);
  },

 
  delete: (id) => {
    return memberApi.delete(`/members/${id}`);
  }
};

export default memberService;