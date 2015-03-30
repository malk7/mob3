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

    function fichePlat(nomParametre) {
        $.ajax({
        url: 'http://greenpear.890m.com/Temp_Metier/recette_du_monde.xml',
        dataType: 'xml',
        success: function(data){

            var tableauPlat;

            $(data).find("plat").each(
                function() {

                if ($(this).find('nom').text() == nomParametre)
                {
                    var tableauTemp = new Object();

                    tableauTemp.pays = $(this).find('pays').text();
                    tableauTemp.nom = $(this).find('nom').text();
                    tableauTemp.preparation = $(this).find('preparation').text();
                    tableauTemp.ingredients = $(this).find('ingredients').text();
                    tableauTemp.restaurant = $(this).find('restaurant').text();
                    tableauTemp.telephone = $(this).find('telephone').text();
                    tableauTemp.adresse = $(this).find('adresse').text();
                    tableauTemp.description = $(this).find('description').text();
                    tableauTemp.image_url = $(this).find('image_url').text();

                    tableauPlat = tableauTemp;
                    /*
                    tableauPlat[cpt] = tableauTemp;
                    cpt++;
                    */
                }
            });

            document.getElementById('plats').innerHTML = '<p>';
            document.getElementById('plats').innerHTML += '<h1>' + tableauPlat.nom + '</h1>';
            document.getElementById('plats').innerHTML += '<img src="' + tableauPlat.image_url + '">';
            document.getElementById('plats').innerHTML += '<h3>Ingrédients</h3>' + tableauPlat.ingredients + '<br><br>';
            document.getElementById('plats').innerHTML += '<h3>Préparation</h3>' + tableauPlat.preparation + '<br> <br>';
            document.getElementById('plats').innerHTML += '<h3>Restaurant</h3>' + tableauPlat.restaurant + '<br>';
            document.getElementById('plats').innerHTML += '<button id="commander" style="display:block; margin:auto; margin-top:10px; margin-bottom:10px; border:none;" class="ui-btn ui-alt-icon ui-icon-search ui-btn-icon-left ui-nodisc-icon ui-btn-inline">Commander</button> <br> <br>';
            document.getElementById('plats').innerHTML += '<h3>Téléphone</h3>' + tableauPlat.telephone + '<br> <br>';
            document.getElementById('plats').innerHTML += '<h3>Adresse</h3>' + tableauPlat.adresse + '<br> <br>';
            document.getElementById('plats').innerHTML += '<h3>Description</h3>' + tableauPlat.description + '<br> </p>';
            activate_subpage("#plats");
            console.log(tableauPlat.image_url);
        },
        error: function(data){
            console.log('Error loading XML data');
        }
    });
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
                    tableauTemp.image_url = $(this).find('image_url').text();

                    tableauPlat.push(tableauTemp);
                    /*
                    tableauPlat[cpt] = tableauTemp;
                    cpt++;
                    */
                }
            });

            console.log("Taille de tableauPlat : " + tableauPlat.length);

            document.getElementById('listePlats').innerHTML = '<ul data-role="listview" data-split-icon="gear" data-split-theme="d">';

            var str;
            var res;
            for(var i = 0; i < tableauPlat.length; i++)
            {

                console.log(tableauPlat[i].nom);
                console.log(tableauPlat[i].image_url);

                str = tableauPlat[i].nom;
                while (str.indexOf(" ")!= -1) {
                res = str.replace(" ", "_");
                str = res;
                }
                document.getElementById('listePlats').innerHTML += '<li>' +
                     '<a id="' + str + '"> <h3>' + tableauPlat[i].nom + '</h3></button> </li>' ;
            }
            document.getElementById('listePlats').innerHTML += '</ul>';

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
    activate_subpage("#listePlats"); // metre après le # le nom de la sub page

});
          $(document).on("click", "#autriche", function(evt){
    afficheResultats("Autriche");
    activate_subpage("#listePlats"); // metre après le # le nom de la sub page
});

          $(document).on("click", "#danemark", function(evt){
    afficheResultats("Danemark");
    activate_subpage("#listePlats"); // metre après le # le nom de la sub page
});

          $(document).on("click", "#egypte", function(evt){
    afficheResultats("Egypte");
    activate_subpage("#listePlats"); // metre après le # le nom de la sub page
});

          $(document).on("click", "#espagne", function(evt){
    afficheResultats("Espagne");
    activate_subpage("#listePlats"); // metre après le # le nom de la sub page
});

          $(document).on("click", "#france", function(evt){
    afficheResultats("France");
    activate_subpage("#listePlats"); // metre après le # le nom de la sub page
});

          $(document).on("click", "#grece", function(evt){
    afficheResultats("Grèce");
    activate_subpage("#listePlats"); // metre après le # le nom de la sub page
});

          $(document).on("click", "#japon", function(evt){
    afficheResultats("Japon");
    activate_subpage("#listePlats"); // metre après le # le nom de la sub page
});
          $(document).on("click", "#mexique", function(evt){
    afficheResultats("Mexique");
    activate_subpage("#listePlats"); // metre après le # le nom de la sub page
});

          $(document).on("click", "#portugal", function(evt){
    afficheResultats("Portugal");
    activate_subpage("#listePlats"); // metre après le # le nom de la sub page
});

     $(document).on("click", "#Choucroute_garnie", function(evt){
         fichePlat("Choucroute garnie");
     });

     $(document).on("click", "#Escalope_Viennoise", function(evt){
         fichePlat("Escalope Viennoise");
     });
     $(document).on("click", "#Smorrebrod", function(evt){
         fichePlat("Smorrebrod");
     });
     $(document).on("click", "#Paella", function(evt){
         fichePlat("Paella");
     });
     $(document).on("click", "#Fondue_Savoyarde", function(evt){
         fichePlat("Fondue Savoyarde");
     });
     $(document).on("click", "#Tartiflette", function(evt){
         fichePlat("Tartiflette");
     });
     $(document).on("click", "#Quiche_Lorraine", function(evt){
         fichePlat("Quiche Lorraine");
     });
     $(document).on("click", "#Moussaka", function(evt){
         fichePlat("Moussaka");
     });
     $(document).on("click", "#Lasagnes", function(evt){
         fichePlat("Lasagnes");
     });
     $(document).on("click", "#Cozido", function(evt){
         fichePlat("Cozido");
     });
     $(document).on("click", "#Ful_Medames", function(evt){
         fichePlat("Ful Medames");
     });
     $(document).on("click", "#Koshari", function(evt){
         fichePlat("Koshari");
     });
     $(document).on("click", "#Tajine", function(evt){
         fichePlat("Tajine");
     });
     $(document).on("click", "#Fajitas", function(evt){
         fichePlat("Fajitas");
     });
     $(document).on("click", "#Riz_cantonnais", function(evt){
         fichePlat("Riz cantonnais");
     });
     $(document).on("click", "#Boeuf_aux_oignons", function(evt){
         fichePlat("Boeuf aux oignons");
     });
     $(document).on("click", "#Sushi_au_saumon", function(evt){
         fichePlat("Sushi au saumon");
     });
     $(document).on("click", "#commander", function(evt){
         alert("Commande prêt dans 30s");
     });




    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
