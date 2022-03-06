var operations = (function(){
    var privateOperations = 0;
    function ChangingEvent(val){
privateOperations+=val;
}
return {
    increment: function(){
ChangingEvent(1);

},
decrement: function(){
    ChangingEvent(-1);

},
value:function(){
    return privateOperations;
}
};
})();