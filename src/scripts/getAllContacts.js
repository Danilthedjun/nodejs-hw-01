import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  const content = await fs.readFile(PATH_DB, 'utf-8');
  return content;
};

console.log(await getAllContacts());
