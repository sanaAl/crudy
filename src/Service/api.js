import  axios  from 'axios';

const usersUrl ='http://localhost:3003/users';
export const GetUsers = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/${id}`);
}
export const addUser= async(user)=>{
    return await axios.post(usersUrl,user);
}

export const editUser = async(id,user)=>{
    return await axios.put(`${usersUrl}/${id}`,user);
}

export const deleteUser= async(id)=>{
    return await axios.delete(`${usersUrl}/${id}`);
}