/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
//aqiData['北京']=90;
//aqiData['上海']=80;
var city = document.getElementById("aqi-city-input");
var num = document.getElementById('aqi-value-input');
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {

    if(!city.value.trim().match(/^([a-zA-Z\u4e00-\u9fa5])+$/)){
        alert('城市信息不是合理数据，请重新填写！');
        city.value = '';
        return ;
    }

    if(!num.value.trim().match(/^\d+$/g)){
        alert("空气质量不是合理数据，请重新填写！");
        num.value = '';
        return ;
    }

    aqiData[city.value.trim()] = num.value.trim();
    console.log(aqiData);
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var str = '<tr> <td>城市</td><td>空气质量</td><td>操作</td> </tr>';
    for(var city in aqiData){
        str += '<tr><td>'+city+'</td><td>'+aqiData[city]+'</td><td><button data-city="'+city+'">删除</button></td></tr>';
    }
    //alert(t);alert(str);
    document.getElementById('aqi-table').innerHTML = str;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
    // do sth.
    alert(city);
    delete aqiData[city];
    renderAqiList();
}
;
function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    document.getElementById('add-btn').addEventListener("click",addBtnHandle);
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    document.getElementById('aqi-table').addEventListener("click",function(event){
        if(event.target.nodeName.toLowerCase()==='button'){
            delBtnHandle(event.target.dataset.city);
        }

    });
}

init();
