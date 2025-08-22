const prjct = document.getElementsByClassName("project");
const link = document.getElementsByClassName("links");

for(let i = 0 ; i < prjct.length ; i++){
    let a = i + 1;
    prjct[i].addEventListener(("click"), function(){alert('there is now project ' + a + ' now')})
}


for(let j = 0 ; j < link.length ; j++){
    let a = j + 1;
    link[j].addEventListener(("click"), function(){alert(link[j].innerHTML + " has not been created yet")})
}