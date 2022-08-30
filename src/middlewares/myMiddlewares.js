const headerCheck = function(req,res,next){
    if(req.headers.isfreeappuser)  
     next()
    else   
     res.send("Please provide header")
}


module.exports.headerCheck= headerCheck