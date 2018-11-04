    fetch('json/listj.json').then(resp=>resp.json()).then(text => {
        console.log(text[0].name);
        document.getElementById("genus").innerHTML = (text[0].genus);
        document.getElementById("name").innerHTML = (text[0].name);
        document.getElementById("sname").innerHTML = (text[0].Scientific_name);

    }).catch(err => {
        console.warn(err);
    })   
    
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
    }