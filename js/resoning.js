let rmarks = 0; 
localStorage.setItem('rmarks', rmarks);
 let rmarked = 0;
 localStorage.setItem('rmarked', rmarked);
let rchecked = 0;
 localStorage.setItem('rchecked', rchecked);
 var rcorrectanser = 0;
 localStorage.setItem('rcorrectanser', rcorrectanser);
 let rwanser = 0;
 localStorage.setItem('rwanser', rwanser);
var currentTab = 0;
 // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
   
  if (n == (x.length - 1)) {
    document.getElementById("next").style.display = "inline";
  } else if (n == (x.length - 2)) {
    document.getElementById("next").style.display = "inline";
  } 
  //... and run a function that will display the correct step indicator:
  
} 

 


 
 
function nextPrev(n) {
  // This function will figure out which tab to dis play
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
   
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab == x.length) {
    // ... the form gets submitted:
     currentTab = 0;
   
  }
  // Otherwise, display the correct tab:
  
   
  
    
  markanser();
  correctanser();
   
   
      
  showTab(currentTab);
    questionchecked();
 
  
   
}

  
 

function doSomething() {
      document.getElementById("regForm").submit() 
     
	 
 
 
}
 
function markanser() {
            const rbs = document.querySelectorAll('input[name="choice"]:checked');
           
            for (const rb of rbs) {
                if (rb.value == 'yes') {
					 
                rmarks = rmarks + 1;
                
			   localStorage.setItem('rmarks', rmarks);
                   
            }  else {
            localStorage.getItem('rmarks');
              rmarks = rmarks - (0.25);
			   
			  localStorage.setItem('rmarks', rmarks);
                
				}   
 
         
               }
   
 
        } 
		
  
  
  
   
		
                                
 
 
 
 
  
 function marknextPrev(n) {
  // This function will figure out which tab to dis play
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
   
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab == x.length) {
    // ... the form gets submitted:
     currentTab = 0;
   
  }
  // Otherwise, display the correct tab:
  
   
  
    
  markanser();
  correctanser();
   
   
       marked();
  showTab(currentTab);
     
 
  
   
}
 
 function marked() {
	
   
  
   const rbs = document.querySelectorAll('input[name="choice"]:checked');
            if (currentTab == 1) {
                bton1.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
                
   
                                }
 
 if (currentTab == 2) {
                bton2.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
                
                                       
                                }if (currentTab == 3) {
                bton3.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 4) {
                bton4.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 5) {
                bton5.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
            
                                }if (currentTab == 6) {
                bton6.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
             
                                }if (currentTab == 7) {
                bton7.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
             
                                }
if (currentTab == 8) {
                bton8.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
             
                                }if (currentTab == 9) {
                bton9.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 10) {
                bton10.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 11) {
                bton11.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 12) {
                bton12.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 13) {
                bton13.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
             
                                }if (currentTab == 14) {
                bton14.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
             
                                }if (currentTab == 15) {
                bton15.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 16) {
                bton16.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 17) {
                bton17.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 18) {
                bton18.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
           
                                }if (currentTab == 19) {
                bton19.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 20) {
                bton20.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 21) {
                bton21.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
             
                                }if (currentTab == 22) {
                bton22.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
             
                                }if (currentTab == 23) {
                bton23.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 24) {
                bton24.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 25) {
                bton25.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 26) {
                bton26.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 27) {
                bton27.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 28) {
                bton28.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 29) {
                bton29.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                } if (currentTab == 30) {
                bton30.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                } if (currentTab == 31) {
                bton31.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 32) {
                bton32.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 33) {
                bton33.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }if (currentTab == 34) {
                bton34.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                } if (currentTab == 35) {
                bton35.style = 'background-position: 0px -180px; color: rgb(255, 255, 255);';
              
                                }
 
 
 
 document.getElementById("stic-marked").innerHTML = rmarked;
 
 
  
 } 
 
 
 
 
 
 
 
 
 
 
 
 
 function correctanser() {
            const rbs = document.querySelectorAll('input[name="choice"]:checked');
           
            for (const rb of rbs) {
                if (rb.value == 'yes') {
                          
                      rcorrectanser = rcorrectanser + 1;
  
                     
 
                      localStorage.setItem('rcorrectanser', rcorrectanser);
                  }  else {
 
              rwanser = rwanser + 1;
			  
              localStorage.setItem('rwanser', rwanser);
                 
                 }  
             }
		 }
 
 
 
 



const btn = document.getElementById('clear');
        // handle click button
 function clearresponsek() {
            document.querySelector('input[name="choice"]:checked').checked = false;
           
             
        } 
 
 function questionchecked() {
 
   const rbs = document.querySelectorAll('input[name="choice"]:checked');
       for (const rb of rbs) {
                if (rb.checked == true) {
                rchecked = rchecked + 1;
                localStorage.setItem('rchecked', rchecked);
                
			 
            
      document.querySelector('input[name="choice"]:checked').checked = false;
                }  else {
                 rchecked = rchecked + 0;
				 localStorage.setItem('rchecked', rchecked);
   
               } 
           
    }
		   
		    
         } 
  
 
  
   document.addEventListener("contextmenut", function(event) {
                    event.preventDefault();
 })
  