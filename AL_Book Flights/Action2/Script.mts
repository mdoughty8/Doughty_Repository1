WpfWindow("HPE MyFlight Sample Application").WpfComboBox("fromCity").Select DataTable("fromCity", dtGlobalSheet)
WpfWindow("HPE MyFlight Sample Application").WpfComboBox("toCity").Select DataTable("toCity", dtGlobalSheet)

'------------------------------------------------------------------------------------------------------------------------
'Force a Fail & Active Recovery Scenario
If cint(Environment.Value("TestIteration")) = (cint(2)) Then
	WpfWindow("HPE MyFlight Sample Application").WpfCalendar("datePicker").SetDate dateAdd("d",-1,date)
	print WpfWindow("HPE MyFlight Sample Application").WpfCalendar("datePicker").GetVisibleText
Else
	WpfWindow("HPE MyFlight Sample Application").WpfCalendar("datePicker").SetDate dateAdd("d",1,date)
End If

WpfWindow("HPE MyFlight Sample Application").WpfComboBox("Class").Select "Business" @@ hightlight id_;_1912467288_;_script infofile_;_ZIP::ssf24.xml_;_
WpfWindow("HPE MyFlight Sample Application").WpfComboBox("numOfTickets").Select "2" @@ hightlight id_;_1912464168_;_script infofile_;_ZIP::ssf20.xml_;_
WpfWindow("HPE MyFlight Sample Application").WpfButton("FIND FLIGHTS").Click
'-----------------------------------------------------------------------------------------------------------------------

'-----------------------------------------------------------------------------------------------------------------------
'Application Recovery Scenario 
If WpfWindow("HPE MyFlight Sample Application").Dialog("Error").Exist(1) Then   
    WpfWindow("HPE MyFlight Sample Application").Dialog("Error").WinButton("OK").Click @@ hightlight id_;_2034556_;_script infofile_;_ZIP::ssf31.xml_;_
    'Reports Date not in range in run results
    reporter.ReportEvent micWarning, "Test Iteration: " & cint(Environment.Value("TestIteration")), "Date out of range, date found: " & WpfWindow("HPE MyFlight Sample Application").WpfCalendar("datePicker").GetVisibleText
    WpfWindow("HPE MyFlight Sample Application").WpfCalendar("datePicker").SetDate dateAdd("d",1,date)
    WpfWindow("HPE MyFlight Sample Application").WpfButton("FIND FLIGHTS").Click
End If
	reporter.ReportEvent micPass, "Date is valid", departureDate
'-----------------------------------------------------------------------------------------------------------------------
