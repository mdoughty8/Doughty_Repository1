'apply hover over icon option (?)

'Sync step to ensure object loads before continuing to next step
Browser("Advantage Shopping").Page("Advantage Shopping").Sync

'TODO: "in IE have to click on the shopping cart link and not able to hover over
Browser("Advantage Shopping").Page("Advantage Shopping").Link("shoppingCartLink").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("shoppingCartLink")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check_out_btn_2").Click
'Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check_out_btn").Click
Browser("Advantage Shopping").Page("Advantage Shopping").Sync
wait 3
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("next_btn").Click

 @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check out btn 2")_;_script infofile_;_ZIP::ssf2.xml_;_
