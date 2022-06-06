//Veja a explicação em https://www.youtube.com/watch?v=lbuNa98hn7U
//Usar em Apps Script
//Executa quando nosso App recebe uma solicitação GET
function doGet(e){
  return HtmlService.createHtmlOutput('solicitação recebida');
}

//Executa quando nosso App recebe uma solicitação POST
function doPost(e){

  if(typeof e !== 'undefined')
    var parametros = e.parameter;

  var planilha = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Newsletter');

  var ultimeLinha = Math.max(planilha.getLastRow(),1);

  var linhaAtual = ultimeLinha + 1;

  planilha.insertRowAfter(ultimeLinha);

  var nome = parametros['Nome'];
  var email = parametros['E-mail']; 
  var whatsapp = parametros['WhatsApp'];

  planilha.getRange(linhaAtual, 1).setValue(nome);
  planilha.getRange(linhaAtual, 2).setValue(email);
  planilha.getRange(linhaAtual, 3).setValue(whatsapp);

  SpreadsheetApp.flush();

  return HtmlService.createHtmlOutput('Solicitação recebida!');

}
