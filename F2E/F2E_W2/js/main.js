


//Date 日期from-to
$(function(){
    var dateFormat = 'yy/mm/dd';
    var from = $('#from').datepicker({
    defaultDate:"+1w",
    changeMonth: true,
    numberOfMonth:3
})
.on('change',function(){
    to.datepicker("option","minDate",getDate(this));
})
    var to = $('#to').datepicker({
    defaultDate:"+1w",
    changeMonth: true,
    numberOfMonth:3
})
.on('change',function(){
    from.datepicker("option","maxDate",getDate(this));
})
function getDate(element){
    var date;
    try{
        date =$.datepicker.parseDate(dateFormat,element.value);
    }catch(error){
        date = null;
    }
    return date;
}
//獲得時間區隔
    var dateFrom;
    var dateTo;
    $('#from').on('change', function(){
        dateFrom = $(this).val();
        $('.time-date').text(dateFrom);
    });
    $('#to').on('change', function(){
        dateTo = $(this).val();
        $('.time-date').append(" - "+dateTo);
    });
    


});

//all勾選

document.addEventListener('click',function(e){
    const all = $("#checkAll");
    all.click(function(){
            $("input[name='checkbox-item']").prop("checked",$(this).prop("checked"));
    });//end click
    //如果有一個選項沒選取消勾選All
    const getCheck = $(".check");
    getCheck.click(function(){
        if(!getCheck.prop("checked")){
            all.prop("checked",false); 
        }
    });
});


//刪除標籤
document.addEventListener('click',function(){
    var del = $(".del");
    del.click(function(){
        $(this).parent().remove();
    })
});





//AJAX
var gethtml = new XMLHttpRequest();
gethtml.open("GET", 
"https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97",true);
gethtml.setRequestHeader('Content-type','application/json')
gethtml.send();
gethtml.onload = function(){
    console.log(gethtml);
}






// const searchFor = 'cat';
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET",`https://api.unsplash.com/search/photos?query=${searchFor}`,true);
//     xhr.onload= addImage;
//     xhr.setRequestHeader('Authorization','Client-ID d360c2acfb37e26988c453e8301e46111f16283ad34725a0ee23f9d18f516338') 
//     xhr.send();
// function addImage(){
//     const data =JSON.parse(this.responseText);
//     htmlContent=`<figure>
//         <img src="${data.urls}" alt="${searchFor}"> 
//     </figure>`
// responseContainer.insertAdjacentHTML('afterbegin',htmlContent);
    
// }
// console.log(xhr);
    

// addImage();
