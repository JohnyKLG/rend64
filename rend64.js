window.onload = HTMLgen;
function HTMLgen(){
    bd = document.body;
    var cin = document.createElement('img');
    cin.id = 'iin';bd.appendChild(cin);
    var cout = document.createElement('img');
    cout.id = 'iout';bd.appendChild(cout);
    var cfle = document.createElement('input');
    cfle.type = 'file';cfle.accept = 'image/*';cfle.id = 'fle';
    cfle.setAttribute('onchange','imgIn(event)');
    bd.appendChild(cfle);
    var cwdt = document.createElement('input');
    cwdt.type = 'number';cwdt.id = 'cwdt';bd.appendChild(cwdt);
    var chgt = document.createElement('input');
    chgt.type = 'number';chgt.id = 'chgt';bd.appendChild(chgt);
}
function canvas64(img){
    var canvas = document.createElement("canvas");
    var wdt = document.getElementById('cwdt').value;
    var hgt = document.getElementById('chgt').value;
    canvas.width = wdt;
    canvas.height = hgt;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, wdt, hgt);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
}
function png64(){
    var texto = canvas64(document.getElementById('iin'));
    var dist = 112;
    var resultado = new Array(parseInt(texto.length / dist));
    for(var x = 0; x < texto.length / dist; x++){
        document.body.innerHTML+= "cnfg64+= '"+texto.substring(0 + x * dist, (x + 1) * dist)+"';<br>";
    }
    var iout = document.getElementById('iout');
    iout.src = texto;
    document.getElementById('fle').remove();
    document.getElementById('btn').remove();
    document.getElementById('cwdt').remove();
    document.getElementById('chgt').remove();
}
var imgIn = function(event){
    var iin = document.getElementById('iin');
    iin.src = URL.createObjectURL(event.target.files[0]);
    iin.onload = function(){
        document.getElementById('cwdt').value = iin.width;
        document.getElementById('chgt').value = iin.height;
        var cbtn = document.createElement('button');//chgt.style = dstl;
        cbtn.innerText = 'Gerar';cbtn.id = 'btn';
        cbtn.setAttribute('onclick','png64()');bd.appendChild(cbtn);
    }
};
