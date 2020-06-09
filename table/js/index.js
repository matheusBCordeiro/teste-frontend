$(document).ready(function () {
    $("#submit").click(function () {
        var name = $("#name").val();
        var code = $("#code").val();
        var remove = "Remove";
        $("#emp").append("<tr id=\"el\"><td>" + code + "</td><td>" + name + "</td> <td><button id=\"delete\" class=\"btn btn-danger\">" +remove + "</button></td>");

        $("#delete").click(function(){
            $("#el").remove();
          });
    });

    
        
    
});