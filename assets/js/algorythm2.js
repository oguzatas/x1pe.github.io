$(document).ready(function(){
    $('body').on('click', '.myButton' , clickAttack);                   
});


function clickStart(){
        $( "body" ).append( $( "<input type='button' value='attack!' class='myButton'/>"));
        }
function clickAttack(){
        alert("hello");
        }



<input type='button' value='add!' onClick='clickStart();' />