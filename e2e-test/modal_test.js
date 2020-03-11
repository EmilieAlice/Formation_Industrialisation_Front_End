Feature('Modal');

Scenario('It should show modal when I click on button', (I) => {
  I.amOnPage('/');
  I.click('.jumbotron btn');
  I.wait(1);
  I.see('Modal title');
});
