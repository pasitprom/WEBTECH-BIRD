    fetch('json/listj.json').then(resp=>resp.json()).then(text => {
        console.log(text[0].name);

        var txt = "";
        for (j=1; j < 10; j++){
            idd = text[j].name;
            document.getElementById("nok" + j).innerHTML="<b>Genus:</b> "+(text[j].genus)
        + "<br><b>Name:</b> "+(text[j].name)
        + "<br><b>Scientific name:</b> "+(text[j].Scientific_name);
        }


    }).catch(err => {
        console.warn(err);
    })

    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
    }