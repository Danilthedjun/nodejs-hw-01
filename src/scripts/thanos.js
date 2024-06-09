import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  let contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));

  contacts = contacts.filter(() => Math.random() < 0.5);

  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  console.log('Tanos snapped his fingers... half of the contacts are gone!');
};

await thanos();
