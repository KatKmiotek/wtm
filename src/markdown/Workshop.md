
## Workshop
<br>
<br>

For the workshop part will be using project located: 
[https://github.com/KatKmiotek/wtm-workshop](https://github.com/KatKmiotek/wtm-workshop)  
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<div className='tag'>#WTMDareToBe</div>
<br>
<br>
First thing we need to do now is to run:  
  
```
npm install
```   
  
this will install project dependencies.  
To install browsers that Playwright will be using run:  
  
```
npx playwright install
```   
  
this may take some time :)  


Let's have a look what Playwright project has already configured.
https://www.katk.dev/playwright-config

  
  
  
To run tests:  
```npm run test```  

To execute only one test:  
```.only ``` 

To run tests with open browser:  
``` npm run test:headed ```  
   
To run tests in debug mode:  
```
npm run test:debug 
```  
   
<br>
<br>
<br>   

I will be running my tests against Wikipedia: https://wikipedia.org but you can use website of your choice.  
  
As Playwright is all about developer's experience even writing test code is fun.  

```npx playwright codegen https://wikipedia.org```  

  
```npx playwright codegen <your-website-URL>```

Create a new spec file and paste code from Codegen, add `.only` tag and run it in debug mode: `npm run test:debug`  
Ok, so this is our first test :)  
<br>
<br>
<br>
<br>
<br>
<br>

For Visual Regression tests we will be using Playwright test runner's assertion [toHaveScreenshot()](https://playwright.dev/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1)    

```await expect(page).toHaveScreenshot('homepage.png')```  

tests are expected to fail now as there is no golden image. Let's run test again.   

If we want to capture whole page not just a view port  
<div>
```
await expect(page).toHaveScreenshot('homepage.png', {
    fullPage: true
  })
```
</div>

Now our assertions will fail and we can inspect in test results directory why.  
To generate new, updated screenshots we need to run:  
```npx playwright test --update-snapshots``` 
  
<br>
<br>
<br>
<br>
<br>
<br>

In my tests I often use randomly generated test data - like names, cities to avoid test failures due to duplication ("this user already exists"). Sometimes in our application results might be displayed in different order, displayed date often is different. In Playwright visual tests we can exclude DOM elements that likely will not have constant values. Let's say image on the page will be different every time we visit this page - let's mask it!  
    
```
await expect(page).toHaveScreenshot('result.png', {
    fullPage: true,
    mask: [page.locator('.infobox-image')]
  })
 ```   
<br>
<br>
<br>
<br>
<br>
<br>

As you noticed operating system name gets appended to file name. This can cause issues issues when tests are executed on different systems - example locally mac in the pipeline ubuntu.  
```testInfo.snapshotSuffix = ''``` 

In this project you have already GitHub workflow configured to run tests in the pipeline:
```./.github/workflows/playwright.yml```

<br>
<br>
<br>
