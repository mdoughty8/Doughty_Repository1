'ShopNow for Laptops
Browser("Advantage Shopping").Page("Advantage Shopping").Sync
Browser("Advantage Shopping").Page("Advantage Shopping").Link("laptopsImg").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("laptopsImg")_;_script infofile_;_ZIP::ssf1.xml_;_
'Browser("Advantage Shopping").Page("Advantage Shopping").Link("LAPTOPS").Click

'Create parameters to choose all laptops
'<insert step here>
Browser("Advantage Shopping").Page("Advantage Shopping").Sync
Browser("Advantage Shopping").Page("Advantage Shopping").Link("PRICE").Click

'Create parameter and checkpoint to make sure the right laptops populate when filtered based on price

'Toggle Price to search for <$319 - should populate only two laptops
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("WebElement").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("HP Chromebook 14 G1(ENERGY").Click
