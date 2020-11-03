import { Request, Response } from 'express';

import { inputData } from '../types/User';
import { filterUser } from './../data/filterUser';


export const searchUsers = async (req: Request, res: Response) => {
  try {

    const data: inputData = {
      name: (req.query.name as string),
      email:req.query.email as string,
      type:req.query.type as string,
      orderBy: req.query.orderBy as string || 'name',
      orderType: req.query.orderType as string || 'ASC',
      page: Number(req.query.page) <= 0 ? 1 : Number(req.query.page) || 1
    }

    if(!data.name) {
      throw new Error('Você deve inserir um valor para \'name\'')
    }

    const validOrderByValues = ['name', 'type'];

    if(!validOrderByValues.includes(data.orderBy)) {
      throw new Error('Os valores para "orderBy" devem ser "name" ou "type"')
    }

    const validOrderTypeValues = ['ASC', 'DESC'];

    if(!validOrderTypeValues.includes(data.orderType)) {
      throw new Error('Os valores para "orderType" devem ser "ASC" ou "DESC"')
    }

    const result = await filterUser(data)

    if(!result.length) {
      res.statusCode = 404;
      throw new Error('Nenhuma receita encontrada')
    }

    res.status(200).send(result)

  }catch(e) {
    res.status(400).send(
      {
        message: e.message 
      }
    )
  }
}