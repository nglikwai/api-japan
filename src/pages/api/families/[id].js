// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nc from 'next-connect'
import { find, update } from '../../../../controllers/familyControllers';
import dbConnect from '../../../../config/dbConnect';
const handler = nc();

dbConnect();

handler
    .get(find)

handler
    .patch(update)


export default handler;