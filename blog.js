function addBlog(){
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var tags = document.getElementById("tags").value;

    var str = "<div class='media my-3 mb-5 tm-blog-media'> " +                           
    "<div class='media-body tm-blog-text'>"
    + 
        "<h2 class='mb-4 tm-content-title'><a href='https://mallikabasu.com/2015/05/17/quick-punjabi-dal-fry/'>" + title+ "</a></h2> " + 
        "<p> " + description + "   </p>" +
        "<a href='#' class='badge badge-pill badge-primary'> " + tags + "</a>"
         +
        "</div> " + 
    " <a href='https://mallikabasu.com/2015/05/17/quick-punjabi-dal-fry/'><img src='https://mallikabasu.com/wp-content/uploads/2015/05/Punjabi-dal-750x500.jpg'  alt='Image' width='300' height='200' class='tm-blog-img'></a>" + 
    "</div>"

    document.getElementById("blogplace").innerHTML += str;

    alert(title + " " + description + " " + tags);
}





