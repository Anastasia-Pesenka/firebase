requirejs.config({
    baseUrl: 'js/app',
    paths: {
        underscore:  '../lib/underscore-min',
        app: 'app',
        firebase: 'https://www.gstatic.com/firebasejs/4.1.2/firebase',
        text: '../lib/text',
    },
    config: {
        fb: {
            apiKey: "AIzaSyCRuq5_R8dLrJuqoPaGQ5wG1_umXGMONUM",
            authDomain: "myfirstproject-fda02.firebaseapp.com",
            databaseURL: "https://myfirstproject-fda02.firebaseio.com",
            projectId: "myfirstproject-fda02",
            storageBucket: "myfirstproject-fda02.appspot.com",
            messagingSenderId: "660816671983"
        }

    },
    shim: {
        firebase: {
            exports: 'firebase'
        }
    }
});

// Start the main app logic.
requirejs(['app'],
    function (app) {
        app.init();
    });