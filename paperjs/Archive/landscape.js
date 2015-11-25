function Landscape(fill, x, y, stroke){
      var LandscapePath = new Path();
      var start = new Point(x, y);
      LandscapePath.strokeColor = stroke;
      LandscapePath.fillColor = fill;
      LandscapePath.moveTo(start);
      LandscapePath.lineTo(start.add([200, -25]));//2
      LandscapePath.lineTo(start.add([300, -200]));//3
      LandscapePath.lineTo(start.add([500, -150]));//4
      LandscapePath.lineTo(start.add([700, -200]));//5
      LandscapePath.lineTo(start.add([780, -150]));//6
      LandscapePath.lineTo(start.add([1000, -300]));//7
      LandscapePath.lineTo(start.add([1200, -500]));//8
      LandscapePath.lineTo(start.add([1600, -200]));//9
      LandscapePath.lineTo(start.add([1300, 300]));//10
      LandscapePath.lineTo(start.add([500, 300]));//11
      LandscapePath.lineTo(start.add([0, 300]));//12
      //Landscape.lineTo(start.add([0, 0]));//closing path
      LandscapePath.closed = true;
      //LandscapePath.fullySelected = true;
      LandscapePath.smooth();
      }
      Landscape('#4A4A4A', -30, 630, '#4A4A4A');
      Landscape('black', 0, 650, 'black');
