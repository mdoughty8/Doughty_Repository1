
'CHECKPOINT TO ENSURE TRACKING # AND ORDER # ARE POPULATED
'Window("Google Chrome").WinObject("Chrome Legacy Window").Check CheckPoint("Chrome Legacy Window") @@ hightlight id_;_721196_;_script infofile_;_ZIP::ssf1.xml_;_

'TODO: FireFox64 not able to find teh tracking # and order # - if updated will this affect the chrome test run that was successful after running maintenance mode?
'TODO:IE unable to complete checkpoints for order# & tracking#
Browser("Advantage Shopping").Page("Advantage Shopping").Check CheckPoint("Advantage Shopping")

'Firefox
'Browser("Advantage Shopping").Page("Advantage Shopping").Check CheckPoint("Advantage Shopping_2")
'IE
'Browser("Advantage Shopping").Page("Advantage Shopping").Check CheckPoint("Advantage Shopping_3") @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping")_;_script infofile_;_ZIP::ssf5.xml_;_


