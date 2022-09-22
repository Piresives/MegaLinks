window.onload = function() {
    Particles.init({
      selector: '.background',
      maxParticles: 200,
      sizeVariations: 4,
      speed: 0.3,
      color: '#ffffff',
      minDistance: 100,
      connectParticles: false,
        responsive: [
            {
                breakpoint:
                    768
                ,
                options: {
                    maxParticles:
                        200
                    ,
                    color:
                        '#ffffff'
                    ,
                    connectParticles:
                        false
                }
            }, {
                breakpoint:
                    425
                ,
                options: {
                    maxParticles:
                        100
                    ,
                    connectParticles:
                        false
                }
            }, {
                breakpoint:
                    320
                ,
                options: {
                    maxParticles:
                        0

                    // disables particles.js
                }
            }
        ]
    });
}
