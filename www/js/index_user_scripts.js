(function()
{
 "use strict";
 /*
   hook up event handlers
 */
 function register_event_handlers()
 {


     /* button  hil */
    $(document).on("click", ".uib_w_2", function(evt)
    {
         activate_subpage("#page_97_14");
    });

    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
