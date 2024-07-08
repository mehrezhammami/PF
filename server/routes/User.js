module.exports= (app) =>
{ const User=require('../Controller/usercontroller');

app.post("/Signin",User.Signin);
app.post("/Login",User.login);
}