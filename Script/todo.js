var todoItems = JSON.parse(localStorage.getItem("todoData"));
console.log(todoItems);

var completedData=JSON.parse(localStorage.getItem("completeInfo")) || []

todoItems.map(function(ele,index){
var tr=document.createElement("tr")
var td1=document.createElement("td")
td1.innerText=ele.itemName;

var td2=document.createElement("td")
td2.innerText=ele.itemQty;

var td3=document.createElement("td")
td3.innerText=ele.itemPrior;

var td4=document.createElement("td")
td4.innerText="Completed"
td4.style.color="brown"
td4.hover="blue"
td4.style.cursor="pointer";

td4.addEventListener("click", function(){
    markAsCompleted(ele)
})


tr.append(td1,td2,td3,td4)
document.querySelector("#body").append(tr)

})

function markAsCompleted(ele){
    console.log(ele)
   completedData.push(ele)
   localStorage.setItem("completeInfo",JSON.stringify(completedData))
}
