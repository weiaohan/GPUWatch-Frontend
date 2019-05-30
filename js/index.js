$(document).ready(function(){
    console.log("hello")
    $.ajax({
        url: "http://211.83.111.222/api/gpuinfo",
        type: "GET",
        dataType: "json",
        success: function(data) {
            var gpu = JSON.parse(data)
            console.log(gpu)
            $("#driver span:nth-child(2)").text(gpu.driverInfo)
            var rate0 = gpu.GPU0.usage/gpu.GPU0.total
            rate0 = rate0.toFixed(2)
            var rate1 = gpu.GPU1.usage/gpu.GPU1.total
            rate1 = rate1.toFixed(2)
            $("#table1").append('<tr> \
            <th>0</th> \
            <th>'+gpu.GPU0.total+'</th> \
            <th>'+gpu.GPU0.usage+'</th> \
            <th>'+gpu.GPU0.free+'</th> \
            <th>'+rate0+'%</th> \
            <th> \
              <button type="button" class="btn btn-primary">订阅</button> \
            </th> \
          </tr> \
          <tr> \
            <th>1</th> \
            <th>'+gpu.GPU1.total+'</th> \
            <th>'+gpu.GPU1.usage+'</th> \
            <th>'+gpu.GPU0.free+'</th> \
            <th>'+rate1+'%</th> \
            <th> \
              <button type="button" class="btn btn-primary">订阅</button> \
            </th> \
          </tr>')
        }
    });
    $.ajax({
        url: "http://211.83.111.222/api/gpuprocess",
        type: "GET",
        success: function(result) {
            console.log(result)
            for (i  = 0 ; i < result.length; i++) {
                $("#table2").append(
                    '<tr> \
                        <th>'+i+'</th> \
                        <th>'+result[i].pid+'</th> \
                        <th>'+result[i].name+'</th> \
                        <th>'+result[i].username+'</th> \
                        <th>'+result[i].GPUUsage+'Mib</th> \
                    </tr>'
                )
            }
        }
    })
  });