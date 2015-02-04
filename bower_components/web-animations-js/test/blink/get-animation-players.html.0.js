

var container = document.getElementById('container');
var element = document.getElementById('element');

test(function() {
    assert_equals(document.timeline.getAnimationPlayers().length, 0);
    assert_equals(container.getAnimationPlayers().length, 0);
    assert_equals(element.getAnimationPlayers().length, 0);

    var player = element.animate([], 1000);
    assert_equals(document.timeline.getAnimationPlayers().length, 1);
    assert_equals(document.timeline.getAnimationPlayers()[0], player);

    var player2 = container.animate([], 1000);
    assert_equals(document.timeline.getAnimationPlayers().length, 2);
    assert_equals(document.timeline.getAnimationPlayers()[0], player);
    assert_equals(document.timeline.getAnimationPlayers()[1], player2);

    player.finish();
    assert_equals(document.timeline.getAnimationPlayers().length, 1);
    assert_equals(document.timeline.getAnimationPlayers()[0], player2);

    player2.finish();
    assert_equals(document.timeline.getAnimationPlayers().length, 0);
}, 'Timeline getAnimationPlayers()');

test(function() {
    assert_equals(document.timeline.getAnimationPlayers().length, 0);
    assert_equals(container.getAnimationPlayers().length, 0);
    assert_equals(element.getAnimationPlayers().length, 0);

    var player = element.animate([], 1000);
    assert_equals(document.timeline.getAnimationPlayers().length, 1);
    assert_equals(document.timeline.getAnimationPlayers()[0], player);
    assert_equals(container.getAnimationPlayers().length, 0);
    assert_equals(element.getAnimationPlayers().length, 1);
    assert_equals(element.getAnimationPlayers()[0], player);

    var player2 = container.animate([], 1000);
    assert_equals(document.timeline.getAnimationPlayers().length, 2);
    assert_equals(document.timeline.getAnimationPlayers()[0], player);
    assert_equals(document.timeline.getAnimationPlayers()[1], player2);
    assert_equals(container.getAnimationPlayers().length, 1);
    assert_equals(container.getAnimationPlayers()[0], player2);
    assert_equals(element.getAnimationPlayers().length, 1);
    assert_equals(element.getAnimationPlayers()[0], player);

    player.finish();
    assert_equals(document.timeline.getAnimationPlayers().length, 1);
    assert_equals(document.timeline.getAnimationPlayers()[0], player2);
    assert_equals(container.getAnimationPlayers().length, 1);
    assert_equals(container.getAnimationPlayers()[0], player2);
    assert_equals(element.getAnimationPlayers().length, 0);

    player2.finish();
    assert_equals(document.timeline.getAnimationPlayers().length, 0);
    assert_equals(container.getAnimationPlayers().length, 0);
    assert_equals(element.getAnimationPlayers().length, 0);

}, 'Animatable getAnimationPlayers()');

test(function() {
    assert_equals(document.timeline.getAnimationPlayers().length, 0);
    assert_equals(container.getAnimationPlayers().length, 0);
    assert_equals(element.getAnimationPlayers().length, 0);

    var player = element.animate([], {duration: 1000, delay: 500});
    assert_equals(document.timeline.getAnimationPlayers().length, 1);
    assert_equals(document.timeline.getAnimationPlayers()[0], player);
    assert_equals(container.getAnimationPlayers().length, 0);
    assert_equals(element.getAnimationPlayers().length, 1);
    assert_equals(element.getAnimationPlayers()[0], player);

    player.finish();
    assert_equals(document.timeline.getAnimationPlayers().length, 0);
    assert_equals(container.getAnimationPlayers().length, 0);
    assert_equals(element.getAnimationPlayers().length, 0);

}, 'getAnimationPlayers() with delays');

