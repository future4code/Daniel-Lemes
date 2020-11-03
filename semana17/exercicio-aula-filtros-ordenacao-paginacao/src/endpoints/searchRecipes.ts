import { Request, Response } from 'express';
import { filterRecipes } from '../data/filterRecipes';
import { inputData } from '../types/Recipe';

export const searchRecipes = async (req: Request, res: Response) => {
  try {

    const data: inputData = {
      title: (req.query.title as string).toLowerCase(),
      orderBy: req.query.orderBy as string || 'createdAt',
      orderType: req.query.orderType as string || 'ASC',
      page: Number(req.query.page) <= 0 ? 1 : Number(req.query.page) || 1
    }

    if(!data.title) {
      throw new Error('Você deve inserir um valor para \'title\'')
    }

    const validOrderByValues = ['title', 'createdAt'];

    if(!validOrderByValues.includes(data.orderBy)) {
      throw new Error('Os valores para "orderBy" devem ser "title" ou "createdAt"')
    }

    const validOrderTypeValues = ['ASC', 'DESC'];

    if(!validOrderTypeValues.includes(data.orderType)) {
      throw new Error('Os valores para "orderType" devem ser "ASC" ou "DESC"')
    }

    const result = await filterRecipes(data)

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