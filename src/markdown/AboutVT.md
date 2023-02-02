
 - compares if recent code changes introduced affected what user sees  
   
 - comparing __ expected __ image (golden image)  with __ actual __  

![expected](/expected.png) ![actual](/actual.png)
 




  
  
  
Why?

 - prevents bugs getting to production


When?

- as often as possible  

- run them in the pipeline on every merge request  

- run them locally  

Where?  
- where you don't look to often  

- executed as part of design system  

- tests but also as part of E2E user journey  

- separate tests  


Who?  

- you as a code change owner  

- person who review your pull request  

- Designer  

- Product Manager  
