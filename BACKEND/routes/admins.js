const router = require("express").Router();
const { response } = require("express");
let Admin = require("../models/admin");

router.post("/login",async(req,res) => {
    const {username,password} = req.body;
    try {
        const check = await Admin.findOne({username:username,password:password})
        if(check){
            res.json("exist admin");
        }
        else{
            res.json("not exist admin");
        }
    } catch (e) {
        res.json("error login")
    }
})

module.exports = router;