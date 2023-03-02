What?  

 - compares if recent code changes introduced affected what user sees  
   
 - comparing __ expected __ image (golden image)  with __ actual __  
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
_ Why? _
  
 - prevents bugs getting to production:  
     
     
![expected](/expected.png) ![actual](/actual.png)  
<br> 
<br>
<br>
![button](/button.png) ![button with string](/button-string.png)  
<br> 
<br>
<br>
![airbnb](/airbnb.png)  
<br> 
<br>
<br>
<div class="wrapper">
<div class="loader">  
<div class="loader-text">
Loading...
</div>
</div>
 
  

_ Where? _  
  
- where you don't look too often  

- executed as part of design system  

- tests but also as part of E2E user journey  

- separate tests  

<br> 
<br>
<br>
<br>
<br>
<br>
_ When? _

- as often as possible  

- run them in the pipeline on every merge request  

- run them locally  
<br>
<br>
<br>
<br>
<br>
<br>

_ Who? _  
  
- you as a code change owner  

- person who review your pull request  

- Designer  

- Product Manager  
<br>
<br>
<br>
<br>
<br>
<br>
