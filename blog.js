function addBlog(){

    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var tags = document.getElementById("tags").value;

    if(validTitle() && validDescription() && validTag())
    {
        
       
            var str = "<div class='media my-3 mb-5 tm-blog-media'> " +                           
            "<div class='media-body tm-blog-text'>"
            + 
                "<h2 class='mb-4 tm-content-title'><a href='https://mallikabasu.com/2015/05/17/quick-punjabi-dal-fry/'>" + title+ "</a></h2> " + 
                "<p> " + description + "</p> <br/>" +
                "<a href='#' class='badge badge-pill badge-primary'> " + tags + "</a>"
                 +
                "</div> " + 
            " <a href='https://mallikabasu.com/2015/05/17/quick-punjabi-dal-fry/'><img src='https://mallikabasu.com/wp-content/uploads/2015/05/Punjabi-dal-750x500.jpg'  alt='Image' width='300' height='200' class='tm-blog-img'></a>" + 
            "</div>"
        
            document.getElementById("blogplace").innerHTML += str;

      
        
       
    }
    

    

   
}

function validTitle(){
    var title = document.getElementById("title").value;
    if(title == "")
    {
        document.getElementById("titleErrTxt").innerHTML = "Title cannot be Empty!!";
        document.getElementById("titleError").style.display = "block";
       
    }
    else{
        document.getElementById("titleError").style.display = "none";
        return true;
    }
}

function validDescription(){
    var des =  document.getElementById("description").value;

    if(des == "")
    {
        document.getElementById("desErrTxt").innerHTML = "Description cannot be Empty!!";
        document.getElementById("desError").style.display = "block";
        
    }
    else{
        document.getElementById("desError").style.display = "none";
        return true;
    }

}

function validTag()
{
    var tags = document.getElementById("tags").value;
    if(tags == "")
    {
        document.getElementById("tagErrTxt").innerHTML = "Tags cannot be Empty!!";
        document.getElementById("tagError").style.display = "block";
        
    }
    else{
        document.getElementById("tagError").style.display = "none";
        return true;
    }

}







