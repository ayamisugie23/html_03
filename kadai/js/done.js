//DONEクリックイベント
window.onload = function(){
    document.getElementById("text-button").onclick = function() {
        alert('ぴ');
        document.getElementById("text").innerHTML = "！";
    };
};

// $("#text-button").on("click",function(){
//     alert("ぴ");
//     $("#text").html('<span id="text">!</span>');
//     });

    const button = $("#text-button").val();
    const textd = $("#text").val();
    console.log(button);
    console.log(textd);