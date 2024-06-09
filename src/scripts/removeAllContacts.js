import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  const zero = [];
  await fs.writeFile(PATH_DB, JSON.stringify(zero, null, 2));
  console.log('remove all');
};

await removeAllContacts();
