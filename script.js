
var heading=document.createElement("h5"); 
heading.innerText="CALCULATOR";
document.querySelector(".calculator").append(heading);
function break1(){
 var break1=document.createElement("br");
 document.querySelector(".calculator").append(break1);
}
  
  var x = document.createElement("input");
  x.setAttribute("type", "text");
  x.setAttribute("name","dis");
  x.setAttribute("placeholder", "");
  x.setAttribute("value","");
  x.setAttribute("id","fil")
  document.querySelector(".calculator").append(x);

break1();
var a=[];

function display1(){
   var val=document.querySelector("input");
   val.value=a.join('')+"1";
   a.push(1);
}
function display2(){
  var val=document.querySelector("input");
  val.value=a.join('')+"2";
  a.push(2);
}
function display3(){
  var val=document.querySelector("input");
  val.value=a.join('')+"3";
  a.push(3);
}
function display4(){
  var val=document.querySelector("input");
  val.value=a.join('')+4;
  a.push(4);
}
function display5(){
  var val=document.querySelector("input");
  val.value=a.join('')+5;
  a.push(5);
}
function display6(){
  var val=document.querySelector("input");
  val.value=a.join('')+6;
  a.push(6);
}
function display7(){
  var val=document.querySelector("input");
  val.value=a.join('')+7;
  a.push(7);
}
function display8(){
  var val=document.querySelector("input");
  val.value=a.join('')+8;
  a.push(8);
}
function display9(){
  var val=document.querySelector("input");
  val.value=a.join('')+9;
  a.push(9);
}
function display0(){
  var val=document.querySelector("input");
  val.value=a.join('')+0;
  a.push(0);
}
function displayminus(){
  var val=document.querySelector("input");
  val.value=a.join('')+'-';
  a.push("-");
}
function displayplus(){
  var val=document.querySelector("input");
  val.value=a.join('')+'+';
  a.push("+");
}
function displaymul(){
  var val=document.querySelector("input");
  val.value=a.join('')+'x';
  a.push("x");
}
function displaydiv(){
  var val=document.querySelector("input");
  val.value=a.join('')+'/';
  a.push("/");
}
function displaymod(){
  var val=document.querySelector("input");
  val.value=a.join('')+'%';
  a.push("%");
}
function displayclear(){
  a.length=0;
  var val=document.querySelector("input");
  val.value="";
}



  function btn(btnname,type,name,funcname){
  var button1=document.createElement("button");
  button1.innerHTML = btnname;
  button1.type = type;
  button1.name = name;
  button1.onclick=funcname;
  document.querySelector(".calculator").append(button1);
  }

  btn("1","submit","btn1",display1);
  btn("2","submit","btn2",display2);
  btn("3","submit","btn3",display3);
  btn("-","submit","btnsub",displayminus);
  btn("4","submit","btn4",display4);
  btn("5","submit","btn5",display5);
  btn("6","submit","btn6",display6);
  btn("+","submit","btnplus",displayplus);
  btn("7","submit","btn7",display7);
  btn("8","submit","btn8",display8);
  btn("9","submit","btn9",display9);
  btn("x","submit","btnmul",displaymul);
  btn("0","submit","btn0",display0);
  btn("/","submit","btn1div",displaydiv);
  btn("%","submit","btn1mod",displaymod);
  btn("clear","reset","btnclear",displayclear);
  btn("calculate","submit","btnenter",operation)
  

function operation(){
  var c=["+","-","/","%","x"];
  for(var i=0;i<a.length ;i++){
    for(var j=0;j<c.length;j++){
      if(a[i]===c[j]){
        var n=i;
        break;
      }
    }
  }
  
  var k=a.slice(0,n);
  p=k.join('');
  var l=a.slice(n+1,a.length);
  q=l.join('');
  if(a[n]=='+'){
    var val=document.querySelector("input");
    var sum=parseInt(p)+parseInt(q);
    val.value=sum;
  }
  else if(a[n]=='-'){
    var val=document.querySelector("input");
    var diff=parseInt(p)-parseInt(q);
    val.value=diff;
  }
  else if(a[n]=='x'){
    var val=document.querySelector("input");
    var mul=parseInt(p)*parseInt(q);
    val.value=mul;
  }
  else if(a[n]=='/'){
    var val=document.querySelector("input");
    var div=parseInt(p)/parseInt(q);
    val.value=div;
  }
  else if(a[n]=='%'){
    var val=document.querySelector("input");
    var mod=parseInt(p)%parseInt(q);
    val.value=mod;
  }
}
document.addEventListener('keyup', (event) => {
  var name = event.which;
  var key=event.key;
  if(name>=48 && name<=57){
  a.push(key);
  }else if(name===8){
    return;
  }else{
    alert("Only numbers are allowed");
  }
  
}, false);
  
  
  
 

