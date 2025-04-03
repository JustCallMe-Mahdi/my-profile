document.getElementsByClassName("primary-nav").addEventListener("click" , function()
{
    const target = document.getElementsByClassName("ghost-nav");
    target.classList.remove("ghost-nav") ;
    target.classList.add("primary-nav");
});