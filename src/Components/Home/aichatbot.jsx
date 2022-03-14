export default function App(){


    let mybutton;

   window.addEventListener("load", () => {
  

  //Get the button
  mybutton = document.getElementById("scrollup");
  // When the user scrolls down 20px from the top of the document, show the button
  window.addEventListener("scroll", scrollFunction);


});



function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    mybutton.style.display = "block";
  else mybutton.style.display = "none";
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

    return (
       <>
            <button onClick={topFunction} id="scrollup" title="Go to top" className="hvr-float">
            <svg xmlns='http://www.w3.org/2000/svg' className='ionicon' viewBox='0 0 512 512'>
            <title>Go To Top</title>
            <path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='35' d='M112 328l144-144 144 144' />
            </svg>
        </button>
        <a className="hvr-float" href="#Contact" rel="noopener" aria-label="Contact" id="Aichatbtn"><strong>Let's
            Talk!</strong></a>
       </>
       
       )
}