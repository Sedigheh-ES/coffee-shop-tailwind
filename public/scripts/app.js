const toggleThemeBtns = document.querySelectorAll( ".toggle-theme" );
const SubmenuOpenBtn = document.querySelector( ".submenu-open-btn" );
const submenu = document.querySelector( ".submenu" );

const navOpenBtn = document.querySelector( ".nav-icon" );
const navCloseBtn = document.querySelector( ".closebtn" );

const nav = document.querySelector( ".nav" );
const overlay = document.querySelector( ".overlay" );



toggleThemeBtns.forEach( btn => {    
    btn.addEventListener( "click", () => {
        if ( localStorage.theme === "dark" ) {
            document.documentElement.classList.remove( "dark" );
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add( "dark" );
            localStorage.setItem( "theme", "dark" );
        }
    } )   
} )


SubmenuOpenBtn.addEventListener( "click", ( e ) => {
    e.currentTarget.parentElement.classList.toggle( "text-orange-300" );
    submenu.classList.toggle( "submenu--open" );
} );

    

navOpenBtn.addEventListener( "click", () => {
    nav.classList.remove( "-right-64" );
    nav.classList.add( "right-0" );
    overlay .classList.add( "overlay--visible" );
} );

 navCloseBtn.addEventListener( "click", () => {  
    nav.classList.remove( "right-0" );
    nav.classList.add( "-right-64" );
    overlay.classList.remove( "overlay--visible" );
} );



overlay.addEventListener( "click", () => {
    console.log("overLay Clicked");
    
})



   


