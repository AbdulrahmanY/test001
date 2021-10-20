let names = []
let names1 = []
localStorage.name = names
let mainDiv = document.querySelector("#mainDiv")
let FavShow = document.querySelector("#FavShow")
let aAction = document.querySelector("#aAction")
let Ahome = document.querySelector("#Ahome")
let aHome = document.querySelector("#aHome")
let homeDiv = document.querySelector("#homeDiv")
let modal = document.getElementById("myModal");
let modal1 = document.getElementById("myModal1");
let modal2 = document.getElementById("myModal2");
let modal3 = document.getElementById("myModal3");
let modal4 = document.getElementById("myModal4");
let span = document.getElementsByClassName("close")[0];
let span1 = document.getElementsByClassName("close1")[0];
let span2 = document.getElementsByClassName("close2")[0];
let span3 = document.getElementsByClassName("close3")[0];
let span4 = document.getElementsByClassName("close4")[0];
let img2 = document.querySelector("#img2")
let img3 = document.querySelector("#img3")
let img4 = document.querySelector("#img4")
let img5 = document.querySelector("#img5")
let img6 = document.querySelector("#img6")
let h22 = document.querySelector("#h22")
let h221 = document.querySelector("#h221")
let h222 = document.querySelector("#h222")
let h223 = document.querySelector("#h223")
let h224 = document.querySelector("#h224")
let h3 = document.querySelector("#h3")
let p1 = document.querySelector("#p1")
let p2 = document.querySelector("#p2")
let h33 = document.querySelector("#h33")
let p11 = document.querySelector("#p11")
let p22 = document.querySelector("#p22")
let h34 = document.querySelector("#h34")
let h35 = document.querySelector("#h35")
let h36 = document.querySelector("#h36")
let p12 = document.querySelector("#p12")
let p23 = document.querySelector("#p23")
let p13 = document.querySelector("#p13")
let p24 = document.querySelector("#p24")
let p14 = document.querySelector("#p14")
let p25 = document.querySelector("#p25")
fetch('https://api.tvmaze.com/shows')
.then(function(response) {
  return response.json()})
  .then(function (json) { 
    Ahome.onclick= function(){
      aHome.onclick()
    }
    function display(){
      for(let i = 1 ; i<40;i++){
     
        let items = document.querySelector("#items1")
        let p = document.createElement("p")
        let item = document.createElement("div")
        item.setAttribute("class", "item");
        let h2 = document.createElement("h2")
        h2.setAttribute("class", "cardName");
        h2 = json[i].name
        let img = document.createElement("img")
        img.src=json[i].image.medium
        let button1 = document.createElement("button")
        button1.setAttribute("class", "button1");
        button1.innerHTML = "Add to your Favorites Show"
        //console.log(json[i])
        items.appendChild(item)
        item.append(h2)
        item.append(img)
        item.append(button1)
        console.log(h2)
        button1.addEventListener('click',function(){
          button1.style.display="none"
            names.push(json[i].name)
            localStorage.name = names
            //console.log(localStorage.name)
          
        })
        img.onclick = function() {
          modal.style.display = "block";
          img2.src=img.src
          h22.innerHTML = h2
          h3.innerHTML= json[i].genres
          p1.innerHTML = "Rating:" + json[i].rating.average
          p2.innerHTML="Language:"+ json[i].language
          //modal.append(img2)
          
        }
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
         modal.style.display = "none";
        }
        //item.append(h2)
        //console.log(json[i].name)
        //console.log(json) //Comedy , Romance  ,   Drama
      
    
  }
    }




    aHome.onclick = function() {
      //document.querySelector("#intro").style.display = "none"
      document.querySelector("#RomancePage").style.display = "none"
      document.querySelector("#ComedyPage").style.display = "none"
      document.querySelector("#actionPage").style.display = "none"
      homeDiv.style.display = "block"
    for(let i = 1 ; i<40;i++){
     
      let items = document.querySelector("#items1")
      let p = document.createElement("p")
      let item = document.createElement("div")
      item.setAttribute("class", "item");
      let h2 = document.createElement("h2")
      h2.setAttribute("class", "cardName");
      h2 = json[i].name
      let img = document.createElement("img")
      img.src=json[i].image.medium
      let button1 = document.createElement("button")
      button1.setAttribute("class", "button1");
      button1.innerHTML = "Add to your Favorites Show"
      //console.log(json[i])
      items.appendChild(item)
      item.append(h2)
      item.append(img)
      item.append(button1)
      console.log(h2)
      button1.addEventListener('click',function(){
        button1.style.display="none"
          names.push(json[i].name)
          localStorage.name = names
          //console.log(localStorage.name)
        
      })
      img.onclick = function() {
        modal.style.display = "block";
        img2.src=img.src
        h22.innerHTML = h2
        h3.innerHTML= json[i].genres
        p1.innerHTML = "Rating:" + json[i].rating.average
        p2.innerHTML="Language:"+ json[i].language
        //modal.append(img2)
        
      }
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
       modal.style.display = "none";
      }
      //item.append(h2)
      //console.log(json[i].name)
      //console.log(json) //Comedy , Romance  ,   Drama
    
  
}
}
    

    /////////////////////////////////////////////////////////////////////////////////////////////////


    aAction.onclick = function() {
      //document.querySelector("#intro").style.display = "none"
      document.querySelector("#actionPage").style.display = "block"
      homeDiv.style.display = "none"
      document.querySelector("#RomancePage").style.display = "none"
      document.querySelector("#ComedyPage").style.display = "none"
      console.log(json[1].genres[0]);
      if(json[1].genres[0] == "Action"){
        console.log("true");
      }
      for(let i = 1;i<80;i++){
        for (let j = 0 ; j<5;j++){
          if(json[i].genres[j] == "Action"){
            console.log(json[i]);
            let items = document.querySelector("#items2")
            let p = document.createElement("p")
            let item = document.createElement("div")
            item.setAttribute("class", "item");
            let h2 = document.createElement("h2")
            h2.setAttribute("class", "cardName");
            h2 = json[i].name
           let img = document.createElement("img")
           img.src=json[i].image.medium
           let button2 = document.createElement("button")
           button2.setAttribute("class", "button1");
           button2.innerHTML = "Add to your Favorites Show"


            
            button2.addEventListener('click',function(){
             button2.style.display="none"
               names.push(json[i].name)
              localStorage.name = names
              console.log(localStorage.name)
              //console.log(localStorage.name)
        
               })
            
           img.onclick = function() {
            modal1.style.display = "block";
            img3.src=img.src
            h221.innerHTML = h2
            h33.innerHTML= json[i].genres
            p11.innerHTML = "Rating:" + json[i].rating.average
            p22.innerHTML="Language:"+ json[i].language
            //modal.append(img2)
            
          }
          // When the user clicks on <span> (x), close the modal
          span1.onclick = function() {
           modal1.style.display = "none";
          }
      
           items.append(item)
           item.append(h2)
         item.append(img)
         item.append(button2)
          }
        }
      }
      
    }

    ////////////////////////////////////////////////////////////////////////////////////


    aComedy.onclick = function() {
      //document.querySelector("#intro").style.display = "none"
      document.querySelector("#ComedyPage").style.display = "block"
      homeDiv.style.display = "none"
      document.querySelector("#actionPage").style.display = "none"
      document.querySelector("#RomancePage").style.display = "none"
      console.log(json[1].genres[0]);
      
      for(let i = 1;i<110;i++){
        for (let j = 0 ; j<5;j++){
          if(json[i].genres[j] == "Comedy"){
            console.log(json[i]);
            let items = document.querySelector("#items4")
            let p = document.createElement("p")
            let item = document.createElement("div")
            item.setAttribute("class", "item");
            let h2 = document.createElement("h2")
            h2.setAttribute("class", "cardName");
            h2 = json[i].name
           let img = document.createElement("img")
           img.src=json[i].image.medium
           let button1 = document.createElement("button")
           button1.setAttribute("class", "button1");
           button1.innerHTML = "Add to your Favorites Show"
     
     
      
           button1.addEventListener('click',function(){
             button1.style.display="none"
               names.push(json[i].name)
               localStorage.name = names
               console.log(localStorage.name)
             //console.log(localStorage.name)
             
           })
           img.onclick = function() {
            modal2.style.display = "block";
            img4.src=img.src
            h222.innerHTML = h2
            h34.innerHTML= json[i].genres
            p12.innerHTML = "Rating:" + json[i].rating.average
            p23.innerHTML="Language:"+ json[i].language
            //modal.append(img2)
            
          }
          // When the user clicks on <span> (x), close the modal
          span2.onclick = function() {
           modal2.style.display = "none";
          }
      
           items.append(item)
           item.append(h2)
         item.append(img)
         item.append(button1)
          }
        }
      }
      
    }

    ///////////////////////////////////////////////////////////////////////////////////

    aRomance.onclick = function() {
      //document.querySelector("#intro").style.display = "none"
      homeDiv.style.display = "none"
      document.querySelector("#actionPage").style.display = "none"
      document.querySelector("#RomancePage").style.display = "block"
      document.querySelector("#ComedyPage").style.display = "none"
      console.log(json[1].genres[0]);
      for(let i = 1;i<150;i++){
        for (let j = 0 ; j<5;j++){
          if(json[i].genres[j] == "Romance"){
            console.log(json[i]);
            let items = document.querySelector("#items5")
            let p = document.createElement("p")
            let item = document.createElement("div")
            item.setAttribute("class", "item");
            let h2 = document.createElement("h2")
            h2.setAttribute("class", "cardName");
            h2 = json[i].name
           let img = document.createElement("img")
           img.src=json[i].image.medium
           let button1 = document.createElement("button")
           button1.setAttribute("class", "button1");
           button1.innerHTML = "Add to your Favorites Show"


        
          button1.addEventListener('click',function(){
          button1.style.display="none"
          names.push(json[i].name)
          localStorage.name = names
          console.log(localStorage.name)
        //console.log(localStorage.name)
        
      })
            
           img.onclick = function() {
            modal3.style.display = "block";
            img5.src=img.src
            h223.innerHTML = h2
            h35.innerHTML= json[i].genres
            p13.innerHTML = "Rating:" + json[i].rating.average
            p24.innerHTML="Language:"+ json[i].language
            //modal.append(img2)
            
          }
          // When the user clicks on <span> (x), close the modal
          span3.onclick = function() {
           modal3.style.display = "none";
          }
      
           items.append(item)
           item.append(h2)
         item.append(img)
         item.append(button1)
          }
        }
      }
      
    }

    ///////////////////////////////////////////////////////////////////////////////////////

    FavShow.onclick = function() {
      //document.querySelector("#intro").style.display = "none"
      homeDiv.style.display = "none"
      document.querySelector("#actionPage").style.display = "none"
      document.querySelector("#RomancePage").style.display = "none"
      document.querySelector("#ComedyPage").style.display = "none"
      document.querySelector("#FavShowPage").style.display = "block"
      console.log(json[1].genres[0]);
      
      for(let i =1 ; i < 200;i++){
        //console.log(localStorage.names);
        localStorage.name = names
        //console.log(localStorage.names);
        console.log(names);
        for(let j = 0;j<=i;j++){
          if(names.length >= 2){
            if(names[j]===names[i+j]){
              names.splice(j,1)
              console.log("true");
              
            }
          }
          if(names[j]===json[i].name){
            console.log(names[j])
            let items = document.querySelector("#items6")
            let p = document.createElement("p")
            let item = document.createElement("div")
            item.setAttribute("class", "item");
            let h2 = document.createElement("h2")
            h2.setAttribute("class", "cardName");
            h2 = json[i].name
            let img = document.createElement("img")
            img.src=json[i].image.medium
            console.log(json[i])
            

            img.onclick = function() {
              modal4.style.display = "block";
              img6.src=img.src
              h224.innerHTML = h2
              h36.innerHTML= json[i].genres
              p14.innerHTML = "Rating:" + json[i].rating.average
              p25.innerHTML="Language:"+ json[i].language
              //modal.append(img2)
              
            }
            // When the user clicks on <span> (x), close the modal
            span4.onclick = function() {
             modal4.style.display = "none";
            }
            items.appendChild(item)
            item.append(h2)
            item.append(img)
            //names.splice(j,1)
          }
        }
    }
    }
    display()
  })
  