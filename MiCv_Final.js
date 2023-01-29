var ekis= 1
function mostrar(){
     ekis++
     
     if (ekis%2==0){
     document.getElementById('midiv').style.display = 'block';
     }else if(ekis%2!=0){
         
     document.getElementById('midiv').style.display = 'none';
     ekis=1;
     }
 


}


    var imagen =["https://marketing4ecommerce.net/wp-content/uploads/2020/11/nueva-portada-enero-1-6-1280x720.jpg","https://www.imagar.com/wp-content/uploads/2020/12/diseno_web_con_wordpress-1.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsW37ClsaIPo6O_AXyZiZxkdAmW6Zvh9NrUQ&usqp=CAU"]
     var x = 0
     function next(){
         var ima = document.getElementById("ima")
         x++
         if (x>=imagen.length){
             x=0
         }
         ima.src=imagen[x]
     }
     function prev(){
      x--
      var ima= document.getElementById("ima")
      if (x<0){
          x = imagen.length -1
      }
       ima.src=imagen[x]  
     }
