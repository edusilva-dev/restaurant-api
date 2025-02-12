import { NextFunction, Request, Response } from 'express'
import { AppError } from "@utils/AppError";

export function errorHandling(error: any, request: Request, response: Response, _: NextFunction) {
  if (error instanceof(AppError)) {
    return response.status(error.statusCode).json({ message: error.message })
  }

  return response.status(501).json({ message: error.message })
}