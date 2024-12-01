

siteNameInput = document.getElementById('site-name')
siteUrlInput = document.getElementById('site-url')




var urlList = []

if(localStorage.getItem(  "urlLists"  ) !== null)
    
    {

        urlList= JSON.parse( localStorage.getItem( "urlLists") )   ;
 displayWebsite()
}

function addUrl(){
   var websiteData = {

websiteName: siteNameInput.value,
websiteUrl: siteUrlInput.value

   }
urlList.push(websiteData)

localStorage.setItem(  "urlLists"  , JSON.stringify  (urlList) )
displayWebsite()
clearData()

}

function clearData(){
    siteNameInput.value = null
    siteUrlInput.value = null

}



function displayWebsite(){
var cartona = ''
for(   var i = 0         ;   i < urlList.length               ;    i++     )  
    {
        cartona += `
        
         <div class="col-md-3 py-5">
        <div class="card ">
            <div class="card-body ">
              <h3 class=" p-2 h6 card-title"><span class="fw-bold">Index</span> : ${i} </h3>
              <h3 class=" p-2 h6 card-text"><span class="fw-bold">Website Name</span> : ${urlList[i].websiteName} </h3>
           <div class="d-flex justify-content-center align-items-center  ">
            <a href="${urlList[i].websiteUrl}" class="btn btn-success d-block px-4 mx-auto  my-3">Visit</a>
            <button onclick="deleteWebsite(${i})" class=" btn btn-danger d-block px-4 mx-auto ">Delete</button>
          
           </div>
            </div>
     </div>
      </div>
        
        
        
        
        
        
        
        
        `


}

document.getElementById('rowData').innerHTML = cartona
}


function deleteWebsite(deletedProducted){
    urlList.splice(  deletedProducted , 1   )
    localStorage.setItem(  "urlLists"  , JSON.stringify  (urlList) )
    displayWebsite()
}




