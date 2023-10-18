function postMessageToDynamics(custom, obj) {
  if (Object.keys(custom).length === 0) {
    return;
  }
  let res1 = { key: "CIF", value: obj.data.callVariables[0].value };
  let res2 = {
    key: "Authentication Flag",
    value: obj.data.callVariables[1].value,
  };
  custom.callVariables.shift();
  custom.callVariables.shift();
  custom.callVariables.unshift(res2);
  custom.callVariables.unshift(res1);
  var win = window.parent.document.getElementById("360");
  var callVariables = obj.callVariables;
  win.contentWindow[3].postMessage(
    {
      data: custom,
      eventName: "Data_From_CRM",
    },
    "*"
  );
}
