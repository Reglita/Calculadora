$(function () {
    $("#sumar").click(function () {
        var n1 = Number($('#num1').val());
        var n2 = Number($('#num2').val());
        $('#res').val(n1 + n2);
    });
    $("#restar").click(function () {
        var n1 = Number($('#num1').val());
        var n2 = Number($('#num2').val());
        $('#res').val(n1 - n2);
    });
    $("#multiplicar").click(function () {
        var n1 = Number($('#num1').val());
        var n2 = Number($('#num2').val());
        $('#res').val(n1 * n2);
    });
    $("#dividir").click(function () {
        var n1 = Number($('#num1').val());
        var n2 = Number($('#num2').val());
        $('#res').val(n1 / n2);
    });
});


