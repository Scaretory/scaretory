angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.ceritaHorror', {
    url: '/CeritaHorror',
    views: {
      'tab1': {
        templateUrl: 'templates/ceritaHorror.html',
        controller: 'ceritaHorrorCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.ceritaThriller'
      2) Using $state.go programatically:
        $state.go('tabsController.ceritaThriller');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/Cerita Thriller
      /page1/tab2/Cerita Thriller
  */
  .state('tabsController.ceritaRiddle', {
    url: '/CeritaRiddle',
    views: {
      'tab1': {
        templateUrl: 'templates/CeritaRiddle.html',
        controller: 'ceritaRiddleCtrl'
      },
      'tab2': {
        templateUrl: 'templates/CeritaRiddle.html',
        controller: 'ceritaRiddleCtrl'
      }
    }
  })
  .state('tabsController.ceritaSekolah', {
    url: '/CeritaSekolah',
    views: {
      'tab1': {
        templateUrl: 'templates/ceritaSekolah.html',
        controller: 'ceritaSekolahCtrl'
      }
    }
  })
  .state('tabsController.ceritaThriller', {
    url: '/CeritaThriller',
    views: {
      'tab1': {
        templateUrl: 'templates/ceritaThriller.html',
        controller: 'ceritaThrillerCtrl'
      }
    }
  })
  .state('tabsController.ceritaCreepy', {
    url: '/CeritaCreepy',
    views: {
      'tab1': {
        templateUrl: 'templates/ceritaCreepy.html',
        controller: 'ceritaCreepyCtrl'
      }
    }
  })
  .state('tabsController.ceritaUrbanLegend', {
    url: '/CeritaUrbanLegend',
    views: {
      'tab1': {
        templateUrl: 'templates/ceritaUrbanLegend.html',
        controller: 'ceritaUrbanLegendCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('detail', {
    url: '/detail',
    templateUrl: 'templates/detail.html',
    controller: 'detailCtrl'
  })


  .state('tabsController.mainPage', {
    url: '/mainpage',
    views: {
      'tab1': {
        templateUrl: 'templates/mainPage.html',
        controller: 'mainPageCtrl'
      }
    }
  })
  .state('tabsController.RandomPage', {
    url: '/randompage',
    views: {
      'tab2': {
        templateUrl: 'templates/RandomPage.html',
        controller: 'RandomPageCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/mainpage')


});






