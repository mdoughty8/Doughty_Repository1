﻿'TODO: Need to add regular expression for login icon that shows "doughty#"
'TODO:IE unable to find logout icon
Browser("Advantage Shopping").Page("Advantage Shopping").Link("doughty1 My account My").Click

Browser("Advantage Shopping").Page("Advantage Shopping").Link("Sign out").Click

'CHECKPOINT TO ENSURE THE LOGIN ICON SUCCESSFULLY REMOVES THE USERNAME AFTER LOGGING OUT
'<inserts step here>


 @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password")_;_script infofile_;_ZIP::ssf4.xml_;_
