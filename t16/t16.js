/**
 * aqiData���洢�û�����Ŀ���ָ������
 * ʾ����ʽ��
 * aqiData = {
 *    "����": 90,
 *    "�Ϻ�": 40
 * };
 */
var aqiData = {};
//aqiData['����']=90;
//aqiData['�Ϻ�']=80;
var city = document.getElementById("aqi-city-input");
var num = document.getElementById('aqi-value-input');
/**
 * ���û������л�ȡ���ݣ���aqiData������һ������
 * Ȼ����Ⱦaqi-list�б���������������
 */
function addAqiData() {

    if(!city.value.trim().match(/^([a-zA-Z\u4e00-\u9fa5])+$/)){
        alert('������Ϣ���Ǻ������ݣ���������д��');
        city.value = '';
        return ;
    }

    if(!num.value.trim().match(/^\d+$/g)){
        alert("�����������Ǻ������ݣ���������д��");
        num.value = '';
        return ;
    }

    aqiData[city.value.trim()] = num.value.trim();
    console.log(aqiData);
}

/**
 * ��Ⱦaqi-table���
 */
function renderAqiList() {
    var str = '<tr> <td>����</td><td>��������</td><td>����</td> </tr>';
    for(var city in aqiData){
        str += '<tr><td>'+city+'</td><td>'+aqiData[city]+'</td><td><button data-city="'+city+'">ɾ��</button></td></tr>';
    }
    //alert(t);alert(str);
    document.getElementById('aqi-table').innerHTML = str;
}

/**
 * ���add-btnʱ�Ĵ����߼�
 * ��ȡ�û����룬�������ݣ�������ҳ����ֵĸ���
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * �������ɾ����ť��ʱ��Ĵ����߼�
 * ��ȡ�ĸ��������ݱ�ɾ��ɾ�����ݣ����±����ʾ
 */
function delBtnHandle(city) {
    // do sth.
    alert(city);
    delete aqiData[city];
    renderAqiList();
}
;
function init() {

    // ���������add-btn��һ������¼������ʱ����addBtnHandle����
    document.getElementById('add-btn').addEventListener("click",addBtnHandle);
    // ��취��aqi-table�е�����ɾ����ť���¼�������delBtnHandle����
    document.getElementById('aqi-table').addEventListener("click",function(event){
        if(event.target.nodeName.toLowerCase()==='button'){
            delBtnHandle(event.target.dataset.city);
        }

    });
}

init();
