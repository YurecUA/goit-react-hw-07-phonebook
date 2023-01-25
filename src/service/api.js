import axios from 'axios';

const contactsAPI = axios.create({
  baseURL: `https://63c93580904f040a9658afb8.mockapi.io/api/v1/contacts`
});

export const getItemsContacts = async () => {
 const { data } = await contactsAPI.get();
 return data;
};

export const removeItemsContacts = async (id) => {
  const { data } = await contactsAPI.delete(id);
  return data;
 };

export const addItemsContacts = async (contact) => {
 const { data } = await contactsAPI.post('', contact);
 return data;
};
