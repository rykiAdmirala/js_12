define(["jquery", "controller"], function($, controller) {

  $(function() {
    ee = 4;
    let b = 1;
    let c = 2;
    let d = `This is one - ${b}, and this is c - ${c}!`;
    let a = {
      d,
      ee
    };

    console.log(a);
  });

});
