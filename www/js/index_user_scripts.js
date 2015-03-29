(function()
{
 "use strict";

    var tableauPlat = new Array;
    var cpt = 0;

        $.ajax({
        url: 'http://greenpear.890m.com/Temp_Metier/recette_du_monde.xml',
        dataType: 'xml',
        success: function(data){

            $(data).find("plat").each(
                function() {
                var tableauTemp = new Object();

                tableauTemp.pays = $(this).find('pays').text();
                tableauTemp.nom = $(this).find('nom').text();
                tableauTemp.preparation = $(this).find('preparation').text();
                tableauTemp.ingredients = $(this).find('ingredients').text();
                tableauTemp.restaurant = $(this).find('restaurant').text();
                tableauTemp.telephone = $(this).find('telephone').text();
                tableauTemp.adresse = $(this).find('adresse').text();
                tableauTemp.description = $(this).find('description').text();

                tableauPlat[cpt] = tableauTemp;
                cpt++;
            });
            console.log(tableauPlat[1].nom);
        },
        error: function(data){
            console.log('Error loading XML data');
        }
    });


        for(var i = 0; i < tableauPlat.length; i++)
        {
            console.log(tableauPlat[i].nom);
            console.log(tableauPlat[i].pays);
        }

    function afficheResultats(paysParametre) {
        console.log("Coucou");

        $.ajax({
        url: 'http://greenpear.890m.com/Temp_Metier/recette_du_monde.xml',
        dataType: 'xml',
        success: function(data){

            var tableauPlat = new Array;

            $(data).find("plat").each(
                function() {

                if ($(this).find('pays').text() == paysParametre)
                {
                    console.log($(this).find('pays').text() + " " + $(this).find('nom').text());
                    var tableauTemp = new Object();

                    tableauTemp.pays = $(this).find('pays').text();
                    tableauTemp.nom = $(this).find('nom').text();
                    tableauTemp.preparation = $(this).find('preparation').text();
                    tableauTemp.ingredients = $(this).find('ingredients').text();
                    tableauTemp.restaurant = $(this).find('restaurant').text();
                    tableauTemp.telephone = $(this).find('telephone').text();
                    tableauTemp.adresse = $(this).find('adresse').text();
                    tableauTemp.description = $(this).find('description').text();

                    tableauPlat.push(tableauTemp);
                    /*
                    tableauPlat[cpt] = tableauTemp;
                    cpt++;
                    */
                }
            });

            console.log("Taille de tableauPlat : " + tableauPlat.length);
            document.getElementById('listePlats').innerHTML = '<div data-role="content">' +
						'<div class="content-primary">' +
							'<ul data-role="listview" data-split-icon="gear" data-split-theme="d">';

                for(var i = 0; i < tableauPlat.length; i++)
            {
                console.log(tableauPlat[i].nom);

                document.getElementById('listePlats').innerHTML += '<li>' +
                    '<a id="sousListePlat">'
                    '<img src="' + tableauPlat[i].image_url + '">' +
                    '<h3>' + tableauPlat[i].nom + '</h3>';
            }
            document.getElementById('listePlats').innerHTML += '</a> </li> </ul> </div> </div>';


        },
        error: function(data){
            console.log('Error loading XML data');
        }
    });
    }

 /*
   hook up event handlers
 */
 function register_event_handlers()
 {

     $(document).on("click", "#allemagne", function(evt){
    afficheResultats("Allemagne");
    activate_subpage("#plats"); // metre après le # le nom de la sub page

});
          $(document).on("click", "#autriche", function(evt){
    afficheResultats("Autriche");
    activate_subpage("#plats"); // metre après le # le nom de la sub page
});

          $(document).on("click", "#danemark", function(evt){
    afficheResultats("Danemark");
    activate_subpage("#plats"); // metre après le # le nom de la sub page
});

          $(document).on("click", "#egypte", function(evt){
    afficheResultats("Egypte");
    activate_subpage("#plats"); // metre après le # le nom de la sub page
});

          $(document).on("click", "#espagne", function(evt){
    afficheResultats("Espagne");
    activate_subpage("#plats"); // metre après le # le nom de la sub page
});

          $(document).on("click", "#france", function(evt){
    afficheResultats("France");
    activate_subpage("#plats"); // metre après le # le nom de la sub page
});

          $(document).on("click", "#grece", function(evt){
    afficheResultats("Grèce");
    activate_subpage("#plats"); // metre après le # le nom de la sub page
});

          $(document).on("click", "#japon", function(evt){
    afficheResultats("Japon");
    activate_subpage("#plats"); // metre après le # le nom de la sub page
});
          $(document).on("click", "#mexique", function(evt){
    afficheResultats("Mexique");
    activate_subpage("#plats"); // metre après le # le nom de la sub page
});

          $(document).on("click", "#portugal", function(evt){
    afficheResultats("Portugal");
    activate_subpage("#plats"); // metre après le # le nom de la sub page
});


    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
