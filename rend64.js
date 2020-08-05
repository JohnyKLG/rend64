window.onload = function(){
    bd = document.body;bd.style = 'background:#ccc;color:#666;'
    var dstl = "position:fixed;top:9px;width:250px;height:250px;background:#666;border:1px solid #000;";
    var din = document.createElement('div');din.style = dstl+'left:9px;';
    din.id = 'din';bd.appendChild(din);
    var dout = document.createElement('div');dout.style = dstl+'left:399px;';
    dout.id = 'dout';bd.appendChild(dout);
    var istl = "position:fixed;top:10px;left:10px;";
    var cin = document.createElement('img');cin.style = istl;
    cin.id = 'iin';bd.appendChild(cin);
    var ostl = "position:fixed;top:10px;left:400px;max-width:250px;max-height:250px;";
    var cout = document.createElement('img');cout.style = ostl;
    cout.id = 'iout';bd.appendChild(cout);
    var fstl = "position:fixed;top:270px;left:9px;width:115px;";
    var cfle = document.createElement('input');cfle.style = fstl;
    cfle.type = 'file';cfle.accept = 'image/*';cfle.id = 'fle';
    cfle.setAttribute('onchange','imgIn(event)');
    bd.appendChild(cfle);
    var wstl = "position:fixed;top:270px;left:147px;width:60px;";
    var cwdt = document.createElement('input');cwdt.style = wstl;
    cwdt.type = 'number';cwdt.id = 'cwdt';bd.appendChild(cwdt);
    var hstl = "position:fixed;top:270px;left:260px;width:60px;";
    var chgt = document.createElement('input');chgt.style = hstl;
    chgt.type = 'number';chgt.id = 'chgt';bd.appendChild(chgt);
    var swstl = "position:fixed;top:272px;left:135px;font:15px sans-serif;";
    var swdt = document.createElement('span');swdt.innerText = 'L';
    swdt.style = swstl;bd.appendChild(swdt);
    var shstl = "position:fixed;top:272px;left:247px;font:15px sans-serif;";
    var shgt = document.createElement('span');shgt.innerText = 'A';
    shgt.style = shstl;bd.appendChild(shgt);
    var swstl = "position:fixed;top:270px;left:217px;font:15px sans-serif;";
    var swdt = document.createElement('span');swdt.innerText = 'px';
    swdt.style = swstl;bd.appendChild(swdt);
    var shstl = "position:fixed;top:270px;left:330px;font:15px sans-serif;";
    var shgt = document.createElement('span');shgt.innerText = 'px';
    shgt.style = shstl;bd.appendChild(shgt);
    var tstl = "position:fixed;top:300px;left:9px;width:636px;height:200px;resize: none;";
    var ctxt = document.createElement('textarea');ctxt.style = tstl;
    ctxt.id = 'ctxt';bd.appendChild(ctxt);
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
    var dist = 76;
    var resultado = new Array(parseInt(texto.length / dist));
    for(var x = 0; x < texto.length / dist; x++){
        document.getElementById('ctxt').value+= "vOut '"+texto.substring(0 + x * dist, (x + 1) * dist)+"';\n";
    }
    var iout = document.getElementById('iout');
    iout.src = texto;
    document.getElementById('btn').remove();
    var bstl = "position:fixed;top:270px;left:9px;";
    var cbtn = document.createElement('button');cbtn.style = bstl;
    cbtn.innerText = 'Novo arquivo';cbtn.id = 'btn';
    cbtn.setAttribute('onclick','location.reload()');bd.appendChild(cbtn);
}
var imgIn = function(event){
    var iin = document.getElementById('iin');
    iin.src = URL.createObjectURL(event.target.files[0]);
    iin.onload = function(){
        document.getElementById('cwdt').value = iin.width;
        document.getElementById('chgt').value = iin.height;
        document.getElementById('fle').remove();
        var bstl = "position:fixed;top:270px;left:9px;";
        var cbtn = document.createElement('button');cbtn.style = bstl;
        cbtn.innerText = 'Renderizar';cbtn.id = 'btn';
        cbtn.setAttribute('onclick','png64()');bd.appendChild(cbtn);
        iin.style.maxWidth = '250px';
        iin.style.maxHeight = '250px';
    }
};