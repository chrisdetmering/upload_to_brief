function uploadToBriefing(){
  var sheet = SpreadsheetApp.getActiveSheet();
  
  //var sheet = ss.getSheets()[0];
  var doc = DocumentApp.openById('1M5pnikmuz4W-tCswM1Ap3CWOagMHyrfxErNupHYOW_c');
  var body = doc.getBody();
  var text = body.editAsText();
  
  for (var x = 1; x < 8; x ++) {
    
    var rowData = sheet.getRange(1, x, 5, 1).getValues();
    var table = body.appendTable(rowData);
 
    for (var j = 1; j < 5; j ++) {
    
       table.getCell(0, 0).getChild(0).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER).setBold(true)
//     var date = table.getCell(0, 0).getChild 
//     Utilities.formatDate(date, "GMT", "EEE MMM dd yyyy");
      
      
      var numChildren = table.getCell(j, 0).getNumChildren()
      
       for (var i = 0; i < numChildren; i ++) { 
       table.getCell(j, 0).getChild(i).asParagraph().setAlignment(DocumentApp.HorizontalAlignment.CENTER)
       } 
    }
    
   body.appendParagraph('\nHighlights').getChild(0).setBold(true);
    text.appendText('\nGOAL →');
    text.appendText('\n');
    text.appendText('\nFOCUS →');
    text.appendText('\n');
    text.appendText('\nTIME →');
    text.appendText('\n');
    body.appendParagraph('\nIntro').getChild(0).setBold(true);;
    text.appendText('\n');
    body.appendParagraph('\nStimulus').getChild(0).setBold(true);;
    text.appendText('\n');
    body.appendParagraph('\nTimeline').getChild(0).setBold(true);;
    text.appendText('\n');
    body.appendParagraph('\nWarm-up').getChild(0).setBold(true);;
    text.appendText('\n');
    body.appendParagraph('\nTeaching').getChild(0).setBold(true);;
    text.appendText('\n');
    body.appendParagraph('\nScaling').getChild(0).setBold(true);;
    text.appendText('\n');
    body.appendPageBreak();
  }
}