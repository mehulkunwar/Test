({
  onInit: function (cmp, event, helper) {
    // var recordTypeId = cmp.get( "v.pageReference" ).state.recordTypeId;
    //   alert( recordTypeId );
    //add HOW TO EDIT

    //Variables to set call attributes
    var plugin = ""; //To set the plugin/CTI used
    var ani = ""; //caller number/email from incoming interaction
    var dn = ""; //number dialed from cti
    var cType = ""; //interaction type: chat/call/email
    var cDir = ""; //interaction direction: inbound/outbound
    var isExternal = ""; //whether from the agent or from externalcustomer
    var cStartTime = ""; //interaction start time
    var cEndTime = ""; //interaction end time
    var cCallTime; //Object to record call start-time, end-time and duration of interaction
    var cNotes = ""; //call notes
    var cWrapup = ""; //call disposition code
    var isSimulator = ""; //if call is made using simulator environment
    var WupCode = "";
	let notesCheck = false;
    //to be checked
    var endCallTime;
    var startCallTime;
    var recordData = {};

    helper.getCallCenterSettings(cmp);

    sforce.opencti.onNavigationChange({
      listener: function (event) {
        helper.navigateChange(event);
      },
    });

    sforce.opencti.onClickToDial({
      listener: function (event) {
        console.log("You are in onClickToDial")
        console.log("inside listener function", JSON.stringify(event));
        helper.softPhonePop();
        if (plugin == "msdsim" || plugin == "demosl" || plugin == "sim") {
          var isSimulator = cmp.get("v.simulator");
          if (isSimulator == "true") {
            console.log("you are using simulator");
            var callvars = {};
            callvars["var1"] = "Peter Johns";
            callvars["var2"] = "Billing";
            callvars["var3"] = "Spanish";
            callvars["var4"] = "Authenticated";
            callvars["var5"] = "123456";
            callvars["var6"] = "var6";
            callvars["var7"] = "var7";
            callvars["var8"] = "var8";
            callvars["var9"] = "var9";
            callvars["var10"] = "var10";
            callvars["ani"] = "123";
            callvars["dn"] = "1";
            var updatedDummyCallVariables = callvars;
            //helper.simclickToDial("call_simulator_demo_call_event", updatedDummyCallVariables, "setCallVariables");
            //helper.simclickToDial("call_simulator_demo_call_event", 222, "makeCall");
            helper.simclickToDial(
              "SMALLCTI_MAKECALLFROMMSD",
              event.number,
              "makeCall"
            );
          } else {
            console.log("you are in else part");
            var phoneNumber = event.number;
            var newphoneNumber = phoneNumber.replace(/[^0-9]/gi, "");
            var objType = event.objectType;

            console.log("after removing special character: ", newphoneNumber);
            helper.getCountryName(cmp, phoneNumber, objType);
            helper.getCountryIddCode(cmp, event);

            helper.clickToDial(
              "SMALLCTI_MAKECALLFROMMSD",
              /*cmp.get('v.iddCode')+*/ newphoneNumber
            );
          }
        } 
        else if (plugin == "amazon") {
          var obj = new Object();
          obj["eventName"] = "SMALLCTI_MAKECALLFROMMSD";
          obj["data"] = event.number;
          obj["eventType"] = "EXTERNAL_EVENT_TO_NDS";

          var win = document.getElementById("iagentFrame").contentWindow;
          win.postMessage(obj, "*");
        }
        else if (plugin == "webex") {
          var obj = new Object();
          obj["eventName"] = "SMALLCTI_MAKECALLFROMMSD";
          obj["data"] = event.number;
          obj["eventType"] = "EXTERNAL_EVENT_TO_NDS";

          var win = document.getElementById("iagentFrame").contentWindow;
          win.postMessage(obj, "*");
        }
      },
    });

    var addEvent = window.attachEvent || window.addEventListener;
    var postMessageEvent = window.attachEvent ? "onmessage" : "message";
    addEvent(postMessageEvent, function (evnt) {
      console.error("----", evnt);
      try {
        console.log("in handleMessages event==>", evnt);
        console.log("in handleMessages event Data==>", evnt.data);
        var win = document.getElementById("iagentFrame").contentWindow;
        win.postMessage(evnt.data, "*");

        console.log("EVENT NAME==>", evnt.data.eventName);
        console.log("EVENT DATA==>", JSON.stringify(evnt.data));
        //console.log("FOR WEBEX", JSON.parse(JSON.stringify(evnt)));
        if (evnt.data.eventName == "Set_CTI_Plugin") {
          plugin = evnt.data.data;
          if (plugin == "amazon") {
            helper.enableClickToCall();
          }
        }

        if (evnt.data.eventName == "APPLICATION_INITIALIZED") {
          console.log("Application initialized event received");
          //  console.log("window.location.href",document.getElementById(window.name).location.href);
          /* console.log("parent",parent.document);
        console.log("document.location",document.location);
        console.log("document.location.href",document.location.href);
        console.log("window.location",window.location);
        console.log("window.location.href",window.location.href);
        console.log("URL.getSalesforceBaseUrl().toExternalForm()",URL.getSalesforceBaseUrl().toExternalForm());*/
          console.error("record id is:", cmp.get("v.recordId"));
          helper.getServerSetting(cmp);
          helper.enableClickToCall();
          // helper.searchContact('ashish');
          // helper.getLatestRecord(cmp);
        } 
          
        else if (evnt.data.eventName == "CallStartNotification") {
            notesCheck = false;
          console.log(
            "Novelvox CallStartNotification Event Received",
            evnt,
            JSON.stringify(evnt.data),
            JSON.parse(JSON.stringify(evnt.data))  
          );

          cStartTime = new Date();
          console.log("CallStartTime==>", cStartTime);
          cmp.set("v.cStartTime", cStartTime);

          helper.disableClickToCall(); //disable click to call on call start

          if (plugin == "msdsim") {
            //NDS CTI is being used
            isSimulator = cmp.get("v.simulator");
            if (isSimulator != "true") {
              console.log("you are not using simulator");
              recordData["callVariables"] = evnt.data.value.callVariables;
              recordData["callId"] = evnt.data.value.callId;
              console.log(
                "**************evnt.data.value.callVariables",
                evnt.data.value.callVariables
              );
              cmp.set("v.dn", evnt.data.toAddress);
              cmp.set("v.callGuid", evnt.data.callGuid);
              cmp.set("v.callType", evnt.data.callType);
            } else if (isSimulator == "true") {
              console.log("you are using simulator");
             // ani = evnt.data.data.value.callVariables[10].value;
              ani = evnt.data.value.callVariables[10].value
               dn = "";
              cType = "Phone";
              cDir = "INBOUND";
              if (cDir == "INBOUND") {
                cmp.set("v.cDir", sforce.opencti.CALL_TYPE.INBOUND);
              } else if (cDir == "OUTBOUND") {
                cmp.set("v.cDir", sforce.opencti.CALL_TYPE.OUTBOUND);
              } else {
                cmp.set("v.cDir", sforce.opencti.CALL_TYPE.INBOUND);
              }
              isExternal = true;
              cmp.set("v.ani", ani);
              cmp.set("v.cType", cType);
              cmp.set("v.isExternal", isExternal);
              helper.simScreenPop(cmp);
            } else {
              console.warn("SearchString:", cmp.get("v.searchString"));
              helper.softPhonePop();
              helper.setCallVariables(cmp, evnt);
              if (evnt.data.value.callType == "TRANSFER") {
                if (
                  recordData["callVariables"][8]["value"] &&
                  recordData["callVariables"][9]["value"]
                ) {
                  let objectType = recordData["callVariables"][8]["value"];
                  let ss = new Object();
                  if (objectType == "Account") {
                    cmp.set(
                      "v.ObjectId",
                      recordData["callVariables"][9]["value"]
                    );
                    cmp.set("v.ContactId", "");
                    ss["recordId"] = recordData["callVariables"][9]["value"];
                  } else if (objectType == "Contact") {
                    cmp.set(
                      "v.ContactId",
                      recordData["callVariables"][9]["value"]
                    );
                    cmp.set("v.ObjectId", "");
                    ss["recordId"] = recordData["callVariables"][9]["value"];
                  }
                  console.log("RecordID:", ss);
                  helper.popupEvent(cmp, ss);
                }
              } else {
                helper.softPhoneScreenPopfromlayout(cmp);
              }
              //helper.getAccountDetails(cmp);
              //helper.getContactDetails(cmp);
            }
          } 
          else if (plugin == "demosl") {
            //NDS CTI is being used
            isSimulator = cmp.get("v.simulator");
            if (isSimulator != "true") {
              console.log("you are not using simulator");
              recordData["callVariables"] = evnt.data.value.callVariables;
              recordData["callId"] = evnt.data.value.callId;
              console.log(
                "**************evnt.data.value.callVariables",
                evnt.data.value.callVariables
              );
              cmp.set("v.dn", evnt.data.toAddress);
              cmp.set("v.callGuid", evnt.data.callGuid);
              cmp.set("v.callType", evnt.data.callType);
            } else if (isSimulator == "true") {
              console.log("you are using simulator");
              ani = evnt.data.data.callVariables[13].value;
              dn = "";
              cType = "Phone";
              cDir = "INBOUND";
              if (cDir == "INBOUND") {
                cmp.set("v.cDir", sforce.opencti.CALL_TYPE.INBOUND);
              } else if (cDir == "OUTBOUND") {
                cmp.set("v.cDir", sforce.opencti.CALL_TYPE.OUTBOUND);
              } else {
                cmp.set("v.cDir", sforce.opencti.CALL_TYPE.INBOUND);
              }
              isExternal = true;
              cmp.set("v.ani", ani);
              cmp.set("v.cType", cType);
              cmp.set("v.isExternal", isExternal);
              helper.simScreenPop(cmp);
            } else {
              console.warn("SearchString:", cmp.get("v.searchString"));
              helper.softPhonePop();
              helper.setCallVariables(cmp, evnt);
              if (evnt.data.value.callType == "TRANSFER") {
                if (
                  recordData["callVariables"][8]["value"] &&
                  recordData["callVariables"][9]["value"]
                ) {
                  let objectType = recordData["callVariables"][8]["value"];
                  let ss = new Object();
                  if (objectType == "Account") {
                    cmp.set(
                      "v.ObjectId",
                      recordData["callVariables"][9]["value"]
                    );
                    cmp.set("v.ContactId", "");
                    ss["recordId"] = recordData["callVariables"][9]["value"];
                  } else if (objectType == "Contact") {
                    cmp.set(
                      "v.ContactId",
                      recordData["callVariables"][9]["value"]
                    );
                    cmp.set("v.ObjectId", "");
                    ss["recordId"] = recordData["callVariables"][9]["value"];
                  }
                  console.log("RecordID:", ss);
                  helper.popupEvent(cmp, ss);
                }
              } else {
                helper.softPhoneScreenPopfromlayout(cmp);
              }
              //helper.getAccountDetails(cmp);
              //helper.getContactDetails(cmp);
            }
          } 
          else if (plugin == "genesys") {
            //Pureconnect embeddable being used

            ani = "1111";
            console.log("WupCode in CSN", WupCode);
            if (WupCode == "Single Match") {
              ani = "1111";
            } else if (WupCode == "Multi Match") {
              ani = "2222";
            } else if (WupCode == "No Match") {
              ani = "3333";
            } else {
              ani = "1111";
            }

            cType = " ";
            console.log(
              "Check1",
              JSON.stringify(evnt.data.data.value.data.isChat)
            );
            if (
              evnt.data.data.value.data.isChat == false &&
              evnt.data.data.value.data.isEmail == false
            ) {
              cType = "Phone";
            } else if (evnt.data.data.value.data.isChat == true) {
              cType = "Chat";
              ani = evnt.data.data.value.data.fromAddress;
            } else if (evnt.data.data.value.data.isEmail == true) {
              cType = "Email";
              ani = evnt.data.value.data.fromAddress;
            }

            cDir = "INBOUND";
            if (cDir == "INBOUND") {
              cmp.set("v.cDir", sforce.opencti.CALL_TYPE.INBOUND);
            } else if (cDir == "OUTBOUND") {
              cmp.set("v.cDir", sforce.opencti.CALL_TYPE.OUTBOUND);
            } else {
              cmp.set("v.cDir", sforce.opencti.CALL_TYPE.INBOUND);
            }

            isExternal = true;
            cmp.set("v.ani", ani);
            cmp.set("v.cType", cType);
            cmp.set("v.isExternal", isExternal);
            helper.simScreenPop(cmp);
          } 
          else if (plugin == "amazon") {
            //Amazon CCP being used
            var tempp1 = evnt.data.data.fromAddress.emp;
            if (tempp1.hasOwnProperty("Caller Number")) {
              ani = evnt.data.data.fromAddress.emp.EmployeeID.value;
              cType = "Phone";
              cDir = "INBOUND";
            } else {
              //var ani = event.data.data.fromAddress.emp.EmployeeID.value;
              ani = "Customer";
              cType = "Chat";
              cDir = "INBOUND";
            }

            if (cDir == "INBOUND") {
              cmp.set("v.cDir", sforce.opencti.CALL_TYPE.INBOUND);
            } else if (cDir == "OUTBOUND") {
              cmp.set("v.cDir", sforce.opencti.CALL_TYPE.OUTBOUND);
            } else {
              cmp.set("v.cDir", sforce.opencti.CALL_TYPE.INBOUND);
            }

            cmp.set("v.ani", ani);
            cmp.set("v.cType", cType);

            helper.simScreenPop(cmp);
          } 
          else if (plugin == "webex") {
            //Webex CCP being used
            // var webexEvnt = JSON.stringify(evnt);
            // console.error("IN WEBEX",webexEvnt);

            console.log("ANI is -->", evnt.data.value.data.fromAddress);

            ani = evnt.data.value.data.fromAddress;
            // cType = "Chat";
            cmp.set("v.ani", ani);
            cmp.set("v.cDir", sforce.opencti.CALL_TYPE.INBOUND);
            // cmp.set("v.cType", cType);

            helper.simScreenPop(cmp);
          }
        } 
          
        else if (evnt.data.eventName == "CallEndNotification") {
          console.log(
            "Novelvox CallEndNotification Event Received",
            JSON.stringify(evnt.data)
          );

          helper.enableClickToCall();

          if (plugin == "msdsim" || plugin == "genesys") {
            cEndTime = new Date();
            console.log("CallEndTime==>", cEndTime);
            cmp.set("v.cEndTime", cEndTime);

            var cCallTime = helper.getCallTime(cStartTime, cEndTime);
            console.log("CallTime==>", cCallTime);
            cmp.set("v.CallTime", cCallTime);
          } else if (plugin == "demosl") {
            //NDS serverless CTI being used
            cEndTime = new Date();
            console.log("CallEndTime==>", cEndTime);
            cmp.set("v.cEndTime", cEndTime);

            var cCallTime = helper.getCallTime(cStartTime, cEndTime);
            console.log("CallTime==>", cCallTime);
            cmp.set("v.CallTime", cCallTime);
            helper.logCall(evnt, cmp);
          } else if (plugin == "amazon") {
            //Amazon CCP being used
            var tempp2 = evnt.data.data.data.fromAddress;
            if (Object.keys(tempp2).length == 1) {
              cEndTime = new Date();
              console.log("CallEndTime==>", cEndTime);
              cmp.set("v.cEndTime", cEndTime);

              var cCallTime = helper.getCallTime(cStartTime, cEndTime);
              console.log("CallTime==>", cCallTime);
              cmp.set("v.CallTime", cCallTime);
              helper.logCall(evnt, cmp);
            }
          } else if (plugin == "webex") {
            //Amazon CCP being used
            cEndTime = new Date();
            console.log("CallEndTime==>", cEndTime);
            cmp.set("v.cEndTime", cEndTime);
            var cCallTime = helper.getCallTime(cStartTime, cEndTime);
            console.log("CallTime==>", cCallTime);
            cmp.set("v.CallTime", cCallTime);
            helper.logCall(evnt, cmp);
          }
        } 
          
        else if (evnt.data.eventName == "notes2") {
          if (plugin == "genesys") {
            cNotes = evnt.data.data.value;
            cmp.set("v.cNotes", cNotes);
          } else if (plugin == "amazon") {
            cNotes = evnt.data.data.value;
            cmp.set("v.cNotes", cNotes);
          }
        } 
        
        else if (
            evnt.data.eventName == "notes" ||
          evnt.data.eventName == "notes1234"
        ) {
           if(!notesCheck){
           notesCheck = true;
            
    	  notesCheck = true;
          console.log("Novelvox CallNotes Event Received");

          if (plugin == "msdsim") {
            console.log("Call Notes are:", JSON.parse(JSON.stringify(evnt.data.data.notes)));
            //cNotes = evnt.data.data.data.notes;
            cNotes =  evnt.data.data.notes;
            cmp.set("v.cNotes", cNotes);
            helper.logCall(evnt, cmp);
          } 
          else if (plugin == "demosl") {
            //NDS serverless CTI being used
            console.log("Call Notes are:", JSON.stringify(evnt.data));
           // cNotes = evnt.data.data.data.notes;
           cNotes = evnt.data.data.notes;
            cmp.set("v.cNotes", cNotes);
          }
          else if (plugin == "genesys") {
            //Pureconnect embeddable being used
            WupCode = evnt.data.data.value.data.wrapup;
            console.log("Notes are: ", cNotes);
            console.log("WupCode is: ", WupCode);
            cNotes = "Notes: " + cNotes + " Wrapup Code: " + WupCode;
            console.error("Call notes are: ", cNotes);
            cmp.set("v.cNotes", cNotes);

            helper.logCall(evnt, cmp);
          } 
          else if (plugin == "amazon") {
            //Amazon CCP being used
          }
        }
        } 
            
            else if (evnt.data.eventName == "CXINFINITY_EMAIL_SELECTED") {
          //arr++;
          console.log("eventName -->", evnt.data.eventName);
          console.log("CXINFINITY_EMAIL_SELECTED", evnt);
          cmp.set("v.dn", evnt.data.data.from.email);
          cmp.set("v.ani", evnt.data.data.from.email);
          cmp.set("v.callType", "Inbound");
          
          cDir = "INBOUND";
            

          if (cDir == "INBOUND") {
	          cmp.set("v.cDir", sforce.opencti.CALL_TYPE.INBOUND);
          } else if (cDir == "OUTBOUND") {
              cmp.set("v.cDir", sforce.opencti.CALL_TYPE.OUTBOUND);
          } else {
              cmp.set("v.cDir", sforce.opencti.CALL_TYPE.INBOUND);
          }
          //if (arr == 3) {
            helper.simScreenPop(cmp);
            //arr = 0;
          //}
        } else if (evnt.data.eventName == "CXINFINITY_CHAT_INCOMING") {
         // arr++;
          console.log("eventName -->", evnt.data.eventName);
          console.log("CXINFINITY_CHAT_INCOMING", evnt);
          cmp.set("v.dn", evnt.data.data.attributesMap.from);
          cmp.set("v.ani", evnt.data.data.attributesMap.from);
          cmp.set("v.callType", "Inbound");
            
            cDir = "INBOUND";
            

          if (cDir == "INBOUND") {
	          cmp.set("v.cDir", sforce.opencti.CALL_TYPE.INBOUND);
          } else if (cDir == "OUTBOUND") {
              cmp.set("v.cDir", sforce.opencti.CALL_TYPE.OUTBOUND);
          } else {
              cmp.set("v.cDir", sforce.opencti.CALL_TYPE.INBOUND);
          }
          //if (arr == 3) {
            helper.simScreenPop(cmp);
            //arr = 0;
          //}
        } else if (evnt.data.eventName == "CXINFINITY_CHAT_SELECTED") {
          //arr++;
          console.log("eventName -->", evnt.data.eventName);
          console.log("CXINFINITY_CHAT_SELECTED", evnt);
          cmp.set("v.dn", evnt.data.data.dynamicFields.from);
          cmp.set("v.ani", evnt.data.data.dynamicFields.from);
          cmp.set("v.callType", "Inbound");
            
            cDir = "INBOUND";
            

          if (cDir == "INBOUND") {
	          cmp.set("v.cDir", sforce.opencti.CALL_TYPE.INBOUND);
          } else if (cDir == "OUTBOUND") {
              cmp.set("v.cDir", sforce.opencti.CALL_TYPE.OUTBOUND);
          } else {
              cmp.set("v.cDir", sforce.opencti.CALL_TYPE.INBOUND);
          }
          //if (arr == 3) {
            helper.simScreenPop(cmp);
           // arr = 0;
          //}
        } else if (evnt.data.eventName == "AgentStateNotification") {
          console.log(
            "Novelvox AgentStateNotification Event Recived",
            JSON.stringify(evnt.data)
          );

          if (
            "READY" == evnt.data.data.value.status ||
            "TALKING" == evnt.data.data.value.status
          ) {
            helper.disableClickToCall();
            //helper.enableClickToCall();
          } else if ("NOT_READY" == evnt.data.data.value.status) {
            helper.enableClickToCall();
            //helper.enableClickToCall();
          } else if ("LOGOUT" == evnt.data.value.status) {
            helper.disableClickToCall();
            // helper.enableClickToCall();
            if (
              cmp.get("v.logout") == "true" ||
              cmp.get("v.logout") == "TRUE"
            ) {
              helper.logout();
            }
          } else {
            helper.enableClickToCall();
          }
        } else if (evnt.data.eventName == "ASSOCIATE_RECORD") {
          helper.getLatestRecord(cmp, recordData);
        } else if (evnt.data.eventName == "SCREEN_TRANSFER") {
          helper.getLatestRecord(cmp, recordData);
          helper.sendRecordUrl(recordData);
        } else if (evnt.data.eventName == "speeddial") {
          var dn = parseInt(evnt.data.value);
          console.log("dialed number", dn);
          cmp.set("v.dn", dn);
          console.log("dn=", cmp.get("v.dn"));
          switch (dn) {
            case 0:
              cmp.set("v.searchvalue", cmp.get("v.zero"));
              helper.screenPop(cmp);
              helper.clickToDial(
                "SMALLCTI_MAKECALLFROMMSD",
                /*cmp.get('v.iddCode')+*/ cmp.get("v.zero")
              );
              break;
            case 1:
              console.log("your speed dial selection is", cmp.get("v.one"));
              cmp.set("v.searchvalue", cmp.get("v.one"));
              helper.screenPop(cmp);
              console.log("you are here:");
              helper.clickToDial(
                "SMALLCTI_MAKECALLFROMMSD",
                /*cmp.get('v.iddCode')+*/ cmp.get("v.one")
              );
              break;
            case 2:
              cmp.set("v.searchvalue", cmp.get("v.two"));
              helper.screenPop(cmp);
              helper.clickToDial(
                "SMALLCTI_MAKECALLFROMMSD",
                /*cmp.get('v.iddCode')+*/ cmp.get("v.two")
              );
              break;
            case 3:
              cmp.set("v.searchvalue", cmp.get("v.three"));
              helper.screenPop(cmp);
              helper.clickToDial(
                "SMALLCTI_MAKECALLFROMMSD",
                /*cmp.get('v.iddCode')+*/ cmp.get("v.three")
              );
              break;
            case 4:
              cmp.set("v.searchvalue", cmp.get("v.four"));
              helper.screenPop(cmp);
              helper.clickToDial(
                "SMALLCTI_MAKECALLFROMMSD",
                /*cmp.get('v.iddCode')+*/ cmp.get("v.four")
              );
              break;
            case 5:
              cmp.set("v.searchvalue", cmp.get("v.five"));
              helper.screenPop(cmp);
              helper.clickToDial(
                "SMALLCTI_MAKECALLFROMMSD",
                /*cmp.get('v.iddCode')+*/ cmp.get("v.five")
              );
              break;
            case 6:
              cmp.set("v.searchvalue", cmp.get("v.six"));
              helper.screenPop(cmp);
              helper.clickToDial(
                "SMALLCTI_MAKECALLFROMMSD",
                /*cmp.get('v.iddCode')+*/ cmp.get("v.six")
              );
              break;
            case 7:
              cmp.set("v.searchvalue", cmp.get("v.seven"));
              helper.screenPop(cmp);
              helper.clickToDial(
                "SMALLCTI_MAKECALLFROMMSD",
                /*cmp.get('v.iddCode')+*/ cmp.get("v.seven")
              );
              break;
            case 8:
              cmp.set("v.searchvalue", cmp.get("v.eight"));
              helper.screenPop(cmp);
              helper.clickToDial(
                "SMALLCTI_MAKECALLFROMMSD",
                /*cmp.get('v.iddCode')+*/ cmp.get("v.eight")
              );
              break;
            case 9:
              cmp.set("v.searchvalue", cmp.get("v.nine"));
              helper.screenPop(cmp);
              helper.clickToDial(
                "SMALLCTI_MAKECALLFROMMSD",
                /*cmp.get('v.iddCode')+*/ cmp.get("v.nine")
              );
              break;
            default:
              cmp.set("v.searchvalue", cmp.get("v.dn"));
              helper.screenPop(cmp);
              helper.clickToDial(
                "SMALLCTI_MAKECALLFROMMSD",
                /*cmp.get('v.iddCode')+*/ cmp.get("v.dn")
              );
              break;
          }
        } 
            else if (evnt.data.eventName == "clicktoscreenpop") {
          console.log(
            "click to screen pop event recieved:",
            JSON.stringify(evnt.data)
          );
          if (evnt.data.Object == "Account") {
            helper.simScreenPopWithEntity("Account");
          } 
            else if (evnt.data.Object == "Contact") {
            helper.simScreenPopWithEntity("Contact");
          } else if (evnt.data.Object == "Task") {
            helper.simScreenPopWithEntity("Task");
          } else if (evnt.data.Object == "Opportunities") {
            helper.simScreenPopWithEntity("Opportunities");
          }
        } 
          else if (evnt.data.eventName == "autoLogin") {
          console.log("autoLogin event recieved:", JSON.stringify(evnt.data));
          helper.autoLogin();
        }
              else if (evnt.data.eventName == "stateChanged") {
          console.log(
            "stateChanged event recieved:",
            JSON.stringify(evnt.data)
          );
          if (evnt.data.data == "login") {
            helper.enableClickToCall();
          } else if (evnt.data.data == "logout") {
            helper.disableClickToCall();
          }
        } 
                  else if (evnt.data.eventName == "searchContact") {
          console.log(
            "SearchContact event recieved:",
            JSON.stringify(evnt.data)
          );
          helper.searchContact(evnt);
        } else if (evnt.data.eventName == "SearchContactSelectedData") {
          console.log(
            "SearchContactSelectedData",
            JSON.stringify(evnt.data),
            evnt.data
          );
        }
      } 
      catch (err) {
        console.error("receiveMessage", err.message);
      }
    });
  },
});