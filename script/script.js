// setting up posts
//ul_user_post class declared in the newsfeed screen
const type1_userpost_list = document.querySelector('.ul_user_post');
const setupUserPost = (data) =>{
  console.log(data);
  if(data.length){
    let html = '';
    data.slice().reverse().forEach(doc =>{
      const userpost = doc.data();
      //console.log(doc);
      //console.log(userpost);
  
      //template string
      const li = `
        <li>
          <div class="col s12 m8 offset-m2 l6 offset-l3 user_post">
            <div class="card-panel grey lighten-5 z-depth-1">
                <div class="row valign-wrapper">
                    <div class="col">
                      <img class="circle img-responsive avatar" src="./img/avatar/avatar1.png" alt="">
                    </div>
                    <div class="col">${userpost.createdBy}</div>
                  </div>
              <div class="row valign-wrapper">
                <div class="col">
                  <span class="black-text">
                  ${userpost.content}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>
      `;
      html = html + li
    });
    type1_userpost_list.innerHTML = html;
  }
}


// setup materialize components
document.addEventListener('DOMContentLoaded', function() {
    //grabbing all "modal" class and initialize them
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    //same as above
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);


    var fixed_act_btn = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(fixed_act_btn, 'left');
  
  });


const print_log = () =>{
    console.log("Post btn hit");
}
