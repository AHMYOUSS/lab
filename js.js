function DrawGrid()
{
var table = document.getElementById('table')  ;
    table.innerHTML="" ;
var rows = document.getElementById('height').value ,
 cols = document.getElementById('width').value;
var tabledata='' ;
    for ( var  i=0 ; i < rows ; i++) {
        tabledata +=  '<tr>';
        for (var x=0 ; x < cols ; x++ ) {
            tabledata += ' <td>   '
        }
        tabledata ='<tr>'
    }
    alert(tabledata)  ;
}