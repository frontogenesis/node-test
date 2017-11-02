let csvRename = require('./csvRename');
let fs = require('fs');



function csvOasis() {
  return new Promise((resolve, reject) => {

    seleniumAutomation();

    function seleniumAutomation() {
// CODE THAT NEEDS TO BE SYNCHRONOUS STARTS HERE!!!!!
    let driver = new Builder()

      .forBrowser('chrome')
      .build();

// Access Web Page
    driver.get('web site here');
    driver.findElement(By.linkText('OASIS Login')).click();

// Program will wait until the title of the page is 'My Home'
// which happens after the user is authenticated
    driver.wait(until.titleIs('My Home'));

// Access Student Schedules
    driver.findElement(By.linkText('Students')).click();
    driver.findElement(By.linkText('3. Download Student Schedules')).click();

// Select Year
    driver.findElement(By.xpath('//*[@id="content_container"]/table/tbody/tr/td/table/tbody/tr[2]/td/table/tbody/tr/td/form/table/tbody/tr[1]/td[2]/select/option[2]')).click();

// Select Student level
// Visiting Medical Student and Visiting International Med Student

    driver.findElement(By.xpath('//*[@id="slid"]/option[31]')).click();
    driver.findElement(By.xpath('//*[@id="slid"]/option[32]')).click();

// zz_MD/PhD1 through zz_MD/PhD7

    driver.findElement(By.xpath('//*[@id="slid"]/option[40]')).click();
    driver.findElement(By.xpath('//*[@id="slid"]/option[41]')).click();
    driver.findElement(By.xpath('//*[@id="slid"]/option[42]')).click();
    driver.findElement(By.xpath('//*[@id="slid"]/option[43]')).click();
    driver.findElement(By.xpath('//*[@id="slid"]/option[44]')).click();
    driver.findElement(By.xpath('//*[@id="slid"]/option[45]')).click();
    driver.findElement(By.xpath('//*[@id="slid"]/option[46]')).click();

// Start Date
    driver.findElement(By.css('input[name="course_start"]')).sendKeys('11/13/2017');

// End Date
    driver.findElement(By.css('input[name="course_end"]')).sendKeys('12/25/2017');

// Do not include Username
    driver.findElement(By.css('input[name="exclude_username"][value="1"]')).click();

// Include Formatted Name, Email, Gender and Designation
    driver.findElement(By.css('input[name="include_email"][value="1"]')).click();

// Download As CSV
    driver.findElement(By.css('input[type="submit"][name="download_csv"]')).click();

// Logout
    driver.findElement(By.linkText('Account')).click();
    driver.findElement(By.linkText('4. Log out')).click();

// Terminate Session
    driver.quit();

// CODE THAT NEEDS TO BE SYNCHRONOUS STOPS HERE!!!
// Promise still resolves before the driver.quit() -- that just can't happen :-(

// Promise
    resolve(console.log('Is anything happening here?'));

    };

  });
};


function oasisCsvRename() {
  return new Promise((resolve, reject) => {
    csvRename(); // Separate node module I wrote
    resolve(console.log('Should be running last'));
  })
};


csvOasis()
// .then(oasisCsvRename)
