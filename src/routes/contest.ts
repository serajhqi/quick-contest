import { Router } from "express";

const router = Router();

router.get("/",(req,res)=>{
    res.send('smale')
})
router.get("/adminList",(req,res)=>{
    res.send('sma[e')
})
router.get("/list",(req,res)=>{
    res.send('sma[e')
})
router.get("/mine",(req,res)=>{
    res.send('sma[e')
})
router.get("/:id",(req,res)=>{
    res.send('sma[e')
})
export default router;