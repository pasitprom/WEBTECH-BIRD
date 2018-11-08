var xhttp  
    xhttp = new XMLHttpRequest(); 
    xhttp.onreadystatechange = function() {     
        if (this.readyState == 4 && this.status == 200) {         
            myFunction(this);     
        } 
    }; 
    xhttp.open("GET", "1testxml.xml", true); 
    xhttp.send(); 
 
function myFunction(xml) {

   
     var x, i, txt, xmlDoc;
      xmlDoc = xml.responseXML; 
        

      genus = xmlDoc.getElementsByTagName("genus"); 
      sgenus = xmlDoc.getElementsByTagName("subgenus");  
      name = xmlDoc.getElementsByTagName("name");
      sname = xmlDoc.getElementsByTagName("Scientific_name");

      for (i = 0; i < genus.length; i++) {          
      document.write(
        genus[i].childNodes[0].nodeValue+" "
        +sgenus[i].childNodes[0].nodeValue+" "
        //+name[i].childNodes[0].nodeValue+" "+
        +sname[i].childNodes[0].nodeValue+" "+
        
        "<br>");     
      }       

}