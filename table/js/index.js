$(document).ready(function () {
    $("#submit").click(function () {
        var name = $("#name").val();
        var code = $("#code").val();
        $("#emp").append("<tr><td>" + code + "</td><td>" + name + "</td></tr>");
    });
});