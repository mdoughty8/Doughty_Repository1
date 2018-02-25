'OBJECTS BELOW ARE FROM THE INTERNAL AOS NIMBUS CLIENT APPLICATION:
'Browser("Advantage Shopping").Page("Advantage Shopping").Link("My account My Orders Sign").Click
'Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Username").Click
'Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Set "doughty1"
'Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password").SetSecure "5a922b80515a4860878cc16c4e5609a433f2dbbfeb6a07b2"
'Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign_in_btn").Click

'OBJECTS BELOW ARE FROM THE EXTERNAL AOS WEBSITE APPLICATION:


Browser("Advantage Shopping").Page("Advantage Shopping_2").Link("My account My Orders Sign").Click
Browser("Advantage Shopping").Page("Advantage Shopping_2").WebElement("Username").Click
Browser("Advantage Shopping").Page("Advantage Shopping_2").WebEdit("username").Set "doughty1"
Browser("Advantage Shopping").Page("Advantage Shopping_2").WebEdit("password").SetSecure "5a923371b74e7a06622e3d5b3fd16a4b5d2b26c847f05e0c"
Browser("Advantage Shopping").Page("Advantage Shopping_2").WebButton("sign_in_btnundefined").Click

'CHECKPOINT TO ENSURE THE USERNAME SUCCESSFULLY POPULATES NEXT TO THE LOGIN ICON AFTER LOGGING IN
'Window("Google Chrome").WinObject("Chrome Legacy Window").Output CheckPoint("UserLoginName") @@ hightlight id_;_1835564_;_script infofile_;_ZIP::ssf1.xml_;_


