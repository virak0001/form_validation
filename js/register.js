$(document).ready(function(){
    $("#btn").on('click', function(){
        var user = $("#user").val();
        var pass = $("#pass").val();
        var email = $("#email").val();
        (user != "")?setSuccess("#user", "#u-label"):setError("#user", "#u-label");
        (pass != "")?setSuccess("#pass", "#p-label"):setError("#pass", "#p-label");
        (email != "")?setSuccess("#email", "#e-label"):setError("#email", "#e-label");
    });
})
function setSuccess (success ,icon){
    $(success).addClass("border-success").removeClass("border-danger");
    $(icon).addClass("text-success").removeClass("text-danger");
    $("#btn").addClass("bg-success").removeClass("bg-danger");
}
function setError (error, icon){
    $(error).addClass("border-danger").removeClass("border-success");
    $(icon).addClass("text-danger").removeClass("text-success");
    $("#btn").addClass("bg-danger").removeClass("bg-success");
}