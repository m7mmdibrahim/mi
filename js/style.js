var siteName=document.getElementById("siteName");
var siteUrl=document.getElementById("siteUrl");

var bookMarksList;

if(localStorage.getItem("websites")==null)
{
    bookMarksList=[];
}
else
{
    bookMarksList=JSON.parse( localStorage.getItem("websites"));
    displaySite()
}

function addsite()
{
    if(siteName.value==""&&siteUrl.value=="")
    {
        document.getElementById("alertName").innerHTML=`<div class="alert alert-danger w-75 m-auto  py-2 text-center" role="alert">
        Name is required </div>`;
        document.getElementById("alertUrl").innerHTML=`<div class="alert alert-danger w-75 m-auto  py-2 text-center" role="alert">
        URL is required </div>`;
    }
    else if(siteName.value=="")
    {
        document.getElementById("alertName").innerHTML=`<div class="alert alert-danger w-75 m-auto  py-2 text-center" role="alert">
        Name is required </div>`;
        document.getElementById("alertUrl").innerHTML=``;
    }
    else if(siteUrl.value=="")
    {
        document.getElementById("alertUrl").innerHTML=`<div class="alert alert-danger w-75 m-auto  py-2 text-center" role="alert">
        URL is required </div>`;
        document.getElementById("alertName").innerHTML=``;
    }
   else
   {
    document.getElementById("alertName").innerHTML=``;
    document.getElementById("alertUrl").innerHTML=``;
    var bookMark=
    {
        name:siteName.value,
        url:siteUrl.value,
    };
    bookMarksList.push(bookMark);
    localStorage.setItem("websites",JSON.stringify(bookMarksList));
    displaySite();
    clearForm();
}
}

function displaySite()
{
    var cartona=``;
    for(var i=0 ; i<bookMarksList.length;i++)
    {
        
        cartona+=`<div class="  d-flex   my-3 w-100  align-items-center justify-content-between   mybookmark" id="siteNumber`+i+`"> 
        <div >
        <h2 class="pl-4   ">`+bookMarksList[i].name+`</h2></div>
        <div class="d-flex  w-100  pr-3  justify-content-end    py-3  ">
        <a class="btn btn-dark  text-light  px-4 ml-5  " href="https://`+bookMarksList[i].url+`"target="_blank">Visit</a>
        <button class="btn btn-success px-4 py-2 ml-3 " onclick="updateSite(`+i+`);"> Update</button>
        <button class="btn btn-danger px-4 py-2 ml-3 " onclick="deleteSite(`+i+`);"> Delete</button>
        </div>
        
    </div>`;
    }

    document.getElementById("displaySite").innerHTML=cartona;
    
}
function clearForm()
{
    siteName.value="";
    siteUrl.value="";
}

function deleteSite(i)
{
    bookMarksList.splice(i,1);
    localStorage.setItem("websites",JSON.stringify(bookMarksList));
    displaySite();
}

function updateSite(index)
{
    siteName.value=bookMarksList[index].name;
    siteUrl.value=bookMarksList[index].url;
    if(document.getElementById("add-update").innerHTML=="Submit");
    {
        document.getElementById("add-update").innerHTML="Update";  
    }
    if(document.getElementById("add-update").innerHTML=="Update")
    {
        document.getElementById("Submit-update") .innerHTML= `<button class="btn btn-warning px-4 py-2 mysubmit" id="add-update" onclick="submitUpdate(`+index+`)">Update</button>`

        var content=``;
    for(var i=index ; i==index;i++)
    {
        
        content+=`
        <div>
        <h2 class="pl-4   ">`+bookMarksList[index].name+`</h2></div>
        <div class="d-flex   w-50  justify-content-end  pr-3  py-3  ">
        <a class="btn btn-dark  text-light  px-4 ml-5  " href="https://`+bookMarksList[index].url+`"target="_blank">Visit</a>
        <button class="btn btn-success px-4 py-2 ml-3 " onclick="updateSite(`+i+`);"> Update</button>
        <button class="btn btn-danger px-4 py-2 ml-3 disabled " > Delete</button>
        </div>
        
    </div>`;
    
    }

    document.getElementById(`siteNumber`+index+``).innerHTML=content; 
    }
    else{ submitUpdate()}

}

function submitUpdate(index)
{
    bookMarksList[index].name =bookMarksList[index].name.replace(bookMarksList[index].name, siteName.value)
    bookMarksList[index].url=bookMarksList[index].url.replace(bookMarksList[index].url, siteUrl.value)
    var content=``;
    for(var i=index ; i==index;i++)
    {
        
        content+=`
        <div >
        <h2 class="pl-4   ">`+bookMarksList[index].name+`</h2></div>
        <div class="d-flex   w-50  justify-content-end  pr-3  py-3  ">
        <a class="btn btn-dark  text-light  px-4 ml-5  " href="https://`+bookMarksList[index].url+`"target="_blank">Visit</a>
        <button class="btn btn-success px-4 py-2 ml-3 " onclick="updateSite(`+i+`);"> Update</button>
        <button class="btn btn-danger px-4 py-2 ml-3 " onclick="deleteSite(`+i+`);"> Delete</button>
        </div>
        
    </div>`;
    
    }

    document.getElementById(`siteNumber`+index+``).innerHTML=content; 
    localStorage.setItem("websites",JSON.stringify(bookMarksList));
    clearForm()
    document.getElementById("Submit-update") .innerHTML= ` <button class="btn btn-warning px-4 py-2 mysubmit" id="add-update" onclick="addsite();"> Submit</button>`
   
}





