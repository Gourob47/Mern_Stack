const express= require("express");
const mult= require('multer')
const app= express();
const multer=mult();
const cookieParser = require("cookie-parser");

//response.send==> indicate body;
//response.end==> indicate ending point';
//String Response
//---------------
app.get('/string1',(req,res)=>{
    res.send("This is String Get Response")
})

app.post('/string2',(req,res)=>{
    res.send("This is String Post Response");
})

//Response Status Code
//--------------------
app.get('/status',(req,res)=>{
    res.status(401).send("UnAuthorised");
})

//JSON Response
//----------------
app.get('/jsonres',(req,res)=>{
    let data={
        name: "Gourob",
        age:"24",
        position:"SDE1",
        address:{
            village:"Shamshernagar",
            city:"Sylhet"
        }
    }
    res.status(201).json(data);
})

//Download Response
//-----------------

app.get('/download',(req,res)=>{
    res.download('./module_6(Exercise)/uploads/leetcode.jpg')
})

//Response Redirect
//-----------------

app.get('/redirect',(req,res)=>{
    res.redirect('http://localhost:3000/json')
})

//Response Header
//---------------

app.get('/resheader',(req,res)=>{
    res.append('name',"Gourob");
    res.append('age',24);
    res.append('position',"SDE1");

    res.status(201).end("Headers append");

})


//Response Cookies Set
//------------------
app.get('/rescookie',(req,res)=>{
    
    res.cookie("name","Gourob");
    res.cookie("id",505);
    res.status(201).end("Cookie Set Success");

})

//Response cookies Clear
//------------------------

app.get('/rescookiesclear',(req,res)=>{
    res.clearCookie('name');
    res.clearCookie('id');

    res.status(202).send("Response cookie clear")
})

//Request Cookie
//--------------

app.use(cookieParser());

app.get('/',(req,res)=>{
    let cookie=req.cookies['Cookie_1'];
   res.status(200).json({
    cookie:cookie
   });
})

//Request query
//------------

app.get('/requery',(req,res)=>{
    let fname=req.query.fname;
    let lname=req.query.lname;

    res.status(200).send(fname+" "+lname)

})



app.post('/requery',(req,res)=>{
    let fname=req.query.fname;
    let lname=req.query.lname;

    res.status(200).send(fname+" "+lname)

})

//Request Using Params
//-------------------

app.post('/requery/:name',(req,res)=>{
    let name=req.params.name;
    
        res.status(200).send(name)
    
})


//Request Header
//----------------
app.get('/reqheader',(req,res)=>{
   // let fname=req.header('fname');
   // let lname=req.header('lname');

    let fname=req.headers.fname;
    let lname=req.headers.lname;

    res.status(200).send(fname+" "+lname)

})

app.post('/reqheader',(req,res)=>{
    // let fname=req.header('fname');
    // let lname=req.header('lname');
 
     let fname=req.headers.fname;
     let lname=req.headers.lname;
 
     res.status(200).send(fname+" "+lname)
 
 })

 //JSON request
 //-----------

app.use(express.json());

app.post('/jsonrequest',(req,res)=>{
    let body= req.body;
    res.status(200).send(body);
})




//multipart form Data request
//---------------------------
//* multer.array() is not used in fileupload

//app.use(multer.array());
//app.use(express.static('public'))

app.post('/multipart',(req,res)=>{
    let body= req.body;
    res.status(200).send(body);
})

//file upload using multer and Request
//----------------------------------

let storage=mult.diskStorage({
    destination:function (req,file,callback) {
        callback(null,'./module_6(Exercise)/uploads');     
    },
    filename:function(req,file,callback){
        callback(null,file.originalname)
    }

})

let upload=mult({storage:storage}).single('myfile');
app.post('/fileupload',(req,res)=>{
    upload(req,res,(err)=>{
        if(!err)
        {
            res.send("File Upload Success")
        }
        else
        {
            res.send("File Upload Failed")
        }
    })
})

//middileware-> 1. Application Level, 2. Route Level
//Application Level middleware

app.use((req,res,next)=>{
    console.log("Application level middleware used")
    next();
})

//Route Level Middileware

app.use('/middleware',(req,res,next)=>{
        console.log("Route level middleware used")
        next();
})

app.get('/middleware',(req,res)=>{
    res.status(200).send("Middleware using api")
})

app.get('/middleware1',(req,res)=>{
    res.status(200).send("Middleware using api")
})


app.listen(3000,()=>{
    console.log(`Server Listen On Port 3000`)
})