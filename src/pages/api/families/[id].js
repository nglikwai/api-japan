// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { find, update } from '../../../../controllers/familyControllers';
import dbConnect from '../../../../config/dbConnect';
import NextCors from 'nextjs-cors';

dbConnect();

export default async function handler(req, res) {
    await NextCors(req, res, {
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200,
    });
    let data;

    switch (req.method) {
        case 'GET':
            data = await find(req, res)
            break
        case 'PATCH':
            data = await update(req, res)
            break
    }

}

