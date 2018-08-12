(function (jquery) {
    console.log(jquery)
    var _const = {
        // 通用
        Universal: {
            ACTION_SUCCESS_STR: "操作成功",
            ACTION_FAILED_STR: "操作失败"
        },
    
        BigCustomer: {
            CONTRACT_LIST_TMPL_URL: 'BigCustomer/ContractList',
            CUSTOMER_LIST_TMPL_URL: 'BigCustomer/BigAndShareCustomerList',
        }
    }
    
    return conso  = function () {
        debugger
        var args = Array.prototype.slice.apply(arguments),
            constArr = [],
            constObj = {};
        
        if(!args.length) {
            for(var i = 0; i < args.length; i++){
                var item = args[i];
                args.push(i);
            }
        }
    
        for(var k = 0; k < args.length; k++){
            var item = args[k];
            constArr.push(_const[item])
        }
    
        for(var j = 0; j < constArr.length; j++){
            var item = constArr[j];
            if(typeof item != 'object' ) return true;
    
            $.each(item,function (index,val) {
                debugger
                if(!constObj[index]){
                    constObj[index] = val;
                } else {
                    constObj[index + '_' + Math.floor(Math.random() * 10000)] = val;
                }
            })
        }
    
        return constObj;
    }

    // function each (obj,callBack) {
    //     for()
    // }

})($)