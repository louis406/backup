/*declaration*/
var count =0;
//task 3.1
function MouseCounter(){
    count++;
    let sum = document.getElementById("mcount");
    sum.innerHTML = count;
}

//task 3.2
function postBlog(){

    var currentdatetime = new Date();
    var postContent = document.getElementById("post-text").value;

    var postTime = document.createElement("p");
    postTime.className= "post-time";
    postTime.innerHTML = Date();

    var PostContentElement = document.createElement("p");
    PostContentElement.className = "post-content";
    PostContentElement.innerText = postContent;

    var postDiv = document.getElementById("posts");
    postDiv.appendChild(postTime);
    postDiv.appendChild(PostContentElement);

}

/*task 3.3*/
function showmenu(){
    var mainDiv = document.getElementById("main");
    var menuDiv = document.getElementById("menu");

    // Hide the main div
    mainDiv.style.display = "none";

    // Show the menu div
    menuDiv.style.display = "block";
}

function showmain(){
    var mainDiv = document.getElementById("main");
    var menuDiv = document.getElementById("menu");

    // Hide the menu div
    menuDiv.style.display = "none";

    // Show the main div
    mainDiv.style.display = "block";
}

//task 3.4//

function BlueText(){
    var postTime = document.createElement("p");
    postTime.className= "post-time";
    postTime.innerHTML = Date();


    var postContent = document.getElementById("post-text").value;
    var PostContentElement = document.createElement("p");
    PostContentElement.className = "post-content";
    PostContentElement.innerText = postContent;

    var postDiv = document.getElementById("posts");
    postDiv.appendChild(postTime);
    postDiv.appendChild(PostContentElement);

}

function RedText(){
    var postTime = document.createElement("p");
    postTime.className= "post-time";
    postTime.innerHTML = Date();

    var postContent = document.getElementById("post-text").value;
    var PostContentElement = document.createElement("p");
    PostContentElement.className = "post-content";
    PostContentElement.innerText = postContent;

    var postDiv = document.getElementById("posts");
    postDiv.appendChild(postTime);
    postDiv.appendChild(PostContentElement);

}