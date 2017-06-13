define(['fb', 'menu'], function (fb, menu) {
return {
    init : function () {
        fb.init();
        menu.init();
        document.querySelector('.log-in').addEventListener('click', fb.signIn);
        document.querySelector('.log-out').addEventListener('click', fb.signOut);
    }

}
});