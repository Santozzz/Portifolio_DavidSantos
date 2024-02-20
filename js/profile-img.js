window.addEventListener("scroll", function(){
    let profile = this.document.querySelector('.navbar-container')
    profile.classList.toggle('profile-img', window.scrollY > 0)
});