import { Router, Request, Response } from "express";
import { ParsedQs } from 'qs';

import ContestRoute from "./contest"
const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
  })
router.use('/contest', ContestRoute);
  
export type ApiRequest = Request<{}, any, any, ParsedQs, Record<string, any>>;
export type ApiResponse = Response<any, Record<string, any>>;


export default router;