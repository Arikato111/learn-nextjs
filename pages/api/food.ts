// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Data from '@/public/Data.json'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    let ran_num = Math.floor(Math.random() * Data.length)
    res.status(200).json(Data[ran_num])
}
