import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  if (number < 1) {
    return console.log('enter number');
  }
  let newContacts = [];
  const existingContacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));

  for (let index = 0; index < number; index++) {
    newContacts.push(createFakeContact());
  }

  const allContacts = [...existingContacts, ...newContacts];
  await fs.writeFile(PATH_DB, JSON.stringify(allContacts, null, 2));
  console.log('Contacts added successfully!');
};

generateContacts(1);
