
'use strict';

function MakeMultiFilter(originalArray) {
    let currentArray = originalArray.slice();

    function arrayFilterer(filterCriteria, callback) {
        if (typeof filterCriteria === 'function') {
            currentArray = currentArray.filter(filterCriteria);
        }

        if (typeof callback === 'function') {
            callback.call(originalArray, currentArray);
        }

        return arrayFilterer;
    }

    return arrayFilterer;
}

