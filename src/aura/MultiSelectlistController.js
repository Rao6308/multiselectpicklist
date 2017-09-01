({
    doInit: function(component, event, helper) {
        
    },
    moveright: function(component,event,helper) {
        var selectedvaluesfromleft = $('#select-01').val();
        var allvaluesatright       = [];
        var optsleft = [];
        if(selectedvaluesfromleft === null){
            alert('Select atleast one value from available options to move to selected options');
        }
        else{
            
            $("#select-02 option").each(function () { 
                allvaluesatright.push($(this).text());    
            });
            $("#select-02 option").each(function () {    
                optsleft.push($(this).text());    
            });    
            for (var i = 0; i < selectedvaluesfromleft.length; i++) { 
                if(helper.checkifvalueisadded(selectedvaluesfromleft[i],allvaluesatright) === true){
                    //do nothing
                }
                else{
                    optsleft.push(selectedvaluesfromleft[i]);
                    optsleft.sort();
                    component.set("v.rightsidelist",optsleft);
                    $("#select-01 option[value='"+selectedvaluesfromleft[i]+"']").hide();
                    $("#select-01 option[value='"+selectedvaluesfromleft[i]+"']:selected").removeAttr("selected");
                }
            }
        }
    },
     moveleft: function(component,event,helper) {
        var selectedvaluesfromright = $('#select-02').val();
        var allvaluesatleft       = [];
        var optsright = [];
        if(selectedvaluesfromright === null){
            alert('Select atleast one value from selected options to move to available options');
        }
        else{
            $("#select-01 option").each(function () { 
                allvaluesatleft.push($(this).text());    
            });
            $("#select-01 option").each(function () {    
                optsright.push($(this).text());    
            });   
            for (var i = 0; i < selectedvaluesfromright.length; i++) {
                if(helper.checkifvalueisadded(selectedvaluesfromright[i],allvaluesatleft) === true){
                   //do nothing
                }
                else{
                    optsright.push(selectedvaluesfromright[i]);
                    optsright.sort();
                    component.set("v.leftsidelist",optsright);
                    $("#select-02 option[value='"+selectedvaluesfromright[i]+"']").hide();
                    $("#select-02 option[value='"+selectedvaluesfromright[i]+"']:selected").removeAttr("selected");
                }
            }
        }
    },
     movealltoright: function(component,event,helper) {
          var optsleft = [];
          $("#select-02 option").each(function () { 
                optsleft.push($(this).text());    
          });
          $("#select-01 option").each(function () { 
                optsleft.push($(this).text());    
          });  
          optsleft.sort();
          component.set("v.rightsidelist",optsleft);
          component.set("v.leftsidelist",null);
    },
     movealltoleft: function(component,event,helper) {
         var optsright = [];
         $("#select-02 option").each(function () { 
                optsright.push($(this).text());    
         });
         $("#select-01 option").each(function () {    
                optsright.push($(this).text());    
         });   
         optsright.sort();
         component.set("v.leftsidelist",optsright);
         component.set("v.rightsidelist",null);
    }
    
})