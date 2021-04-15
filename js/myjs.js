function includeHTML(elemtId, ulHref){
        var z, i, elmnt, file, xhttp;
        z = document.getElementsByTagName("*");
        for(i = 0; i < z.length; i++){
          elmnt = z[i];
          file = elmnt.getAttribute("kay-include-html");
          if(file){
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
              if(this.readyState == 4){
                if(this.status == 200){elmnt.innerHTML = this.responseText;}
                if(this.status == 404){elmnt.innerHTML = "Page not found";}
                elmnt.removeAttribute("kay-include-html");
                includeHTML();
              }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            // console.log(document.getElementById('home-page'));
            checkLinkToHoverEffect(elemtId, ulHref);
            return;
          }
        }
  }

   function checkLinkToHoverEffect(elemtId, ulHref){
    //   let strElemt = ;
     if(null != document.getElementById(String.toString(elemtId))){
        document.getElementById(String.toString(elemtId)).classList.add('hover-link');
        return;
     }
    //   if(window.location.href.includes(ulHref)){
    //       if(null != document.getElementById(elemtId)){
    //         document.getElementById(elemtId).classList.add('hover-link');
    //       }
    //   }
  }