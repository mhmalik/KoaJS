var koa = require('koa');
var app = koa();

app.use(function *(){
//console.log("app start here new wait.");
this.body = 'Hello World';
});

app.listen(3000);
console.log("The app is listening, Port:3000");
