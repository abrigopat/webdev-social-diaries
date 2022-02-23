// bug:
// yung home lang ang nagchechange color pag nagscroll
// kahit na same class lang naman yung mga nandon

const navbar = document.querySelector('.nav-bar')
var txt = document.querySelector('.nav-a')
var txt2 = document.querySelector('.nav-b')
var txt3 = document.querySelector('.nav-c')
const contactBtn = document.getElementById('contact')

window.addEventListener('scroll', () => {

    if(window.scrollY >= 50){
        navbar.style.backgroundColor = 'transparent'
        txt.style.color = 'white'
        contactBtn.style.color = 'white'
        txt2.style.color = 'white'
        txt3.style.color = 'white'

        contactBtn.addEventListener('mouseover', function( event ) {
            // highlight the mouseover target
            event.target.style.color = 'white'
          
            // reset the color after a short delay
            setTimeout(function() {
              event.target.style.color = 'white'
            }, 500);
        }, false);

        txt.addEventListener('mouseover', function( event ) {
            // highlight the mouseover target
            event.target.style.color = '#fb8200'
          
            // reset the color after a short delay
            setTimeout(function() {
              event.target.style.color = 'white'
            }, 500);
        }, false);

        txt2.addEventListener('mouseover', function( event ) {
            // highlight the mouseover target
            event.target.style.color = '#fb8200'
          
            // reset the color after a short delay
            setTimeout(function() {
              event.target.style.color = 'white'
            }, 500);
        }, false);

        txt3.addEventListener('mouseover', function( event ) {
            // highlight the mouseover target
            event.target.style.color = '#fb8200'
          
            // reset the color after a short delay
            setTimeout(function() {
              event.target.style.color = 'white'
            }, 500);
        }, false);
        
    } else{
        navbar.style.backgroundColor = 'white'
        txt.style.color = '#ffc5c4'
        contactBtn.style.color = '#ffc5c4'
        txt2.style.color = '#ffc5c4'
        txt3.style.color = '#ffc5c4'

        contactBtn.addEventListener('mouseover', function( event ) {
            // highlight the mouseover target
            event.target.style.color = 'white'
          
            // reset the color after a short delay
            setTimeout(function() {
              event.target.style.color = ''
            }, 500);
        }, false);

        txt.addEventListener('mouseover', function( event ) {
            // highlight the mouseover target
            event.target.style.color = '#fb8200'
          
            // reset the color after a short delay
            setTimeout(function() {
              event.target.style.color = ''
            }, 500);
        }, false);
        
        txt2.addEventListener('mouseover', function( event ) {
            // highlight the mouseover target
            event.target.style.color = '#fb8200'
          
            // reset the color after a short delay
            setTimeout(function() {
              event.target.style.color = ''
            }, 500);
        }, false);

        txt3.addEventListener('mouseover', function( event ) {
            // highlight the mouseover target
            event.target.style.color = '#fb8200'
          
            // reset the color after a short delay
            setTimeout(function() {
              event.target.style.color = ''
            }, 500);
        }, false);
        
    }
})

// function onHover(){
//     txt.style.color = '#fb8200'
// }

// function onHover2(){
//     txt2.style.color = '#fb8200'
// }

// function onHover3(){
//     txt3.style.color = '#fb8200'
// }

// function btnHover(){
//     contactBtn.style.color = 'white'
// }

// txt.addEventListener('mouseover', onHover)
// txt2.addEventListener('mouseover', onHover2)
// txt3.addEventListener('mouseover', onHover3)
//contactBtn.addEventListener('mouseover', btnHover)


