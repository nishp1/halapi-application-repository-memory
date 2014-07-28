var Application = require('../../dao/application'),
    Page = require('../../dao/page'),
    User = require('../../dao/User'),
    applications = require('./applications');
    Promise = require('bluebird');

exports.register = function (server, options, next) {
    /*==================================
    =            Public API            =
    ==================================*/

    server.method('applicationRepository.findAllApplications', function (start, limit) {
        var resolver = Promise.pending();
        var page = new Page({
            items: applications,
            count: applications.length,
            start: start,
            limit: limit
        }, Application);

        resolver.resolve(page);
        return resolver.promise;
    });

    server.method('applicationRepository.findApplicationById', function (id) {
        var resolver = Promise.pending();
        resolver.resolve(applications[0]);
        return resolver.promise;
    });

    server.method('applicationRepository.termSearch', function (query, start, limit) {
        var resolver = Promise.pending();
        var page = new Page({
            items: applications,
            count: applications.length,
            start: start,
            limit: limit
        }, Application);

        resolver.resolve(page);
        return resolver.promise;
    });

    next();
};

exports.register.attributes = {
    name: 'application-repository'
};