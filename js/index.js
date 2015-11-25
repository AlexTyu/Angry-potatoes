var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Constraint = Matter.Constraint,
    Composites = Matter.Composites,
    MouseConstraint = Matter.MouseConstraint,
    Events = Matter.Events;

var engine = Engine.create(document.body, {
    render: {
        options: {
          width: 1334,
          height: 750,
          background: false,
            wireframes: false
        }
    }
});

var mouse = MouseConstraint.create(engine, {
    constraint: { stiffness: 0.2 }
});

var ground = Bodies.rectangle(670, 700, 1337, 200, {
    isStatic: true,
    render: {
        lineWidth: 5,
        fillStyle: 'gray',
        //strokeStyle: 'white'
    }
});

var rockOptions = {
      render: {
        sprite: {
          texture: 'files/potato.png',
          xScale: 0.1,
          yScale: 0.1,
        }
      }
    };

var rock = Bodies.polygon(170, 450, 8, 20, rockOptions),
    anchor = { x: 170, y: 450 },
    elastic = Constraint.create({
        pointA: anchor,
        bodyB: rock,
        stiffness: 0.1,
        render: {
            lineWidth: 5,
            strokeStyle: 'red'
        }
    });

var pyramid = Composites.pyramid(500, 0, 9, 10, 0, 0, function(x, y, column, row) {
    var texture = column % 2 === 0 ? 'files/bottle.png' : 'files/bottle2.png';
    return Bodies.rectangle(x, y, 38, 100, {
      render: {
        sprite: {
          texture: texture,
          xScale: 0.36,
          yScale: 0.36
        }
      }
    });
});

var ground2 = Bodies.rectangle(610, 250, 200, 20, {
    isStatic: true,
    render: {
        fillStyle: '#edc51e',
        strokeStyle: '#b5a91c'
    }
});

var ground3 = Bodies.rectangle(210, 550, 200, 20, {
    isStatic: true,
    render: {
        fillStyle: '#edc51e',
        strokeStyle: '#b5a91c'
    }
});



World.add(engine.world, [mouse, ground, pyramid, ground2, ground3, rock, elastic]);

Events.on(engine, 'tick', function(event) {
    if (engine.input.mouse.button === -1 && (rock.position.x > 190 || rock.position.y < 130)) {
        rock = Bodies.polygon(170, 450, 7, 20, rockOptions);
        World.add(engine.world, rock);
        elastic.bodyB = rock;
    }
});

Engine.run(engine);
