var store_item = [];
var store_unit = [];
var store_time = [];

function submit_details(){
    var item_details = document.getElementById('item').value
    var unit_details = document.getElementById('unit').value
    var time_details = document.getElementById('time').value

    if(time_details<=24){
        store_item.push(item_details)
        store_time.push(time_details)
    }
    else{
        alert("please submit your courect time detail's")
    }

    if(unit_details<=500){
        store_unit.push(unit_details)
    }
    else{
        alert("please submit your courect unit detail's")
    }

    var item_details = document.getElementById('item').value = "";
    var unit_details = document.getElementById('unit').value = "";
    var time_details = document.getElementById('time').value = "";
}

function get_unit(){          
    var store_cal_unit = [];
    var final_unit = "";
    for(var i=0; i<Number(store_unit.length); i++){
        var total_unit = Number(store_unit[i])
            for(var j=0; j<Number(store_time.length); j++){
                var total_time = (Number(store_time[i])*30)
            }  
        var total_unit_cal = Number(total_unit)* Number(total_time)
        store_cal_unit.push(total_unit_cal)
        total_unit = "";
        total_time = "";
    }

    for(var i=0; i<Number(store_cal_unit.length); i++){
        final_unit = Number(final_unit) + Number(store_cal_unit[i]/1000)
        console.log(final_unit)
    } 
    
    document.getElementById("total_unit").value = final_unit 
    get_bill(final_unit)
}

function get_bill(final_unit){
    if(Number(final_unit)<=100){
        var total_bill = Number(final_unit)*4
        document.getElementById("total_amount").value = total_bill;
    }
    else if(Number(final_unit)<=300 && Number(final_unit)>100){
        var bill_1 = 100*4
        var bill_2 = (Number(final_unit)-100)*5
        var total_bill = bill_1+bill_2
        document.getElementById("total_amount").value = total_bill;
    }
    else if(Number(final_unit)<=500 && Number(final_unit)>300){
        var bill_1 = 100*4
        var bill_2 = (Number(final_unit)-100)
        var bill_3 = 300*5
        var bill_4 = (Number(bill_2)-300)
        var bill_5 = Number(bill_4)*7
        var total_bill = bill_1+bill_3+bill_5
        document.getElementById("total_amount").value = total_bill;
    }
    else if(Number(final_unit)>500){
        var bill_1 = 100*4
        var bill_2 = (Number(final_unit)-100)
        var bill_3 = 300*5
        var bill_4 = (Number(bill_2)-300)
        var bill_5 = 500*7
        var bill_6 = (Number(bill_4)-500)
        var bill_7 = (Number(bill_6)*10)
        total_bill = bill_1+bill_3+bill_5+bill_7
        var total_bill = bill_1+bill_3+bill_5
        document.getElementById("total_amount").value = total_bill;
        
    }
   
}      