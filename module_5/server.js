const http= require('http');
const fs=require('fs');
const URL= require('url');
let server= http.createServer((req,res)=>{

    if(req.url=='/')
    {
        let sampleUrl="https://www.w3schools.com/nodejs/nodejs_http.asp";
        let urlObj= URL.parse(sampleUrl,true);
        
        let hostName=urlObj.hostname;
        let searchName=urlObj.search;
        let pathName=urlObj.pathname;

        //return http response
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(`hostName:${hostName}, searchName: ${searchName}, pathName: ${pathName}`);
        res.end();
        // res.writeHead(200,{'Content-Type':'text/html'})
        // res.write('This is Home Page');
        // res.end();
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