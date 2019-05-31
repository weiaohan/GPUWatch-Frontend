$(document).ready(function() {
    $("#login").submit(function() {
        var data = {}
        data.email = $("#inputEmail").val()
        data.pwd = $("#inputPassword").val()
        console.log(data)
        $.ajax({
            url: "http://211.83.111.222/api/login",
            type: "post",
            data: data,
            success: function(result) {
                if(result == -1) {
                    alert("用户不存在！")
                } else if (result == -2) {
                    alert("密码错误！")
                } else {
                    console.log(result)
                    var name = result.name
                    // window.location.href = "http://211.83.111.222?name=" + name
                }
            }
        })
    })
});