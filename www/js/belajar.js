angular.module('starter.belajar', [])

.factory('Lessons', function () {
    var lessons = [{
        text : 'Belajar Services'
    }];

    return {
        all : function () {
            return lessons;
        }
    }
})