﻿'OBJECTS BELOW ARE FROM THE INTERNAL AOS NIMBUS CLIENT APPLICATION:
'Browser("Advantage Shopping").Page("Advantage Shopping").Link("My account My Orders Sign").Click
'Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Username").Click
'Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Set "doughty1"
'Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password").SetSecure "5a922b80515a4860878cc16c4e5609a433f2dbbfeb6a07b2"
'Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign_in_btn").Click

'OBJECTS BELOW ARE FROM THE EXTERNAL AOS WEBSITE APPLICATION:


Browser("Advantage Shopping").Page("Advantage Shopping_2").Link("My account My Orders Sign").Click

'add if then else to wait Xsec for IE to properly run the login step?

Browser("Advantage Shopping").Page("Advantage Shopping_2").WebElement("Username").Click
Browser("Advantage Shopping").Page("Advantage Shopping_2").WebEdit("username").Set DataTable("Username", dtLocalSheet)

'IF LOGIN FAILS - test shoudl intentionally fail when putting in the bad username doughty3 and password (doughty3 is not a registered user)
'<insert badd user password here>

Browser("Advantage Shopping").Page("Advantage Shopping_2").WebEdit("password").SetSecure DataTable("Password_encryp", dtLocalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping_2").WebButton("sign_in_btnundefined").Click

'CHECKPOINT TO ENSURE THE USERNAME SUCCESSFULLY POPULATES NEXT TO THE LOGIN ICON AFTER LOGGING IN
'Window("Google Chrome").WinObject("Chrome Legacy Window").Output CheckPoint("UserLoginName")


