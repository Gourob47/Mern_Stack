const http= require('http');
const fs=require('fs');

let server= http.createServer((req,res)=>{

    if(req.url=='/')
    {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('This is Home Page');
        res.end();
    }
    else if(req.url=='/about')
    {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('This is About Page');
        res.end();
    }
    else if(req.url=='/contact')
    {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('This is Contact Page');
        res.end();
    }
    else if(req.url=='/file-write')
    {
        fs.writeFile('module_5/demo.txt','Hello World',(err)=>{
            if(!err)
            {
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write('File Write Success');
                res.end();
            }
            else
            {
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write('File Write Failed');
                res.end();
            }
        })
    }

})
server.listen(3000,()=>{
    console.log("Server Listen on port 3000")
})