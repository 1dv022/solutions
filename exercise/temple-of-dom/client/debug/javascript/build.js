(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var nodeCounter = require("./tod");


nodeCounter.run("resultTemplate");

//nodeCounter.run("resultTemplate", document.head);

},{"./tod":2}],2:[function(require,module,exports){
/**
 * Public API - Expose the run method
 * @type {{run: run}}
 */
module.exports = {
    run: run
};

/*
 * You can solve this exercise in many ways. You can create a own type
 * that will give you possibility to create instances so you repeat the
 * job with diffrent nodes and templates.
 *
 * You can also do like below and just expose a run-method that could be
 * called over and over for different nodes and templates. I our case we
 * have counter variables as private static (global in the module) that we
 * set to 0 after each running. You could also solve that with a result object
 * you toss around in the recursive function.
 */


// variables for this module
var elementNumber = 0;
var attributeNumber = 0;
var commentNumber = 0;
var textNodeNumber = 0;


/**
 * Start the application by running calls to function
 * @param {String} templateID - The id to the template where stuff i spresented
 * @param {Node} node to examinate - optional
 */
function run(templateID, node) {
    node = node || document.children[0];
    nodeCount(node);
    UseTemplate(templateID);

    // must reset after each running
    elementNumber = 0;
    attributeNumber = 0;
    commentNumber = 0;
    textNodeNumber = 0;
}

/**
 * recursive function that examinate each nod and updates the counters
 * @param {Element} node
 */
function nodeCount(node) {
    switch(node.nodeType) {
        case 1: updateElementOrAttribute(node); break;
        case 3: textNodeNumber += 1; break;
        case 8: commentNumber += 1; break;
        default: break;
    }

    if(!node.childNodes) {
        return;
    }

    for(var i = 0; i < node.childNodes.length; i += 1) {
        nodeCount(node.childNodes[i]);
    }
}

/**
 * Check the node if it is an attribute or Element and update the counter
 * @param node
 */
function updateElementOrAttribute(node) {
    if(node.tagName) {
        elementNumber += 1;
    }

    if(node.attributes && node.attributes.length > 0) {
        attributeNumber += node.attributes.length;
    }
}

/**
 * Just print out result in the provided template
 * @param {String} templateID - the ID of the template in the HTML
 */
function UseTemplate(templateID) {
    // Don´ really like the string-stuff here but lets go.
    var arr = [];
    arr.push({headline: "Antal element", value: elementNumber});
    arr.push({headline: "Antal attribut", value: attributeNumber});
    arr.push({headline: "Antal kommentarer", value: commentNumber});
    arr.push({headline:  "Antal textnoder", value:textNodeNumber});

    var template = document.getElementById(templateID);
    for(var i = 0; i < arr.length; i += 1) {
        var clone = document.importNode(template.content, true);
        clone.querySelector("h3").textContent = arr[i].headline;
        clone.querySelector("p").textContent = arr[i].value;
        document.querySelector("body").appendChild(clone);
    }
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0ZW1wbGUtb2YtZG9tL2NsaWVudC9zb3VyY2UvanMvYXBwLmpzIiwidGVtcGxlLW9mLWRvbS9jbGllbnQvc291cmNlL2pzL3RvZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIG5vZGVDb3VudGVyID0gcmVxdWlyZShcIi4vdG9kXCIpO1xuXG5cbm5vZGVDb3VudGVyLnJ1bihcInJlc3VsdFRlbXBsYXRlXCIpO1xuXG4vL25vZGVDb3VudGVyLnJ1bihcInJlc3VsdFRlbXBsYXRlXCIsIGRvY3VtZW50LmhlYWQpO1xuIiwiLyoqXG4gKiBQdWJsaWMgQVBJIC0gRXhwb3NlIHRoZSBydW4gbWV0aG9kXG4gKiBAdHlwZSB7e3J1bjogcnVufX1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgcnVuOiBydW5cbn07XG5cbi8qXG4gKiBZb3UgY2FuIHNvbHZlIHRoaXMgZXhlcmNpc2UgaW4gbWFueSB3YXlzLiBZb3UgY2FuIGNyZWF0ZSBhIG93biB0eXBlXG4gKiB0aGF0IHdpbGwgZ2l2ZSB5b3UgcG9zc2liaWxpdHkgdG8gY3JlYXRlIGluc3RhbmNlcyBzbyB5b3UgcmVwZWF0IHRoZVxuICogam9iIHdpdGggZGlmZnJlbnQgbm9kZXMgYW5kIHRlbXBsYXRlcy5cbiAqXG4gKiBZb3UgY2FuIGFsc28gZG8gbGlrZSBiZWxvdyBhbmQganVzdCBleHBvc2UgYSBydW4tbWV0aG9kIHRoYXQgY291bGQgYmVcbiAqIGNhbGxlZCBvdmVyIGFuZCBvdmVyIGZvciBkaWZmZXJlbnQgbm9kZXMgYW5kIHRlbXBsYXRlcy4gSSBvdXIgY2FzZSB3ZVxuICogaGF2ZSBjb3VudGVyIHZhcmlhYmxlcyBhcyBwcml2YXRlIHN0YXRpYyAoZ2xvYmFsIGluIHRoZSBtb2R1bGUpIHRoYXQgd2VcbiAqIHNldCB0byAwIGFmdGVyIGVhY2ggcnVubmluZy4gWW91IGNvdWxkIGFsc28gc29sdmUgdGhhdCB3aXRoIGEgcmVzdWx0IG9iamVjdFxuICogeW91IHRvc3MgYXJvdW5kIGluIHRoZSByZWN1cnNpdmUgZnVuY3Rpb24uXG4gKi9cblxuXG4vLyB2YXJpYWJsZXMgZm9yIHRoaXMgbW9kdWxlXG52YXIgZWxlbWVudE51bWJlciA9IDA7XG52YXIgYXR0cmlidXRlTnVtYmVyID0gMDtcbnZhciBjb21tZW50TnVtYmVyID0gMDtcbnZhciB0ZXh0Tm9kZU51bWJlciA9IDA7XG5cblxuLyoqXG4gKiBTdGFydCB0aGUgYXBwbGljYXRpb24gYnkgcnVubmluZyBjYWxscyB0byBmdW5jdGlvblxuICogQHBhcmFtIHtTdHJpbmd9IHRlbXBsYXRlSUQgLSBUaGUgaWQgdG8gdGhlIHRlbXBsYXRlIHdoZXJlIHN0dWZmIGkgc3ByZXNlbnRlZFxuICogQHBhcmFtIHtOb2RlfSBub2RlIHRvIGV4YW1pbmF0ZSAtIG9wdGlvbmFsXG4gKi9cbmZ1bmN0aW9uIHJ1bih0ZW1wbGF0ZUlELCBub2RlKSB7XG4gICAgbm9kZSA9IG5vZGUgfHwgZG9jdW1lbnQuY2hpbGRyZW5bMF07XG4gICAgbm9kZUNvdW50KG5vZGUpO1xuICAgIFVzZVRlbXBsYXRlKHRlbXBsYXRlSUQpO1xuXG4gICAgLy8gbXVzdCByZXNldCBhZnRlciBlYWNoIHJ1bm5pbmdcbiAgICBlbGVtZW50TnVtYmVyID0gMDtcbiAgICBhdHRyaWJ1dGVOdW1iZXIgPSAwO1xuICAgIGNvbW1lbnROdW1iZXIgPSAwO1xuICAgIHRleHROb2RlTnVtYmVyID0gMDtcbn1cblxuLyoqXG4gKiByZWN1cnNpdmUgZnVuY3Rpb24gdGhhdCBleGFtaW5hdGUgZWFjaCBub2QgYW5kIHVwZGF0ZXMgdGhlIGNvdW50ZXJzXG4gKiBAcGFyYW0ge0VsZW1lbnR9IG5vZGVcbiAqL1xuZnVuY3Rpb24gbm9kZUNvdW50KG5vZGUpIHtcbiAgICBzd2l0Y2gobm9kZS5ub2RlVHlwZSkge1xuICAgICAgICBjYXNlIDE6IHVwZGF0ZUVsZW1lbnRPckF0dHJpYnV0ZShub2RlKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMzogdGV4dE5vZGVOdW1iZXIgKz0gMTsgYnJlYWs7XG4gICAgICAgIGNhc2UgODogY29tbWVudE51bWJlciArPSAxOyBicmVhaztcbiAgICAgICAgZGVmYXVsdDogYnJlYWs7XG4gICAgfVxuXG4gICAgaWYoIW5vZGUuY2hpbGROb2Rlcykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBub2RlQ291bnQobm9kZS5jaGlsZE5vZGVzW2ldKTtcbiAgICB9XG59XG5cbi8qKlxuICogQ2hlY2sgdGhlIG5vZGUgaWYgaXQgaXMgYW4gYXR0cmlidXRlIG9yIEVsZW1lbnQgYW5kIHVwZGF0ZSB0aGUgY291bnRlclxuICogQHBhcmFtIG5vZGVcbiAqL1xuZnVuY3Rpb24gdXBkYXRlRWxlbWVudE9yQXR0cmlidXRlKG5vZGUpIHtcbiAgICBpZihub2RlLnRhZ05hbWUpIHtcbiAgICAgICAgZWxlbWVudE51bWJlciArPSAxO1xuICAgIH1cblxuICAgIGlmKG5vZGUuYXR0cmlidXRlcyAmJiBub2RlLmF0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBhdHRyaWJ1dGVOdW1iZXIgKz0gbm9kZS5hdHRyaWJ1dGVzLmxlbmd0aDtcbiAgICB9XG59XG5cbi8qKlxuICogSnVzdCBwcmludCBvdXQgcmVzdWx0IGluIHRoZSBwcm92aWRlZCB0ZW1wbGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IHRlbXBsYXRlSUQgLSB0aGUgSUQgb2YgdGhlIHRlbXBsYXRlIGluIHRoZSBIVE1MXG4gKi9cbmZ1bmN0aW9uIFVzZVRlbXBsYXRlKHRlbXBsYXRlSUQpIHtcbiAgICAvLyBEb27CtCByZWFsbHkgbGlrZSB0aGUgc3RyaW5nLXN0dWZmIGhlcmUgYnV0IGxldHMgZ28uXG4gICAgdmFyIGFyciA9IFtdO1xuICAgIGFyci5wdXNoKHtoZWFkbGluZTogXCJBbnRhbCBlbGVtZW50XCIsIHZhbHVlOiBlbGVtZW50TnVtYmVyfSk7XG4gICAgYXJyLnB1c2goe2hlYWRsaW5lOiBcIkFudGFsIGF0dHJpYnV0XCIsIHZhbHVlOiBhdHRyaWJ1dGVOdW1iZXJ9KTtcbiAgICBhcnIucHVzaCh7aGVhZGxpbmU6IFwiQW50YWwga29tbWVudGFyZXJcIiwgdmFsdWU6IGNvbW1lbnROdW1iZXJ9KTtcbiAgICBhcnIucHVzaCh7aGVhZGxpbmU6ICBcIkFudGFsIHRleHRub2RlclwiLCB2YWx1ZTp0ZXh0Tm9kZU51bWJlcn0pO1xuXG4gICAgdmFyIHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGVtcGxhdGVJRCk7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB2YXIgY2xvbmUgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xuICAgICAgICBjbG9uZS5xdWVyeVNlbGVjdG9yKFwiaDNcIikudGV4dENvbnRlbnQgPSBhcnJbaV0uaGVhZGxpbmU7XG4gICAgICAgIGNsb25lLnF1ZXJ5U2VsZWN0b3IoXCJwXCIpLnRleHRDb250ZW50ID0gYXJyW2ldLnZhbHVlO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgfVxufVxuIl19
