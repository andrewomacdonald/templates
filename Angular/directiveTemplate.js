(function() {
    'use strict';
    angular
        .module('NAME_OF_MODULE')
        .directive('NAME_OF_DIRECTIVE', NAME_OF_DIRECTIVE);

    function NAME_OF_DIRECTIVE() {
        var directive = {
            restrict: 'A FOR ATTRIBUTE, E FOR ELEMENT, C FOR CLASS',
            replace: 'TRUE OR FALSE, REPLACES THE ELEMENT THAT THE DIRECTIVE IS DECLARED ON',
            scope: {
            //    SETTING THIS TO FALSE CAUSES DIRECTIVE TO USE ITS PARENT SCOPE
            //    SETTING THIS TO TRUE CAUSES DIRECTIVE TO CREATE A NEW SCOPE BE INHERITING FROM PARENT SCOPE
            //    SETTING THIS TO '{}' CAUSES DIRECTIVE GET A NEW ISOLATED SCOPE
            name: '@' //CREATES A NEW ATTRIBUTE CALLED 'NAME' WITH ONE-WAY BINDING
            name: '=' //CREATES A NEW ATTRIBUTE CALLED 'NAME' WITH TWO-WAY BINDING
            name: '&' //CREATES A NEW ATTRIBUTE CALLED 'NAME' THAT ACCEPTS A FUNCTION
            },
            template: //HTML TEMPLATE GOES HERE (NOT NEEDED IF YOU WANT TO USE TEMPLATEURL,
            teamplateUrl: 'filePath/leadingTo/template.html',
            link: link
        }
        return directive;

        function link (scope, element, attrs) {
        //    LINK FUNCTIONALITY GOES HERE, USUALLY USED TO MANIPULATE DOM
        }
    }
})();