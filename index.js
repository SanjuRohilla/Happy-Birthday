function check() {
    if (document.forms[0].elements[0].checked== true && 
        document.forms[0].elements[1].checked== true
        && document.forms[0].elements[2].checked==
        true){
            if ( ! $ ('.wrapper').hasClass('throb')){
                // Do things On nav close
                $('.wrapper').addClass('throb');
            }
        
        }
        else{
            if ($('.wrapper').hasClass('throb')) {
                $('.wrapper').removeClass('throb');
            }
        }
}