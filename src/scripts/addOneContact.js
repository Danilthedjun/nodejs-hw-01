import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const existingContacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
  const newContact = [createFakeContact()];

  await fs.writeFile(
    PATH_DB,
    JSON.stringify([...existingContacts, ...newContact], null, 2),
  );
  console.log('Contact added successfully!');
};

await addOneContact();
