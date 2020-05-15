var arr=[
{
    "id":"1",
   "name":"Airlift",
   "img":"./photos/MV5BMGE1ZTkyOTMtMTdiZS00YzI2LTlmYWQtOTE5YWY0NWVlNjlmXkEyXkFqcGdeQXVyNjQ3ODkxMjE@._V1_UY209_CR2,0,140,209_AL_.jpg",
   "rating":"3"
},
{
    "id":"2",
   "name":"azhar",
   "img":"./photos/MV5BZjdiNjI1NWItZmJiOC00MWVjLThhNmMtMzIyZGU5NjdjMmE0XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_UY209_CR9,0,140,209_AL_.jpg",
   "rating":"2"
},
{
    "id":"3",
    "name":"Bajrangi Bhaijan",
    "img":"./photos/MV5BMjE1NjQ5ODc2NV5BMl5BanBnXkFtZTgwOTM5ODIxNjE@._V1_UY209_CR3,0,140,209_AL_.jpg",
    "rating":"4"
 },
 {
    "id":"4",
    "name":"Bajirao Mastani",
    "img":"./photos/MV5BYjMwNDU1MTQtNDBjMS00YTVlLWE4NWYtODBmZDY1YTkzZWI1XkEyXkFqcGdeQXVyNTc5OTMwOTQ@._V1_UY209_CR2,0,140,209_AL_.jpg",
    "rating":"5"
 },
 {
    "id":"5",
    "name":"Prem Ratan Dhan Payo",
    "img":"./photos/MV5BYzY0NWEzYTctNzg5Yi00OTM0LTlkMGMtYWE1MTYyZjdjNWFjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY209_CR2,0,140,209_AL_.jpg",
    "rating":"6"
 }
];

var para=document.getElementById("dikhao");
func1();
function func()
{
let v=document.getElementById("input").value;
if(v.length==0)
func1();
else
func2(v);
}
function func1()
{
    para.innerHTML=''; 
   
arr.forEach(temp=>{
    const card = document.createElement('div');
    card.classList = 'card-body';
   
    const content=`
    <div class="card">
        <img class="card-img-bottom" src="${temp.img}"/>
            <div class="card-body">
               <h1>${temp.name}</h1>
                <h5>rating:${temp.rating}</h5>
             </div>
    </div>
    `;
    para.innerHTML+=content;
});

}
function func2(v)
{
    para.innerHTML=''; 
    arr.forEach(temp=>{
        let s=temp.name;
        let vv=v;
        let g=0;
       if(s.length<vv.length)
       {
        g=9;
       }
        for(let i=0;i<vv.length&&g===0;i++)
        {
           if(vv[i]!=s[i])
           {
           g=9;
           }
        }
       
     if(g===0)
       {
        const card = document.createElement('div');
        card.classList = 'card-body';
       
        const content=`
        <div class="card">
            <img class="card-img-bottom" src="${temp.img}"/>
                <div class="card-body">
                   <h1>${temp.name}</h1>
                    <h5>rating:${temp.rating}</h5>
                 </div>
        </div>
        `;
        para.innerHTML+=content;
}
    });
    if(para.innerHTML=='')
    para.innerHTML="NOT FOUND";
    




}
