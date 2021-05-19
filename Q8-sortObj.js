// Assume there is a json object of this format 
var obj = [ 
    {"id" : 4, "name" : "abc"},
    {"id" : 10, "name" : "ab2"},
    {"id" : 5, "name" : "abc3"},
    {"id" : 6, "name" : "abc5"}
   ]
   // Write a code to sort the object by id 
   
   function sortObj(obj) {
   
     return obj.sort(function (a,b) {
           return a.id - b.id;
       });
   
   }
   
   sortObj(obj)