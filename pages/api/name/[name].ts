import { NextApiRequest, NextApiResponse } from 'next';
import database from '@/database.json';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.query;

  const namedays = [];

  const targetName = database.find(entry => entry.name === name);
  if (!targetName) {
    return res.status(404).json({ namedays });
  }

  return res.json({ namedays: targetName.namedays });
}
