const { Given, When, Then } = require('@wdio/cucumber-framework');

const { expect } = require('chai');

const login = {
	action: require('../../resources/pages/home/action.js'),
	assert: require('../../resources/pages/home/assert.js')
};
const variable = require('../../resources/shared/variable.js');


When(
	/^I check all the items in the home page$/,
	async function () {
		await login.action.checkContent();
	}
);

Then(
	/^I navigate to the items and verify label and description$/,
	async function () {
		const response = await login.action.clickAndValidateItem();
		expect(response.item1Label).equal(login.assert.attribute.item1Label, response.item1Label);
		expect(response.item1Description).equal(login.assert.attribute.item1Description, response.item1Description);

		expect(response.item2Label).equal(login.assert.attribute.item2Label, response.item2Label);
		expect(response.item2Description).equal(login.assert.attribute.item2Description, response.item2Description);

		expect(response.item3Label).equal(login.assert.attribute.item3Label, response.item3Label);
		expect(response.item3Description).equal(login.assert.attribute.item3Description, response.item3Description);
	}
);

When(
	/^I click on "([^"]*)?" on "([^"]*)?"$/,
	async function (element, page) {
	}
);


