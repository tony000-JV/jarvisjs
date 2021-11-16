function jarviswebshooter(){
    jarvismakeroute("/","about.html");
    jarvismakeroute("/works","works.html");
    jarvismakeroute("/service","service.html");
    jarvismakeroute("/contact","contact.html");
    jarvisrender();
}


//manage all the routes in array
var fridayhas=[];
function jarvismakeroute(path,loadto){
    fridayhas[path]=loadto;
}


//get path from URL and append the content
function jarvisrender(){
    // window.location.pathname; 
    // window.history.pushState('page2', 'Title', '/marrk1');
    let needtoload=window.location.pathname; 
    console.log(fridayhas[needtoload])
    let avengers=document.getElementById("avenger-squad");
    fetch(fridayhas[needtoload])
        .then(response=>response.text())
        .then(t=>{
            avengers.innerHTML=t;
        });
}

//used to get the content from path
function jarvisgetcontent(getcont){
    fetch(getcont)
    .then(response=>response.text())
    .then(t=>{
      let tt= JSON.stringify(t)
       return tt;
    });
}


//set the path to URL and call to get view to user
function jarvismakeview(path){
     window.history.pushState('', '=', path);
     jarvisrender();
}


jarviswebshooter();