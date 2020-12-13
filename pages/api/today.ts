import { NextApiRequest, NextApiResponse } from 'next';
import database from '@/database.json';

const pad = (n: number): string => n < 10 ? `0${n}` : `${n}`;

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const dateString = `${pad(month)}-${pad(day)}`;

  const names = [];

  database.forEach(entry => {
    if (entry.namedays.includes(dateString)) {
      names.push(entry.name);
    }
  });

  return res.json({ names });
}
