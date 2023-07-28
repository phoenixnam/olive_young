
function Validator(options){
      console.log(options.rules)

    var formE =document.querySelector(options.form)
   
    if(formE){
       
            options.rules.forEach(function (rule){
                var inputElement = formE.querySelector(rule.selector);
                if(inputElement){
                    inputElement.onblur = function(){
                        var errorMessage = rule.test(inputElement.value);
                    }
                }
            });
        
    }
  
}

Validator.isRequired = function(selector){
 return {
    selector,
    test: function(value){
        return value.trim() ? undefined : "Vui lòng nhập trường này"
    }
};
}
Validator.isEmail = function(selector){
    return selector;
}