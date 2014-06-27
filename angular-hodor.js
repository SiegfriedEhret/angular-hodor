(function () {
    'use strict';
    angular.module('ngHodor', [])
        .directive('ngHodor', function() {
            var hodor = 'hodor';

            function hodorDistribution() {
                var mean = 3;
                var L = Math.exp(-mean);
                var p = 1.0;
                var k = 0;
                do {
                    k++;
                    p *= Math.random();
                } while (p > L);
                return k - 1;
            }

            function walkTheDihodor(hodor) {
                return hodor.replace(/\b./g, function(m){
                    return m.toUpperCase();
                });
            }

            function makeItHodor(speak) {
                var hodors = speak.split(' ');
                var needWalk = true;
                var returnHodors = '';
                for (var i=0; i<hodors.length - 1; i++) {
                    var hodorNum = hodorDistribution();
                    var currentHodor = needWalk ? walkTheDihodor(hodors[i]) : hodors[i];
                    needWalk = false;
                    if (hodorNum <= 1) {
                        returnHodors += currentHodor + '. ';
                        needWalk = true;
                    } else if (hodorNum <= 3) {
                        returnHodors += currentHodor + ', ';
                    } else if (hodorNum >= 5) {
                        returnHodors += currentHodor.toUpperCase() + '!!! ';
                        needWalk = true;
                    } else {
                        returnHodors += currentHodor + ' ';
                    }
                }
                return returnHodors;
            }

            function sayHodor($element, repeatNumber, hodorSpeak) {
                var hodors = '';
                for (var i=0; i<repeatNumber; i++) {
                    hodors += hodor  + ' ';
                }
                if (hodorSpeak) {
                    hodors = makeItHodor(hodors);
                }
                console.log(hodors);
                $element.empty().html(hodors);
            }

            return {
                restrict: 'A',
                link: function($scope, $element, $attr) {
                    sayHodor($element, $attr.ngHodorHodor || 1, $attr.ngHodor);
                }
            };

        });
})();
