import { Application, Request, Response } from 'express';
import multer from 'multer';
const upload = multer();

export const createRoutes = (app: Application) => {
  app.get('/', function (req: Request, res: Response) {
    res.sendFile(process.cwd() + '/views/index.html');
  });

  app.post(
    '/api/fileanalyse',
    upload.single('upfile'),
    function (req: Request, res: Response) {
      res.json({
        name: req.file?.originalname,
        type: req.file?.mimetype,
        size: req.file?.size,
      });
    }
  );
};
