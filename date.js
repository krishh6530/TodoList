// module.exports.getdate=getdate;

exports.getdate = function (){

    var today=new Date();
    var options={
        weekday: "long",
        day : "numeric",
        month : "long"
    };
    var currentday=today.getDay();
    var day =today.toLocaleDateString("en-US" , options);

    return day;
}
// module.exports.getday=getday;
exports.getday = function() {

    var today=new Date();
    var options={
        weekday: "long",
    };
    var currentday=today.getDay();
    var day =today.toLocaleDateString("en-US" , options);

    return day;
}