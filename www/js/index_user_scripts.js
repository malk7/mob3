(function()
{
 "use strict";
 /*
   hook up event handlers
 */
 function register_event_handlers()
 {

     $(document).on("click", "#allemagne", function(evt){
    activate_subpage("#"); // metre après le # le nom de la sub page
         //Puis mettre ta fonction et tout


});
          $(document).on("click", "#autriche", function(evt){
    activate_subpage("#"); // metre après le # le nom de la sub page
});

          $(document).on("click", "#danemark", function(evt){
    activate_subpage("#"); // metre après le # le nom de la sub page
});

          $(document).on("click", "#egypte", function(evt){
    activate_subpage("#"); // metre après le # le nom de la sub page
});

          $(document).on("click", "#espagne", function(evt){
    activate_subpage("#"); // metre après le # le nom de la sub page
});

          $(document).on("click", "#france", function(evt){
    activate_subpage("#"); // metre après le # le nom de la sub page
});

          $(document).on("click", "#grece", function(evt){
    activate_subpage("#"); // metre après le # le nom de la sub page
});

          $(document).on("click", "#japon", function(evt){
    activate_subpage("#"); // metre après le # le nom de la sub page
});
          $(document).on("click", "#mexique", function(evt){
    activate_subpage("#"); // metre après le # le nom de la sub page
});

          $(document).on("click", "#portugal", function(evt){
    activate_subpage("#"); // metre après le # le nom de la sub page
});









    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
