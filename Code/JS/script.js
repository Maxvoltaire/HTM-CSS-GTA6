let id = 0; 
$(document).ready(function() {
    checkWidthWindows();
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

    $('.button-burger').on('click',function(){

    })

});

function checkWidthWindows (){

    if($(window).width() < 1500 && $('header').hasClass("main-menu")){
        console.log("passe1")
        let _HTLM = '';

        _HTLM += '<header class="second-menu">';
        _HTLM += '<i class="fa-solid fa-bars text-light display-2 button-burger"></i>';
        _HTLM += '<video autoplay muted playsinline loop>';
        _HTLM += '<source type="video/mp4" src="Video/Grand-Theft-Auto-6-Trailer.mp4"/>';
        _HTLM += '</video>';
        _HTLM += '</header>';
   
        $(".main-menu").replaceWith(_HTLM);

    }

    if($(window).width() >= 1500 && $('header').hasClass("second-menu")){
        console.log("passe2")

        let _HTLM = '';


       
             _HTLM += '    <header class="main-menu">';

             _HTLM += '    <div class="block-nav-2">';
             _HTLM += '    <div></div>';
             _HTLM += '    <div class="circle"></div>';
             _HTLM += '    <div class="cache"></div>';
             _HTLM += '    </div>';
             _HTLM += '    <div class="block-nav-1">';
             _HTLM += '    <div class="element-nav">';
             _HTLM += '    <a href="#">Vue d\'ensemble</a>';
             _HTLM += '    <a href="#">GTA online</a>';
             _HTLM += '    <a href="#">GTA+</a>';
             _HTLM += '    <img src="Images/rockstart.svg">';
             _HTLM += '    <p>|</p>';
             _HTLM += '    <img class="logo" src="Images/gta-6.png">';
             _HTLM += '    <a href="#" class="border border-white border-2 p-1 font-weight-bold">ACHETER MAINTENANT</a>';
             _HTLM += '    <a href="#">Assistance</a>';
             _HTLM += '    <a href="#">Guides</a>';
             _HTLM += '    </div>';
             _HTLM += '    <div class="circle"></div>';
             _HTLM += '    <div class="cache"></div>';
             _HTLM += '    </div>';
             _HTLM += '    <video autoplay muted playsinline loop>';
             _HTLM += '    <source type="video/mp4" src="Video/Grand-Theft-Auto-6-Trailer.mp4"/>';
             _HTLM += '    </video>';
             _HTLM += '    </header>';
   
            $(".second-menu").replaceWith(_HTLM);

    }
    setTimeout(checkWidthWindows,1000);



}

function changeLanguage(){
   console.log($('.languages-selecter').val());
    switch ($('.languages-selecter').val()) {
    case 'Français':

    case 'English':

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

