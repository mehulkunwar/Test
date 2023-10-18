const callVar = {};
const ntwsData = {
  callVariables: [
    {
      key: "CIF",
      value: "222",
    },
  ],
  source: "360",
};

const fun = () => {
     console.log("Data from NTWS", obj);
     console.log("Dat from CTI CALL VAR", custom);

     if (Object.keys(custom).length === 0) {
       return;
     }
     var languageCode = Xrm.Page.context.getUserLcid();
     let res1 = { key: "CIF", value: obj.data.callVariables[0].value };
     let authLevel;
     if (custom.callVariables[3].value === "Authenticated") {
       authLevel = "1";
     } else {
       authLevel = "3";
     }

     let res3 = {
       key: "Language",
       value: languageCode,
     };

     let dataTo360 = {
       eventName: "CallInitiated",
       callVariables: [
         {
           key: "CIF",
           value: obj.data.callVariables[0].value,
         },
         {
           key: "AuthenticationLevel",
           value: authLevel,
         },
         {
           key: "Language",
           value: languageCode,
         },
       ],
       source: "NvCtiConnector",
     };
     var win = window.parent.document.getElementById("FullPageWebResource");
     console.error("Window:", win);
     var callVariables = obj.callVariables;
     win.contentWindow[3].postMessage(
       {
         data: dataTo360,
         eventName: "Data_From_CRM",
       },
       "*"
     );
     console.log("DATA SEND TO 360 FROM postMessageToDynamics", dataTo360);
}

fun(callVar, ntwsData);