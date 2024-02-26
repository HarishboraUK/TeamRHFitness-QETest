/* eslint-disable no-undef */
class Login {
	get item1() { return $('//android.view.View[@resource-id="ListItemCard_1"]');}
	get item1_label() { return $('//android.widget.TextView[@resource-id="ListItemText_1"]');}
	get item1_description() { return $('//android.widget.TextView[@resource-id="ListItemDesc_1"]');}
	
	get item2() { return $('//android.view.View[@resource-id="ListItemCard_2"]');}
	get item2_label() { return $('//android.widget.TextView[@resource-id="ListItemText_2"]');}
	get item2_description() { return $('//android.widget.TextView[@resource-id="ListItemDesc_2"]');}
	
	get item3() { return $('//android.view.View[@resource-id="ListItemCard_3"]');}
	get item3_label() { return $('//android.widget.TextView[@resource-id="ListItemText_3"]');}
	get item3_description() { return $('//android.widget.TextView[@resource-id="ListItemDesc_3"]');}

	get item4() { return $('//android.view.View[@resource-id="ListItemCard_4"]');}
	get item4_label() { return $('//android.widget.TextView[@resource-id="ListItemText_4"]');}
	get item4_description() { return $('//android.widget.TextView[@resource-id="ListItemDesc_4"]');}

	get item5() { return $('//android.view.View[@resource-id="ListItemCard_5"]');}
	get item5_label() { return $('//android.widget.TextView[@resource-id="ListItemText_5"]');}
	get item5_description() { return $('//android.widget.TextView[@resource-id="ListItemDesc_5"]');}

	get item6() { return $('//android.view.View[@resource-id="ListItemCard_6"]');}
	get item6_label() { return $('//android.widget.TextView[@resource-id="ListItemText_6"]');}
	get item6_description() { return $('//android.widget.TextView[@resource-id="ListItemDesc_6"]');}

	get item7() { return $('//android.view.View[@resource-id="ListItemCard_7"]');}
	get item7_label() { return $('//android.widget.TextView[@resource-id="ListItemText_7"]');}
	get item7_description() { return $('//android.widget.TextView[@resource-id="ListItemDesc_7"]');}

	get item8() { return $('//android.view.View[@resource-id="ListItemCard_8"]');}
	get item8_label() { return $('//android.widget.TextView[@resource-id="ListItemText_8"]');}
	get item8_description() { return $('//android.widget.TextView[@resource-id="ListItemDesc_8"]');}
}

module.exports = new Login();