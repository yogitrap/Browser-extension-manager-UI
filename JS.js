window.localStorage.mode_state = JSON.stringify({backgroundColor:"#edf5fd",backgroundImage:"none",color:"black",secondarycolor:"white",img_url:"assets/images/icon-moon.svg",head_img:"assets/images/logo.svg"})



//Elements addition
let myRequest = new XMLHttpRequest()
myRequest.open("GET","data.json")
myRequest.send()
myRequest.onreadystatechange = function(){
  if (this.readyState === 4 && this.status === 200) {
    let i = 0
    myRequest = JSON.parse(myRequest.responseText)
    console.log(myRequest)
    if(window.localStorage.request === undefined){
      window.localStorage.request = JSON.stringify(myRequest)
    }
    for (let ele of JSON.parse(window.localStorage.request)){
      let div = document.createElement("footer")
      div.className = `test_element${i}`
      div.setAttribute("name","childbox")
      div.style.backgroundColor = JSON.parse(window.localStorage.mode_state)["secondarycolor"]
      let container = document.querySelector(".mini_container")

      let top_side = document.createElement("div")
      top_side.className = "top_side"
      let imgele = document.createElement("img")
      imgele.src = ele.logo
      let descrip = document.createElement("div")
      descrip.className = "description"
      let h5 = document.createElement("h5")
      let p = document.createElement("p")
      h5.textContent = ele.name
      p.textContent = ele.description
      descrip.appendChild(h5)
      descrip.appendChild(p)
      top_side.appendChild(imgele)
      top_side.appendChild(descrip)
      div.appendChild(top_side)


      let bottom_side = document.createElement("div")
      bottom_side.className = "bottom_side"
      let bottom_button = document.createElement("button")
      bottom_button.textContent = "remove"
      bottom_button.setAttribute("class","remove")
      bottom_button.style.color = JSON.parse(window.localStorage.mode_state)["color"]
      bottom_button.style.backgroundColor = JSON.parse(window.localStorage.mode_state)["secondarycolor"]
      bottom_button.addEventListener("click",function(){
      let parent = this.parentElement.parentElement
        parent.remove()
        let items = JSON.parse(window.localStorage.getItem("request"))
        console.log(items)
        items = items.filter(item => JSON.stringify(item) !== JSON.stringify(ele))
        console.log(items)
        window.localStorage.request = JSON.stringify(items)
      })
      let label = document.createElement("label")
      label.setAttribute("for",`mycheckbox${i}`)
      let input = document.createElement("input")
      input.setAttribute("type","checkbox")
      input.setAttribute("id",`mycheckbox${i}`)
      if (ele.isActive === true){
        input.checked = true
      }
      if(input.checked === true){
        div.setAttribute("id","checked")
        
      }
      else{
        div.setAttribute("id","not_checked")
      }
      input.addEventListener("click",function(){
        if(input.checked === true){
          div.setAttribute("id","checked")
          let items = JSON.parse(window.localStorage.getItem("request"))
          let collection = document.querySelectorAll("input")
          collection = [...collection].indexOf(this)
          items[collection - 1].isActive = true
          window.localStorage.request = JSON.stringify(items)
          console.log(items)
          console.log(collection)
        }
         else{
          div.setAttribute("id","not_checked")
          let items = JSON.parse(window.localStorage.getItem("request"))
          let collection = document.querySelectorAll("input")
          collection = [...collection].indexOf(this)
          items[collection - 1].isActive = false
          window.localStorage.request = JSON.stringify(items) 
          console.log(items)
          console.log(collection)
         }
      })
      let fillerdiv = document.createElement("div")
      label.appendChild(input)
      label.appendChild(fillerdiv)
      bottom_side.appendChild(bottom_button)
      bottom_side.appendChild(label)
      div.appendChild(bottom_side)


      
      
      container.appendChild(div)

      i = i + 1
    }
  }
}




// mode switch
let childbox = document.getElementsByTagName("footer")
let mode = document.getElementById("mode_switch")
let butto = document.getElementsByTagName("button")
let header = document.querySelector("header")
let weather = document.querySelector("header button img")
console.log(childbox)



document.querySelector("header img").src = JSON.parse(window.localStorage.mode_state)['head_img']
weather.src = JSON.parse(window.localStorage.mode_state)['img_url']
Object.assign(document.body.style,JSON.parse(window.localStorage.mode_state))
for (let ele of butto){
    ele.style.color = JSON.parse(window.localStorage.mode_state)['color']
    ele.style.backgroundColor =  JSON.parse(window.localStorage.mode_state)['secondarycolor']
}
for (let ele of childbox){
    ele.style.backgroundColor =  JSON.parse(window.localStorage.mode_state)['secondarycolor']
}
header.style.backgroundColor = JSON.parse(window.localStorage.mode_state)['secondarycolor']
console.log(childbox)
console.log(butto)
mode.addEventListener("click",function(){
    if (mode.checked === true){
    window.localStorage.mode_state = JSON.stringify({backgroundColor:"#edf5fd",backgroundImage:"none",color:"black",secondarycolor:"white",img_url:"assets/images/icon-moon.svg",head_img:"assets/images/logo.svg"})
    weather.src = JSON.parse(window.localStorage.mode_state)['img_url']
    document.querySelector("header img").src = JSON.parse(window.localStorage.mode_state)['head_img']
    Object.assign(document.body.style,JSON.parse(window.localStorage.mode_state))
    for (let ele of butto){
    if(ele.style.backgroundColor === "rgb(241, 93, 84)"){
    ele.style.color = JSON.parse(window.localStorage.mode_state)['color']
    }
    else{
    ele.style.color = JSON.parse(window.localStorage.mode_state)['color']
    ele.style.backgroundColor =  JSON.parse(window.localStorage.mode_state)['secondarycolor']
    }
    }
    for (let ele of childbox){
    ele.style.backgroundColor =  JSON.parse(window.localStorage.mode_state)['secondarycolor']
    }
    header.style.backgroundColor = JSON.parse(window.localStorage.mode_state)['secondarycolor']
    }
    else{
    window.localStorage.mode_state = JSON.stringify({backgroundColor:"rgb(5 10 30)",backgroundImage:"linear-gradient(to bottom, #050a1e 50%, #0a1640 100%)",color:"white",secondarycolor:"#2e344a",img_url:"assets/images/icon-sun.svg",head_img:"assets/images/logo - Copy.svg"})
    document.querySelector("header img").src = JSON.parse(window.localStorage.mode_state)['head_img']
    weather.src = JSON.parse(window.localStorage.mode_state)['img_url']
    Object.assign(document.body.style,JSON.parse(window.localStorage.mode_state))
    for (let ele of butto){
    if(ele.style.backgroundColor === "rgb(241, 93, 84)"){
    ele.style.color = JSON.parse(window.localStorage.mode_state)['color']
    }
    else{
    ele.style.color = JSON.parse(window.localStorage.mode_state)['color']
    ele.style.backgroundColor =  JSON.parse(window.localStorage.mode_state)['secondarycolor']
    }
      }  
    for (let ele of childbox){
    ele.style.backgroundColor =  JSON.parse(window.localStorage.mode_state)['secondarycolor']
      }
    header.style.backgroundColor = JSON.parse(window.localStorage.mode_state)['secondarycolor']
    }
})

//remove button
let remove = document.getElementsByClassName("remove")

console.log(remove)

for (let ele of remove){
  ele.addEventListener("click",function(){
    let parent = this.parentElement.parentElement
    parent.remove()
    let items = JSON.parse(window.localStorage.getItem("request"))
    console.log(items)
    items = items.filter(item => JSON.stringify(item) !== JSON.stringify(ele))
    console.log(items)
    window.localStorage.request = JSON.stringify(items)
  })
}








//selectors
let selectors = document.querySelectorAll(".button_group button")
let targetactive = document.querySelectorAll("#checked")
let all = selectors[0]
let active = selectors[1]
let inactive = selectors[2]
all.addEventListener("click",function(){
  all.style.backgroundColor = "rgb(241 93 84)"
  if(JSON.parse(window.localStorage.mode_state)["color"] ==="black"){
  active.style.backgroundColor = "white"
  inactive.style.backgroundColor = "white"
  }
  else{
  active.style.backgroundColor = "rgb(46, 52, 74)"
  inactive.style.backgroundColor = "rgb(46, 52, 74)"
  }
  for(let ele of childbox){
    ele.style.display = "block"
  }
})
active.addEventListener("click",function(){
  active.style.backgroundColor = "rgb(241 93 84)"
  if(JSON.parse(window.localStorage.mode_state)["color"] ==="black"){
  all.style.backgroundColor = "white"
  inactive.style.backgroundColor = "white"
  }
  else{
  all.style.backgroundColor = "rgb(46, 52, 74)"
  inactive.style.backgroundColor = "rgb(46, 52, 74)"
  }
  let targetactive = document.querySelectorAll("#checked")
  let inactivetarget = document.querySelectorAll("#not_checked")
  for(let ele of targetactive){
    ele.style.display = "block"
  }
  for (let ele of inactivetarget){
    ele.style.display = "none"
  }
})
inactive.addEventListener("click",function(){
  inactive.style.backgroundColor = "rgb(241 93 84)"
  if(JSON.parse(window.localStorage.mode_state)["color"] ==="black"){
  active.style.backgroundColor = "white"
  all.style.backgroundColor = "white"
  }
  else{
  active.style.backgroundColor = "rgb(46, 52, 74)"
  all.style.backgroundColor = "rgb(46, 52, 74)"
  }
  let targetactive = document.querySelectorAll("#checked")
  let inactivetarget = document.querySelectorAll("#not_checked")
  for(let ele of inactivetarget){
    ele.style.display = "block"
  }
  for (let ele of targetactive){
    ele.style.display = "none"
  }
})
