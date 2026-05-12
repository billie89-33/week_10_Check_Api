import { localApi } from './api'; 

const jsd12 = {
  
  getAll: () => {
    return localApi.get('/user'); 
  },
};

export default jsd12;