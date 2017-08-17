var statements = ["Dogs are awesome","No, cats are better", "But seriously, dogs are the best.","And then something happened!"];


var pStatementBlock = document.getElementById("statementBlock");

var i;
//Loop through the 3 values.

pStatementBlock.innerHTML = "";
for(i=0;i<statements.length;i++) {
  var statementToAdd = statements[i];
  pStatementBlock.innerHTML += statementToAdd;
  pStatementBlock.innerHTML += "<br/>";

};
