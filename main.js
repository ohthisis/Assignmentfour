const login=document.getElementById("login");
const logout=document.getElementById("logout");
const userlogin=localStorage.getItem('login_to_localstorage');

login.onclick=function(){
    window.location.href='login.html';
}
logout.onclick=function(){
    window.localStorage.removeItem('login_to_localstorage');
    window.location.href='main.html';
}
async function fetchDataAndRender() {
    try {
        const response = await fetch('data.json');
        console.log(response);
        const data = await response.json(); 
        if(userlogin){
           allrenderpost(data);
           logout.style.display='block';
         }else{
            login.style.display='block';
            renderPosts(data);
         }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

function renderPosts(posts){
    const lastposts=posts.slice(-20);
    const postContainer=document.getElementById('container');

    lastposts.forEach(posts => {
        const postbox=document.createElement('div');
        postbox.className='post-box mobile';

        // Build the HTML for each post
        postbox.innerHTML = `
        <img src="img/dots.jpg" class="dots">
        <img src="${posts.imgSrc}" class="post-img">
        <h2 class="category">${posts.category}</h2>
        <a href="post-page.html" class="post-title">${posts.title}</a>
        <span class="post-date">${posts.date}</span>
        <p class="post-description">${posts.description}</p>
        <div class="profile">
            <img src="${posts.profileImgSrc}" class="profile-img">
            <span class="profile-name">${posts.profileName}</span>
        </div>
    `;
    postContainer.appendChild(postbox);

    });

}

function allrenderpost(posts){
    const postContainer=document.getElementById('container');
    posts.forEach(posts=>{
        const postbox=document.createElement('div');
        postbox.className='post-box mobile';
        postbox.innerHTML = `
        <img src="img/dots.jpg" class="dots">
        <img src="${posts.imgSrc}" class="post-img">
        <h2 class="category">${posts.category}</h2>
        <a href="post-page.html" class="post-title">${posts.title}</a>
        <span class="post-date">${posts.date}</span>
        <p class="post-description">${posts.description}</p>
        <div class="profile">
            <img src="${posts.profileImgSrc}" class="profile-img">
            <span class="profile-name">${posts.profileName}</span>
        </div>
    `;
    postContainer.appendChild(postbox);
    })
}

fetchDataAndRender();
