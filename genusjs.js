    fetch('json/listj.json').then(resp=>resp.json()).then(text => {
        console.log(text[0].name);

        var txt = "";
        var i = 1;
        for (j=0; j < 43; j++){
            idd = text[j].name;
            if (text[j].genus!=text[j+1].genus) {

                    txt += '<h2><a href="info'+i+'.html">'+(text[j].genus)+"</a></h2>"
                    i++;
            }   
        
        document.getElementById("tes").innerHTML = txt;
    }
        

    }).catch(err => {
        console.warn(err);
    })   
    
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
    }