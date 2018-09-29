var sscValue;
var sscmks;
var sscmks1;
var sscradio;
var sscper;
var sscyop;

var intervalue;
var intermks;
var intermks1;
var interradio;
var interper;
var interyop;

var techvalue;
var techmks;
var techmks1;
var techradio;
var techper;
var techyop;

var name;
var rollno;
var email;
var store;
var co;

function getDetails() {
  co=document.getElementById("co").value;
  sscValue=document.getElementById("sscValue").value;
  sscmks=document.getElementById("sscmks");
  sscmks1=document.getElementById("sscmks1");
  sscper=document.getElementById("sscper").value;
  sscyop=document.getElementById("sscyop").value;

  interValue=document.getElementById("interValue").value;
  intermks=document.getElementById("intermks");
  intermks1=document.getElementById("intermks1");
  interper=document.getElementById("interper").value;
  interyop=document.getElementById("interyop").value;

  techValue=document.getElementById("techValue").value;
  techmks=document.getElementById("techmks");
  techmks1=document.getElementById("techmks1");
  techper=document.getElementById("techper").value;
  techyop=document.getElementById("techyop").value;


  if(sscmks.checked){
    sscradio=sscmks.value;

  }else{
    sscradio=sscmks1.value;


  }
    if(intermks.checked){
      interradio=intermks.value;

    }else{
      interradio=intermks1.value;

}
if(techmks.checked){
  techradio=techmks.value;

}else{
  techradio=techmks1.value;

}
console.log(sscValue+" "+sscradio+" "+sscper+" "+sscyop);
console.log(interValue+" "+interradio+" "+interper+" "+interyop);
console.log(techValue+" "+techradio+" "+techper+" "+techyop);






   name=document.getElementById("name").value;
   rollno=document.getElementById("rollno").value;
   email=document.getElementById("email").value
   console.log(name+" "+rollno+" "+email);
   if(!window.indexedDB){
     console.log("indexed db is not working...!")
   }
   var request=window.indexedDB.open("svitDB",1);
   request.onerror=e=>{
     console.log(e);}
     request.onupgradeneeded=e=>{
       var dbname=e.target.result;
       dbname.createObjectStore("cse",{keyPath:"roll"});
       // dbname.createObjectStore("cse")
       console.log("upgraded...!");
     }
       request.onsuccess=e=>{
         var dbname=e.target.result;
         store=dbname.transaction("cse","readwrite").objectStore("cse");
         store.put(
           {

           "name":name,
           "roll":rollno,
           "email":email,
           "co": co,


           "eduDetails":
           {
             "ssc":[
               sscValue,
             sscradio,
             sscper,
             sscyop
           ],
        "inter" :[
          intervalue,
          interradio,
          interper,
          interyop
        ],
        "btech" :[
          techValue,
          techradio,
          techper,
          techyop
        ]
      }
}
      );
       console.log("success...!");
     }
   }
