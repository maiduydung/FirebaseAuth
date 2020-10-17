//reference to the "posts" class in index.html
const postList = document.querySelector('.posts');

//seting up posts
const setupPost = (data) =>{

  let html ='';
  data.forEach(doc => {
    //remember to use data() method not ".data" attribute
    const post = doc.data();
    console.log(post);

    const li = `
      <li>        
        <div class="collapsible-header grey lighten-4"> ${post.title} </div>
        <div class="collapsible-body white"> ${post.content} </div>
      </li>
    `;
    html = html + li;
  });

  postList.innerHTML = html;

}


// setup materialize components
document.addEventListener('DOMContentLoaded', function() {
    //grabbing all "modal" class and initialize them
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    //same as above
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });