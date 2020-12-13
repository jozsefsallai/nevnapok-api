import { NextApiRequest, NextApiResponse } from 'next';
import database from '@/database.json';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { date } = req.query;

  const names = [];

  database.forEach(entry => {
    if (entry.namedays.includes(date as string)) {
      names.push(entry.name);
    }
  });

  return res.json({ names });
}
