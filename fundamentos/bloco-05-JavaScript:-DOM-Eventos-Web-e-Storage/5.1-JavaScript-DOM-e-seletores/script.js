      document.getElementById("page-title").innerText = "O Fabuloso Destino de Amélie Poulain";
      
      /* console.log(document.getElementById("paragraph").innerText); */

      document.getElementById("second-paragraph").style.color = "pink";
      document.getElementById("subtitle").style.backgroundColor = "blue";

      let paragrafos = document.getElementsByClassName("test");
      console.log(paragrafos);
      paragrafos[0].style.color = "red";

      for (let i = 0; i < 2; i += 1) {
        console.log(paragrafos[i].innerText);
      }
      /* console.log(paragrafos[i].innerText); */