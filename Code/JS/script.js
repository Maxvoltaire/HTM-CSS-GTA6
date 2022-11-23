let id = 0; 
$(document).ready(function() {

    hoverButton();
    changeLanguage();
    document.body.addEventListener('mousewheel', (e) => {
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        let position = $('.content-start').offset();

            // console.log(position);
        if(position.top < 650  && id == 0){
            id = 1;

            hidestart();
            setTimeout(showstart,200);
            setTimeout(hidestart,300);
            setTimeout(showstart,400);
            setTimeout(showstart,500);
            setTimeout(hidestart,600);
            setTimeout(showstart,700);

            let _HTLM = '';

            _HTLM += '<div class="content-start">';
            _HTLM +='<img src="Images/star_black.png"/>';
            _HTLM +='<img src="Images/star_black.png"/>';
            _HTLM +='<img src="Images/star_black.png"/>';
            _HTLM +='<img src="Images/star_black.png"/>';
            _HTLM +='<img src="Images/star_gold.png"/>';
            _HTLM +='</div>';

            $('.content-start').replaceWith(_HTLM);
        }

        if(position.top >= 650  && position.top <= 1300 && id == 1){
            id = 2;
            // console.log('showPlateform');
            hidestart();
            setTimeout(showstart,200);
            setTimeout(hidestart,300);
            setTimeout(showstart,400);
            setTimeout(showstart,500);
            setTimeout(hidestart,600);
            setTimeout(showstart,700);
            let _HTLM = '';

            _HTLM += '<div class="content-start">';
            _HTLM +='<img src="Images/star_black.png"/>';
            _HTLM +='<img src="Images/star_black.png"/>';
            _HTLM +='<img src="Images/star_black.png"/>';
            _HTLM +='<img src="Images/star_gold.png"/>';
            _HTLM +='<img src="Images/star_gold.png"/>';
            _HTLM +='</div>';

            $('.content-start').replaceWith(_HTLM);

        }

        if(position.top >= 1300  && position.top <= 2000 && id == 2 ){
            id = 3;
            // console.log('showPlateform');
            hidestart();
            setTimeout(showstart,200);
            setTimeout(hidestart,300);
            setTimeout(showstart,400);
            setTimeout(showstart,500);
            setTimeout(hidestart,600);
            setTimeout(showstart,700);
            let _HTLM = '';

            _HTLM += '<div class="content-start">';
            _HTLM +='<img src="Images/star_black.png"/>';
            _HTLM +='<img src="Images/star_black.png"/>';
            _HTLM +='<img src="Images/star_gold.png"/>';
            _HTLM +='<img src="Images/star_gold.png"/>';
            _HTLM +='<img src="Images/star_gold.png"/>';
            _HTLM +='</div>';

            $('.content-start').replaceWith(_HTLM);
        }

        if(position.top >= 2000  && position.top <= 2700 && id == 3){
            id = 4;
            // console.log('showPlateform');
            hidestart();
            setTimeout(showstart,200);
            setTimeout(hidestart,300);
            setTimeout(showstart,400);
            setTimeout(showstart,500);
            setTimeout(hidestart,600);
            setTimeout(showstart,700);
            let _HTLM = '';

            _HTLM += '<div class="content-start">';
            _HTLM +='<img src="Images/star_black.png"/>';
            _HTLM +='<img src="Images/star_gold.png"/>';
            _HTLM +='<img src="Images/star_gold.png"/>';
            _HTLM +='<img src="Images/star_gold.png"/>';
            _HTLM +='<img src="Images/star_gold.png"/>';
            _HTLM +='</div>';

            $('.content-start').replaceWith(_HTLM);
        }

        if( position.top >= 2700 && id == 4){
            id = 5;
            // console.log('showPlateform');
            hidestart();
            setTimeout(showstart,200);
            setTimeout(hidestart,300);
            setTimeout(showstart,400);
            setTimeout(showstart,500);
            setTimeout(hidestart,600);
            setTimeout(showstart,700);
            let _HTLM = '';

            _HTLM += '<div class="content-start">';
            _HTLM +='<img src="Images/star_gold.png"/>';
            _HTLM +='<img src="Images/star_gold.png"/>';
            _HTLM +='<img src="Images/star_gold.png"/>';
            _HTLM +='<img src="Images/star_gold.png"/>';
            _HTLM +='<img src="Images/star_gold.png"/>';
            _HTLM +='</div>';

            $('.content-start').replaceWith(_HTLM);
        }

        // console.log("id",id);
    })

});

google.load("language", "1");

function changeLanguage(){
   console.log($('.languages-selecter').val());
    switch ($('.languages-selecter').val()) {
    case 'Français':

    case 'English':
         google.language.translate(text, 'es', 'en', function(result) {
            var translated = document.getElementById("translation");
            if (result.translation) {
                translated.innerHTML = result.translation;
            }
        });

    case 'Deutch':

    }

}

function hidestart(){
    $('.content-start').hide();
}

function showstart(){
    $('.content-start').show();
}

function hoverButton (){
        // console.log("hoverButton");
        $(".plateforme-button").hover(function(){
            console.log ("test",$(this));
            $(this).attr('style',$(this).attr('data-hover'));

        }, function() {
            $(this).attr('style',"width:45%;height:20%; margin:2%;");
    });

    $('.content-button button').on('click',function(){
        showPlateform();
    });

    setTimeout(hoverButton,1000);
}

function showPlateform() {
    console.log('showPlateform');
    let _HTLM = '';

         _HTLM += ' <div class="content-plateforme" style="display: flex;flex-direction:colum;align-items:center;background-color: black;flex-wrap: wrap;width:33%;">';
         _HTLM += ' <h3 style="width: 100%;text-align:center;color:white;font-family:chalet;">Sélectionner une plateforme</h3>';
         _HTLM += ' <div class="plateforme-button" style="width:45%;height:20%; margin:2%;" data-hover="width:45%;height:20%; margin:2%;margin:2%;border: 0.2rem solid blue;">';
         _HTLM += ' <img src="Pictos/ps5.jpg">';
         _HTLM += ' <h3>playstation 5</h3>';
         _HTLM += ' </div>';
         _HTLM += ' <div class="plateforme-button" style="width:45%;height:20%; margin:2%;" data-hover="width:45%;height:20%; margin:2%;margin:2%;border: 0.1rem solid #00abf8;">';
         _HTLM += ' <img src="Pictos/ps4.png">';
         _HTLM += ' <h3>playstation 4</h3>';
         _HTLM += ' </div>';
         _HTLM += ' <div class="plateforme-button" style="width:45%;height:20%; margin:2%;" data-hover="width:45%;height:20%; margin:2%;margin:2%;border: 0.1rem solid green;">';
         _HTLM += ' <img src="Pictos/xboxe-one.png">';
         _HTLM += ' <h3>xbox one</h3>';
         _HTLM += ' </div>';
         _HTLM += ' <div class="plateforme-button" style="width:45%;height:20%; margin:2%;" data-hover="width:45%;height:20%; margin:2%;margin:2%;border: 0.1rem solid greenyellow;">';
         _HTLM += ' <img src="Pictos/xbox-s-x.png">';
         _HTLM += ' <h3>xbox séries X|S</h3>';
         _HTLM += ' </div>';
         _HTLM += ' <div class="plateforme-button" style="width:45%;height:20%; margin:2%;" data-hover="width:45%;height:20%; margin:2%;margin:2%;border: 0.1rem solid red;">';
         _HTLM += ' <img src="Pictos/pc.png">';
         _HTLM += ' <h3>PC</h3>';
         _HTLM += ' </div>';
         _HTLM += ' </div>';
   
    $(".content-buy").find(".content-button").replaceWith(_HTLM);
}

