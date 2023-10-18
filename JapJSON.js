function uwu(){
var languageCode = Xrm.Page.context.getUserLcid();
var obj = {};
obj = {
  eventName: "CallInitiated",
  callVariables: [
    {
      key: "CIF",
      value: "80000033",
    },
    {
      key: "AuthenticationLevel",
      value: 1,
    },
    {
      key: "Language",
      value: "1033",
    },
  ],
  source: "NvCtiConnector",
};

var win = window.parent.document.getElementById("360");
  
//var win = document.getElementById("FullPageWebResource");
// win.contentWindow.postMessage(
//   {
//     data: obj,
//   },
//   "*"
//   );
  win.contentWindow[3].postMessage({
                "data" : obj,
                "eventName" :"Data_From_CRM"
            },"*");

}


