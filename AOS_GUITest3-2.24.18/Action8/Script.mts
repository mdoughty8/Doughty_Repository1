'TODO: Need to add regular expression for login icon that shows "doughty#"
'TODO:IE unable to find logout icon
Browser("Advantage Shopping").Page("Advantage Shopping").Link("doughty1 My account My").Click
Browser("Advantage Shopping").Page("Advantage Shopping").Link("Sign out").Click

'CHECKPOINT TO ENSURE THE LOGIN ICON SUCCESSFULLY REMOVES THE USERNAME AFTER LOGGING OUT
'Window("Google Chrome").WinObject("Chrome Legacy Window").Check CheckPoint("Chrome Legacy Window") @@ hightlight id_;_1835564_;_script infofile_;_ZIP::ssf1.xml_;_
