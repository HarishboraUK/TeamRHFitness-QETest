const selector = {
	login: require(`./selector_${process.env.APP_TYPE}.js`)
};

module.exports = {
	
	checkContent: async function () {
		await selector.login.item1.waitForExist({ timeout: 30000 });
		await selector.login.item2.waitForExist({ timeout: 30000 });
		await selector.login.item3.waitForExist({ timeout: 30000 });
		await selector.login.item4.waitForExist({ timeout: 30000 });
		await selector.login.item5.waitForExist({ timeout: 30000 });
		await selector.login.item6.waitForExist({ timeout: 30000 });
		await selector.login.item7.waitForExist({ timeout: 30000 });
		await selector.login.item8.waitForExist({ timeout: 30000 });

	},

	clickAndValidateItem: async function () {
		await selector.login.item1.waitForExist({ timeout: 30000 });
		(await selector.login.item1).click();
		await expect (selector.login.item1).toBeEnabled(true);
		const item1Label = await selector.login.item1_label.getText();
		const item1Description = await selector.login.item1_description.getText();

		await selector.login.item2.waitForExist({ timeout: 30000 });
		await selector.login.item2.touchAction('tap');
		await expect (selector.login.item2).toBeEnabled(true);
		const item2Label = await selector.login.item2_label.getText();
		const item2Description = await selector.login.item2_description.getText();

		await selector.login.item3.waitForExist({ timeout: 30000 });
		await selector.login.item3.touchAction('tap');
		await expect (selector.login.item3).toBeEnabled(true);
		const item3Label = await selector.login.item3_label.getText();
		const item3Description = await selector.login.item3_description.getText();

		await selector.login.item4.waitForExist({ timeout: 30000 });
		await selector.login.item4.touchAction('tap');
		await expect (selector.login.item4).toBeEnabled(true);
		const item4Label = await selector.login.item4_label.getText();
		const item4Description = await selector.login.item4_description.getText();

		await selector.login.item5.waitForExist({ timeout: 30000 });
		await selector.login.item5.touchAction('tap');
		await expect (selector.login.item5).toBeEnabled(true);
		const item5Label = await selector.login.item5_label.getText();
		const item5Description = await selector.login.item5_description.getText();

		await selector.login.item6.waitForExist({ timeout: 30000 });
		await selector.login.item6.touchAction('tap');
		await expect (selector.login.item6).toBeEnabled(true);
		const item6Label = await selector.login.item6_label.getText();
		const item6Description = await selector.login.item6_description.getText();

		await selector.login.item7.waitForExist({ timeout: 30000 });
		await selector.login.item7.touchAction('tap');
		await expect (selector.login.item7).toBeEnabled(true);
		const item7Label = await selector.login.item7_label.getText();
		const item7Description = await selector.login.item7_description.getText();

		await selector.login.item8.waitForExist({ timeout: 30000 });
		await selector.login.item8.touchAction('tap');
		await expect (selector.login.item8).toBeEnabled(true);
		const item8Label = await selector.login.item8_label.getText();
		const item8Description = await selector.login.item8_description.getText();

		return {
			item1Label, item1Description, item2Label , item2Description , item3Label , item3Description ,item4Label, item4Description, item5Label , item5Description , item6Label , item6Description, item7Label , item7Description, item8Label , item8Description
		};
	},
};