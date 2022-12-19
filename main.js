var koa = require('koa');
const app     =new  koa();
const port = process.env.PORT || 3000;

app.use(async ctx=>{
    ctx.body='Hellow from railway';
});

// START THE SERVER
app.listen(port, function () {
    console.log(`Listening at port: ${port}/...`);
});