define(['fb', 'radio', 'underscore', 'text!menu.html'], function (fb, radio, _, menu) {
    return {
        init: function () {
            this.template = _.template(menu);
            this.el = document.querySelector('.menu');
            this.render(null);
            this.setupEvents();
        },
        render: function (user) {
            this.el.innerHTML = this.template({
                user: user
            });
        },
        setupEvents: function () {
            radio.on('userSign', function (user) {
                this.render(user);
            }.bind(this));
            this.el.addEventListener('click', this.clickHandler.bind(this));
        },
        clickHandler : function (e) {
            if(e.target.classList.contains('log-in')) {
                fb.signIn();
            }
        }

    }


});