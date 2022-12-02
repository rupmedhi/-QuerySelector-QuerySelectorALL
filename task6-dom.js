var list2=document.getElementsByClassName("list-group-item");
list2[1].style.backgroundColor="#1bd91b";

var invisible=document.getElementsByClassName("list-group-item");
 list2[2].style.visibility="hidden";




var list=document.querySelectorAll(".list-group-item");
list[1].style.color="green";

var odd=document.querySelectorAll("li:nth-child(odd)");
for(var i=0; i<odd.length; i++)
{
    odd[i].style.backgroundColor="green";
}