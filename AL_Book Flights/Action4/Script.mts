WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("passengerName").Set "John Smith"
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("ORDER").Click
 @@ hightlight id_;_2131435600_;_script infofile_;_ZIP::ssf14.xml_;_
 
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("passengerName").Set "John Smith" @@ hightlight id_;_2132908872_;_script infofile_;_ZIP::ssf15.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("ORDER").Click @@ hightlight id_;_2132911320_;_script infofile_;_ZIP::ssf16.xml_;_

'-----------------------------------------------------------------------------------------------------------------------
'Start Transaction Time
services.StartTransaction "Process Order"
WpfWindow("HPE MyFlight Sample Applicatio").WpfProgressBar("progBar").WaitProperty "value", 100
services.EndTransaction "Process Order"
'End Transaction Time
'-----------------------------------------------------------------------------------------------------------------------

'-----------------------------------------------------------------------------------------------------------------------
'Check that "Order # completed" is displayed.
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("Order # completed").Exist(4)
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("Order # completed").Check CheckPoint("Order # completed") @@ hightlight id_;_2142499752_;_script infofile_;_ZIP::ssf11.xml_;_
'Output Order Price
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("Order $ Price").Output CheckPoint("Order $ Price")
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("Order $ Price").Output CheckPoint("Order $ Price") @@ hightlight id_;_2082477008_;_script infofile_;_ZIP::ssf21.xml_;_
'-----------------------------------------------------------------------------------------------------------------------

'-----------------------------------------------------------------------------------------------------------------------
'Capture Order number in Output Parameter

WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("Order # completed").Output CheckPoint("Order #") @@ hightlight id_;_2094931432_;_script infofile_;_ZIP::ssf22.xml_;_
'Regular Expression @@ hightlight id_;_2130001048_;_script infofile_;_ZIP::ssf20.xml_;_
str = Parameter.Item("Order_Number")
Set RegEx = New RegExp
RegEx.Pattern = "[^\d*]"
RegEx.IgnoreCase = True 
RegEx.Global = True 
Parameter.Item("Order_Number") = RegEx.Replace(str, "")
'-----------------------------------------------------------------------------------------------------------------------

WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("NEW SEARCH").Click
