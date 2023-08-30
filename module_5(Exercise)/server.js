const http= require('http');
const URL= require('url');
const fs=require('fs');
let server= http.createServer((req,res)=>{

    if(req.url=='/')
    {
        //url module
        let sampleUrl="https://www.w3schools.com/nodejs/nodejs_http.asp";
        let urlObj= URL.parse(sampleUrl,true);
        
        let hostName=urlObj.host;
        let searchName=urlObj.search;
        let pathName=urlObj.pathname;

        //return http response
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(`hostName:${hostName}, searchName: ${searchName}, pathName: ${pathName}`);
        res.end();
    }

    else if(req.url=='/read')
    {
        //file read in async way
        fs.readFile('index.html',(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        })

        //file read in sync way
        // let data=fs.readFileSync('index.html');
        // res.writeHead(200,{'Content-Type':'text/html'});
        // res.write(data);
        // res.end();

       
    }

    else if(req.url=='/write')
    {
        //file write in async way
        fs.writeFile('demo.txt','Hello Gourob',(err)=>{
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


        //file write in sync way
        // let err=fs.writeFileSync('demo.txt','Gourob SDE1');
        // if(!err)
        // {
        //     res.writeHead(200,{'Content-Type':'text/html'})
        //     res.write('File Write Success');
        //     res.end();
        // }
        // else
        // {
        //     res.writeHead(200,{'Content-Type':'text/html'})
        //     res.write('File Write Failed');
        //     res.end();
        // }
  
    }
    else if(req.url=='/rename'){

        //file rename in async way
        fs.rename('demo.txt','demo1.txt',(err)=>{
            if(!err){
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write('File Rename Success');
                res.end(); 
            }
            else
            {
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write('File Write Failed');
                res.end();
            }
        })

        //file rename in sync way

        // let err=fs.renameSync('demo.txt','demo1.txt');
        // if(!err){
        //     res.writeHead(200,{'Content-Type':'text/html'})
        //     res.write('File Rename Success');
        //     res.end(); 
        // }
        // else
        // {
        //     res.writeHead(200,{'Content-Type':'text/html'})
        //     res.write('File Write Failed');
        //     res.end();
        // }
    }

    else if(req.url=='/delete')
    {
        //file delete in async way
       fs.unlink('demo1.txt',(err)=>{
        if(!err){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write('File Delete Success');
            res.end(); 
        }
        else
        {
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write('File Delete Failed');
            res.end();
        }
        })

        //file delete in async way
        // let err=fs.unlinkSync('demo1.txt');
        // if(!err){
        //     res.writeHead(200,{'Content-Type':'text/html'})
        //     res.write('File Delete Success');
        //     res.end(); 
        // }
        // else
        // {
        //     res.writeHead(200,{'Content-Type':'text/html'})
        //     res.write('File Delete Failed');
        //     res.end();
        // } 

    }

    else if(req.url=='/fileexist'){
        //file exist check in async way
        fs.exists('ind.html',(bool)=>{
            if(bool)
            {
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write('File Exist');
                res.end(); 
            }
            else
            {
                res.writeHead(200,{'Content-Type':'text/html'})
                res.write('File does not exist');
                res.end();
            }
        })

        //file exist check in sync way
        // let exist=fs.existsSync('ind.html');
        // if(exist){
        //     res.writeHead(200,{'Content-Type':'text/html'})
        //     res.write('File Exist');
        //     res.end(); 
        // }
        // else
        // {
        //     res.writeHead(200,{'Content-Type':'text/html'})
        //     res.write('File does not exist');
        //     res.end();
        // }

    }

   
})
server.listen(3000,()=>{
    console.log("Server Listen on port 3000")
})