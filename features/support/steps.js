/*
 ******************************************************************************
 * Cucumber/Gherkin
 * ============================================================================
 * 
 * NOTES:
 * - Arrow functions not supported by cucumber when accessing the 'world' class
 *   SEE: github.com/cucumber/cucumber-js/blob/main/docs/support_files/world.md
 * 
 ******************************************************************************
*/

const {After, Before, Given, Then, When} = require('@cucumber/cucumber');
const assert = require('assert');
const path = require('path');
const timeout = 20000;
const webdriver = require('selenium-webdriver');
let variable1;

Before({timeout}, async function() {
    this.browserBuild();
});

After({timeout}, async function() {
    await this.browserExit();
});

Given('the {word} page', {timeout}, async function(page) {
    const pages = {
        'home': 'https://play.pokemonshowdown.com',
    }

    assert((pages[page] != null), 'Page not supported!');
    await this.browserNavigate(pages[page]);
});
When('the play button is clicked', async function () {
    const playButton = await this.headless.findElement(webdriver.By.className("button mainmenu3"))
    await playButton.click()
    console.log(await this.headless.getCurrentUrl())
    assert(await this.headless)
})
Then('the url should be {string}', async function (string){
    assert(this.headless.getCurrentUrl()!=string)
})
// When('the cookies are accepted', async function (){
//     const boxes = webdriver.By.css("input[class='msCheckbox white left']");
//     const boxes1 = await this.headless.findElement(boxes);
//     const acceptButton = await this.headless.findElement(webdriver.By.css('#confirm'))
//     boxes1.click();
//     //boxes[1].click()
//     acceptButton.click();
// })

// Then ('cookies thing should not be there', async function ()
// {
//     // const tos = webdriver.By.id("noticeBoard")//.getCssValue("display");
//     // console.log(" logs here " +  await tos)
//     // const tos1 = await this.headless.findElements(tos)
//     // console.log("  logs here too " + await tos1)
//     // assert(await tos1.size()>0)
//     const button = this.headless.findElement(webdriver.By.id("sign-up"));
//     button.click();
//     const confirm = this.headless.findElement(webdriver.By.id("confirm"))
//     console.log(await this.headless.getCurrentUrl())
//     assert( await this.headless.getCurrentUrl() == "https://myspace.com/signup/email")

// })

// When ('the {word} button is pressed', async function (id) {
//     const signUpButton = await webdriver.By.css("#"+id);
//     const variable = await this.headless.findElement(signUpButton);
//     console.log(37,await variable)

// })
// // Then ('web address should be {address}', async function (address) {
// //     console.log(await this.headless.getCurrentUrl())
// //     assert(await this.headless.getCurrentUrl()==address)

// // })
// // When('the {string} location is searched for', async function(location) {
//     //     this.text = location;

// //     const searchInput = await this.getElement('ls-c-search__input-label');
// //     const searchSubmit = await this.getElementByCss('[type="submit"].ls-c-search__submit');

// //     await searchInput.sendKeys(location);
// //     await searchSubmit.click();
// //     await this.waitForElementByCss('.wr-c-observations__heading', timeout);
// // });

// // Then('the {string} element should be {word}', async function(name, state) {
// //     const ids = {
// //         'location heading': 'wr-location-name-id',
// //         'search input': 'ls-c-search__input-label',
// //         'search submit': '[type="submit"].ls-c-search__submit'
// //     };

// //     const selectors = {
// //         'location heading': 'getElement',
// //         'search input': 'getElement',
// //         'search submit': 'getElementByCss'
// //     };

// //     const tags = {
// //         'location heading': 'h1',
// //         'search input': 'input',
// //         'search submit': 'input'
// //     };

// //     const id = ids[name];
// //     const selector = selectors[name];
// //     const tag = tags[name];

// //     assert((id != null), 'Element not supported!');
// //     assert((selector != null), 'Selector not supported!');
// //     assert((tag != null), 'Tag not supported!');

// //     switch(state) {
// //         case 'matching':
// //         case 'there': {
// //             const element = await this[selector](id);
// //             const actualTag = await element.getTagName();
// //             assert((actualTag == tag), 'Element is not of the correct type!');

// //             if (state == 'matching') {
// //                 const actualText = await element.getText();
// //                 console.log('ACTUAL TEXT: '+actualText+'!');
// //                 assert((actualText == this.text), 'Element text does not match!');
// //             }
            
// //             break;
// //         }

// //         case 'missing': {
// //             assert.rejects(async () => await this[selector](id), 'Element exists when it should not!');
// //             break;
// //         }
        
// //         default: {
// //             assert.fail('State not supported!');
// //             break;
// //         }
// //     }