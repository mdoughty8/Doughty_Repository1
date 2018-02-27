
'OBJECTS BELOW ARE FROM THE EXTERNAL AOS WEBSITE APPLICATION:

Browser("Advantage Shopping").Page("Advantage Shopping_2").Sync

wait 3

Browser("Advantage Shopping").Page("Advantage Shopping_2").Link("My account My Orders Sign").Click
Browser("Advantage Shopping").Page("Advantage Shopping_2").WebElement("Username").Click
Browser("Advantage Shopping").Page("Advantage Shopping_2").WebEdit("username").Set DataTable("Username", dtLocalSheet)

'IF() LOGIN FAILS - test shoudl intentionally fail when putting in the bad username doughty3 and password (doughty3 is not a registered user)
'<insert error path here>

Browser("Advantage Shopping").Page("Advantage Shopping_2").WebEdit("password").SetSecure DataTable("Password_encryp", dtLocalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping_2").WebButton("sign_in_btnundefined").Click

'INSERT CHECKPOINT TO ENSURE THE USERNAME SUCCESSFULLY POPULATES NEXT TO THE LOGIN ICON AFTER LOGGING IN
'<insert step here>


