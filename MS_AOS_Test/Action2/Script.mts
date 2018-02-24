
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Username_2").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("usernameInOrderPayment").Set DataTable("username", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Password").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("passwordInOrderPayment").SetSecure DataTable("password", dtGlobalSheet)
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("login_btnundefined").Click
