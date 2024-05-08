const toggleThemeBtn = document.querySelectorAll( "#toggle-theme" );
const SubmenuOpenBtn = document.querySelector( ".submenu-open-btn" );
const submenu = document.querySelector( ".submenu" );
const navIcon = document.querySelector( ".nav-icon" );
const nav = document.querySelector( ".nav" );
const overlay = document.querySelector( ".overlay" );
const closeBtn = document.querySelector( ".closebtn" );

toggleThemeBtn.forEach( btn => {
    
    btn.addEventListener( "click", () => {
        if ( localStorage.theme === "dark" ) {
            document.documentElement.classList.remove( "dark" );
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add( "dark" );
            localStorage.setItem( "theme", "dark" );
        }

    } );

    SubmenuOpenBtn.addEventListener( 'click', (e) => {  
        submenu.classList.toggle( 'submenu--open' );
    
    } );

} );
    

navIcon.addEventListener( "click", () => {
    nav.classList.remove( "-right-64" );
    nav.classList.add( "right-0" );
    overlay.classList.add( "overlay--visible" );
    
    
} );

closeBtn.addEventListener( "click", () => {  
    nav.classList.remove( "right-0" );
    nav.classList.add( "-right-64" );
    overlay.classList.remove( "overlay--visible" );
} );

overlay.addEventListener( "click", () => {
    
})



   


