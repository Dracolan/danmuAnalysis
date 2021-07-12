import './index.less'
let xhr = new XMLHttpRequest();
xhr.open('GET', 'src/danmu.xml', true);
xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log('success')
        var xml = new window.DOMParser().parseFromString(xhr.responseText, 'text/xml');
        console.log(xml)
        var danmu_array = [];
        var items = xml.getElementsByTagName('d');
        var total = xml.getElementsByTagName('maxlimit');
        for (var i = 0; i < items.length; i++) {
            var item:any = items[i];
            var json = item.getAttribute('p').split(',');
            var text = item.textContent;
            danmu_array.push({
                stime: parseFloat(json[0]),
                mode: parseInt(json[1]),
                size: parseInt(json[2]),
                color: parseInt(json[3]),
                date: parseInt(json[4]),
                class: parseInt(json[5]),
                uid: json[6],
                dmid: String(json[7]),
                text: String(text).replace(/(\/n|\\n|\n|\r\n)/g, '\r'),
                duration: 4.5,
                border: false,
                borderColor: 0x66ffff,
                on: false,
            });  
        }
        console.log(danmu_array)
    }
    
}
xhr.send()
console.log('hhhh')
