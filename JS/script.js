let id = 0; 
$(document).ready(function() {

    checkWidthWindows();
    hoverButton();
    // changeLanguage();


    $(".languages-selecter").on('change',function(){
        changeLanguage();
    });

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
        // console.log('test');
        $(".content-burger-menu").hasClass('d-none') ? $(".content-burger-menu").removeClass('d-none'):$(".content-burger-menu").addClass('d-none');
    })

});

function checkWidthWindows (){

    if($(window).width() < 1500 && $('header').hasClass("main-menu")){
        // console.log("passe1")
        let _HTLM = '';

        _HTLM += '<header class="second-menu">';
        _HTLM += '<i class="fa-solid fa-bars text-light display-2 button-burger"></i>';
        _HTLM += '<video autoplay muted playsinline loop>';
        _HTLM += '<source type="video/mp4" src="Video/Grand-Theft-Auto-6-Trailer.mp4"/>';
        _HTLM += '</video>';
        _HTLM += '</header>';
   
        $(".main-menu").replaceWith(_HTLM);
        $(".content-text-infos").attr("style","width: 50%;height: auto;display: flex;flex-direction: column;margin-top: 20%;");


    }

    if($(window).width() >= 1500 && $('header').hasClass("second-menu")){
        // console.log("passe2")
        $(".content-text-infos").attr("style","width: 50%;height: auto;display: flex;flex-direction: column;");

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
                var _HTMLNAV ='<div class="block-nav-1"><div class="element-nav"><a href="#">Vue d\'ensemble</a><a href="#">GTA online</a><a href="#">GTA+</a><img alt="logo rockstar" src="Images/rockstart.svg"><p>|</p><img alt="gta 6" class="logo" src="Images/gta-6.png"><a href="#" class="border border-white border-2 p-1 font-weight-bold">ACHETER MAINTENANT</a><a href="#">Assistance</a><a href="#">Guides</a></div><div class="circle"></div><div class="cache"></div></div>';
                $('.block-nav-1').replaceWith(_HTMLNAV);
                var _HTMLCONTENTINFOS ='<div class="content-text-infos" aria-details="Synopsis de l\'histoire"><img alt="Logo gta 6" src="Images/gta-6.png"><h2>Bienvenue à Vice City</h2><p>Lorsqu\'un dealeur tua leurs parents des deux jumeaux prirent la décision de se venger mais de manière différente. L\'un voulant se venger en dirigeant une société de lutte drogue et l\'autre rejoint un cartelle pour trouver et vengez là mort de ses parents.</p><P>Les joueurs actuels peuvent transférer leurs progressions dans le mode Histoire de GTAV et dans GTA Online, ainsi que leurs personnages, sur PlayStation 5 et Xbox Series X|S via une migration unique.</P></div>';
                var _HTMLCONTENTBUTTON ='<div class="content-button"><button aria-details="Redirection sur la page de vente liée à la plateforme">Sélectionner une plateforme</button><img alt="pegi 18" src="Images/pegi-18.png"></div>';
                $('.content-button').replaceWith(_HTMLCONTENTBUTTON);
                $('.block-infos .content-text-infos').replaceWith(_HTMLCONTENTINFOS);
                var _HTMLCONTENTINFOS2 ='<div class="content-text-infos" aria-details="encore un synopsis"> <img alt="gta online" src="Images/gta-online.png"> <h2>Bienvenue à Vice City</h2> <p>Lorsqu\'un dealeur tua leurs parents des deux jumeaux prirent la décision de se venger mais de manière différente. L\'un voulant se venger en dirigeant une société de lutte drogue et l\'autre rejoint un cartelle pour trouver et vengez là mort de ses parents.</p> <P>Les joueurs actuels peuvent transférer leurs progressions dans le mode Histoire de GTAV et dans GTA Online, ainsi que leurs personnages, sur PlayStation 5 et Xbox Series X|S via une migration unique.</P> </div>';
                $('.block-infos-2 .content-text-infos').replaceWith(_HTMLCONTENTINFOS2);
    case 'English':
                var _HTMLNAV ='    <div class="block-nav-1"> <div class="element-nav"> <a href="#">Overview</a> <a href="#">GTA online</a> <a href="#">GTA+</a> <img alt="logo rockstar" src="Images/rockstart.svg"> <p>|</p> <img alt="gta 6" class="logo" src="Images/gta-6.png"> <a href="#" class="border border-white border-2 p-1 font-weight-bold">BUY NOW</a> <a href="#">Help</a> <a href="#">Guides</a> </div> <div class="circle"></div> <div class="cache"></div> </div>';
                $('.block-nav-1').replaceWith(_HTMLNAV);
                var _HTMLCONTENTINFOS ='    <div class="content-text-infos" aria-details="Synopsis de l\'histoire"><img alt="Logo gta 6" src="Images/gta-6.png"><h2>Welcome Vice City</h2><p>When their parents was killed by a dealer, twins made their decision : Revenge!One of them want to lead a counter-narcotics squad, the second one join a cartel to find and kill thekiller.</p><P>Current GTA V players are able to transfer their own progression from history and online mods and theircharacters on PlayStation 5 and X|S series Xbox(single migration).</P></div>';
                $('.block-infos .content-text-infos').replaceWith(_HTMLCONTENTINFOS);
                var _HTMLCONTENTBUTTON ='    <div class="content-button"><button aria-details="Redirection sur la page de vente liée à la plateforme">Choose your platform</button><img alt="pegi 18" src="Images/pegi-18.png"></div>';
                $('.content-buy .content-button').replaceWith(_HTMLCONTENTBUTTON);
                var _HTMLCONTENTINFOS2 =' <div class="content-text-infos" aria-details="encore un synopsis"><img alt="gta online" src="Images/gta-online.png"><h2>Welcome Vice City</h2><p>When their parents was killed by a dealer, twins made their decision : Revenge!One of them want to lead a counter-narcotics squad, the second one join a cartel to find and kill thekiller.</p><P>Current GTA V players are able to transfer their own progression from history and online mods and theircharacters on PlayStation 5 and X|S series Xbox(single migration).</P></div><div class="content-image-infos"><img alt="gta online" src="Images/gta-online-image.png"></div>';
                $('.block-infos-2 .content-text-infos').replaceWith(_HTMLCONTENTINFOS2);

    case 'Deutch':

    }

    // setTimeout(changeLanguage,1000);

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

