import { Response } from 'express'

export class ResponseData {
  static withSuccess(
    res: Response,
    data: object,
    message: string = 'Success',
    statusCode: number = 200
  ) {
    res.status(statusCode).json({
      success: true,
      message,
      data,
    })
  }

  static withError(
    res: Response,
    message: string = 'Something happen in requesting process',
    statusCode: number = 500
  ) {
    res.status(statusCode).json({
      success: false,
      message,
    })
  }
}
