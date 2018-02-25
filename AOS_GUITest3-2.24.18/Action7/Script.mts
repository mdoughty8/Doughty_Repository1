
'CHECKPOINT TO ENSURE TRACKING # AND ORDER # ARE POPULATED
'Window("Google Chrome").WinObject("Chrome Legacy Window").Check CheckPoint("Chrome Legacy Window") @@ hightlight id_;_721196_;_script infofile_;_ZIP::ssf1.xml_;_

'TODO: FireFox64 not able to find teh tracking # and order # - if updated will this affect the chrome test run that was successful after running maintenance mode?
'TODO:IE unable to complete checkpoints for order# & tracking#
Window("Google Chrome").WinObject("Chrome Legacy Window").Check CheckPoint("OrderNum_Checkpoint") @@ hightlight id_;_721820_;_script infofile_;_ZIP::ssf2.xml_;_
Window("Google Chrome").WinObject("Chrome Legacy Window").Check CheckPoint("TrackingNum_Checkpoint") @@ hightlight id_;_721820_;_script infofile_;_ZIP::ssf4.xml_;_
