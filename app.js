const express=require('express');
const path=require('path');
const hbs=require('hbs');
const app=express();
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));
hbs.registerHelper('getCurrentYear',
  ()=>{
    return new Date().getFullYear()
  });
hbs.registerHelper('screamIt',(text)=>{
  return text.toUpperCase();
});
app.use((req,res,next)=>{
  res.render('middle');
})
app.get('/',(req,res)=>{
   // res.send('hello Express');
   res.render('index',{
    title:'Home page',
    message:'Welcome'
   });
});
app.get('/about', (req,res)=>{
  res.render('about',{
    title:'About Page'
  });
});
app.get('/bad', (req,res)=>{
  res.send({
    errorMessage:'somethig goes wrong'
  });
});
app.listen(5000);