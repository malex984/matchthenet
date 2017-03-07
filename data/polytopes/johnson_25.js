// generated using polymake; Michael Joswig, Georg Loho, Benjamin Lorenz, Rico Raber; license CC BY-NC-SA 3.0; see polymake.org and matchthenet.de
polytopeCreators.push(function(divNumber, backgroundColor, zoom, polytopeLineWidth, rendererWidth, rendererHeight){

var container = document.getElementById( 'poly' + divNumber );
var renderer = renderers[divNumber];

renderer.setSize(rendererWidth, rendererHeight);
renderer.setClearColor(backgroundColor, 1);
container.appendChild(renderer.domElement);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(zoom, rendererWidth/rendererHeight, 0.1, 1000);

   camera.position.set(0, 0, 5);
   camera.lookAt(0, 0, 0);
   camera.up.set(0, 1, 0);

   // class to allow move points together with labels and spheres
   var PMPoint = function (x,y,z) {
      this.vector = new THREE.Vector3(x,y,z);
      this.sprite = null;
      this.sphere = null;
   }
   PMPoint.prototype.makelabel = function(label) {
      this.sprite = textSprite( label );
      this.sprite.position.copy(this.vector);
   }
   PMPoint.prototype.makesphere = function(radius,material) {
      this.sphere = new THREE.Mesh(new THREE.SphereGeometry(radius), material);
      this.sphere.position.copy(this.vector);
   }

   PMPoint.prototype.setX = function(x) {
      this.vector.setX(x);
      if (this.sprite) {
         this.sprite.position.setX(x);
      }
      if (this.sphere) {
         this.sphere.position.setX(x);
      }
   };
   PMPoint.prototype.setY = function(y) {
      this.vector.setY(y);
      if (this.sprite) {
         this.sprite.position.setY(y);
      }
      if (this.sphere) {
         this.sphere.position.setY(y);
      }
   };
   PMPoint.prototype.setZ = function(z) {
      this.vector.setZ(z);
      if (this.sprite) {
         this.sprite.position.setZ(z);
      }
      if (this.sphere) {
         this.sphere.position.setZ(z);
      }
   };
   PMPoint.prototype.set = function(x,y,z) {
      this.vector.set(x,y,z);
      if (this.sprite) {
         this.sprite.position.set(x,y,z);
      }
      if (this.sphere) {
         this.sphere.position.set(x,y,z);
      }
   };
   PMPoint.prototype.add = function(o) {
      if (this.sprite) {
         o.add(this.sprite);
      }
      if (this.sphere) {
         o.add(this.sphere);
      }
   };


   var controls = new THREE.TrackballControls(camera, container);

   controls.noPan = controlsNoPan;
controls.noZoom = controlsNoZoom;
controls.zoomSpeed = controlsZoomSpeed;
controls.rotateSpeed = controlsRotationSpeed;
var all_objects = [];
   var centroids = [];

// COMMON_CODE_BLOCK_END

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0.917803, -0.0261114));
   allpoints.push(new PMPoint(0.480026, 0.734449, 0.270561));
   allpoints.push(new PMPoint(-0.480026, 0.734449, 0.270561));
   allpoints.push(new PMPoint(0.480026, 0.734449, -0.322784));
   allpoints.push(new PMPoint(0.296672, 0.437777, 0.750587));
   allpoints.push(new PMPoint(-0.480026, 0.734449, -0.322784));
   allpoints.push(new PMPoint(-0.296672, 0.437777, 0.750587));
   allpoints.push(new PMPoint(0.296672, 0.437777, -0.80281));
   allpoints.push(new PMPoint(0.776698, 0.254423, 0.453915));
   allpoints.push(new PMPoint(-0.296672, 0.437777, -0.80281));
   allpoints.push(new PMPoint(0.776698, 0.254423, -0.506137));
   allpoints.push(new PMPoint(-0.776698, 0.254423, 0.453915));
   allpoints.push(new PMPoint(0.960052, -0.0422491, -0.0261114));
   allpoints.push(new PMPoint(-0.776698, 0.254423, -0.506137));
   allpoints.push(new PMPoint(0, -0.0422491, 0.933941));
   allpoints.push(new PMPoint(-0.960052, -0.0422491, -0.0261114));
   allpoints.push(new PMPoint(0.776698, -0.338921, 0.453915));
   allpoints.push(new PMPoint(0.296672, -0.522275, 0.750587));
   allpoints.push(new PMPoint(-0.776698, -0.338921, 0.453915));
   allpoints.push(new PMPoint(-0.296672, -0.522275, 0.750587));
   allpoints.push(new PMPoint(0, 0.0272032, -1.1118));
   allpoints.push(new PMPoint(-0.564304, -0.0691915, -0.955826));
   allpoints.push(new PMPoint(0.564304, -0.0691915, -0.955826));
   allpoints.push(new PMPoint(0.913064, -0.321556, -0.547492));
   allpoints.push(new PMPoint(-0.913064, -0.321556, -0.547492));
   allpoints.push(new PMPoint(-0.913064, -0.633496, -0.0427627));
   allpoints.push(new PMPoint(0.913064, -0.633496, -0.0427627));
   allpoints.push(new PMPoint(0.564304, -0.885861, 0.365572));
   allpoints.push(new PMPoint(-0.564304, -0.885861, 0.365572));
   allpoints.push(new PMPoint(0, -0.982255, 0.521542));

   <!-- Vertex style -->
   var points_material = new THREE.MeshBasicMaterial ( {color: 0x000000, } );

   points_material.side = THREE.DoubleSide;

   <!-- POINTS -->
   allpoints[0].makesphere(0.02,points_material);
   allpoints[1].makesphere(0.02,points_material);
   allpoints[2].makesphere(0.02,points_material);
   allpoints[3].makesphere(0.02,points_material);
   allpoints[4].makesphere(0.02,points_material);
   allpoints[5].makesphere(0.02,points_material);
   allpoints[6].makesphere(0.02,points_material);
   allpoints[7].makesphere(0.02,points_material);
   allpoints[8].makesphere(0.02,points_material);
   allpoints[9].makesphere(0.02,points_material);
   allpoints[10].makesphere(0.02,points_material);
   allpoints[11].makesphere(0.02,points_material);
   allpoints[12].makesphere(0.02,points_material);
   allpoints[13].makesphere(0.02,points_material);
   allpoints[14].makesphere(0.02,points_material);
   allpoints[15].makesphere(0.02,points_material);
   allpoints[16].makesphere(0.02,points_material);
   allpoints[17].makesphere(0.02,points_material);
   allpoints[18].makesphere(0.02,points_material);
   allpoints[19].makesphere(0.02,points_material);
   allpoints[20].makesphere(0.02,points_material);
   allpoints[21].makesphere(0.02,points_material);
   allpoints[22].makesphere(0.02,points_material);
   allpoints[23].makesphere(0.02,points_material);
   allpoints[24].makesphere(0.02,points_material);
   allpoints[25].makesphere(0.02,points_material);
   allpoints[26].makesphere(0.02,points_material);
   allpoints[27].makesphere(0.02,points_material);
   allpoints[28].makesphere(0.02,points_material);
   allpoints[29].makesphere(0.02,points_material);

   for (index = 0; index < allpoints.length; ++index) {
      allpoints[index].add(obj);
   }
   var faces = new THREE.Geometry();

   <!-- VERTICES -->
   faces.vertices.push(allpoints[0].vector);
   faces.vertices.push(allpoints[1].vector);
   faces.vertices.push(allpoints[2].vector);
   faces.vertices.push(allpoints[3].vector);
   faces.vertices.push(allpoints[4].vector);
   faces.vertices.push(allpoints[5].vector);
   faces.vertices.push(allpoints[6].vector);
   faces.vertices.push(allpoints[7].vector);
   faces.vertices.push(allpoints[8].vector);
   faces.vertices.push(allpoints[9].vector);
   faces.vertices.push(allpoints[10].vector);
   faces.vertices.push(allpoints[11].vector);
   faces.vertices.push(allpoints[12].vector);
   faces.vertices.push(allpoints[13].vector);
   faces.vertices.push(allpoints[14].vector);
   faces.vertices.push(allpoints[15].vector);
   faces.vertices.push(allpoints[16].vector);
   faces.vertices.push(allpoints[17].vector);
   faces.vertices.push(allpoints[18].vector);
   faces.vertices.push(allpoints[19].vector);
   faces.vertices.push(allpoints[20].vector);
   faces.vertices.push(allpoints[21].vector);
   faces.vertices.push(allpoints[22].vector);
   faces.vertices.push(allpoints[23].vector);
   faces.vertices.push(allpoints[24].vector);
   faces.vertices.push(allpoints[25].vector);
   faces.vertices.push(allpoints[26].vector);
   faces.vertices.push(allpoints[27].vector);
   faces.vertices.push(allpoints[28].vector);
   faces.vertices.push(allpoints[29].vector);

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(22, 23, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 26, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 27, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 29, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 28, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 25, 24, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 24, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(22, 21, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 23, 22, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 16, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 8, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 4, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 1, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 16, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 27, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 9, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 5, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 0, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 9, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 2, 0, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 19, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 14, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 6, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 6, 2, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 19, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 28, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 15, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 18, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(24, 25, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(15, 18, 11, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 24, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 15, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 11, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 2, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(21, 13, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 13, 5, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(28, 29, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(20, 21, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(29, 17, 19, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 17, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(14, 4, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(1, 3, 0, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(1, 0, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(1, 2, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(1, 6, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 20, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(10, 7, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 7, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(27, 26, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 12, 8, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 12, 16, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 23, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(26, 23, 12, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 10, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 3, 1, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 1, 8, undefined, undefined, 0));


   faces.computeFaceNormals();
   faces.computeVertexNormals();

   var object = new THREE.Mesh(faces, faces_material);
   obj.add(object);

   <!-- Edge style -->
   var line_material = new THREE.LineBasicMaterial ( {color: 0x000000, linewidth: polytopeLineWidth, } );

   line_material.side = THREE.DoubleSide;

   <!-- EDGES --> 
   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[24].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[15].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[20].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[1].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[1].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[10].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[26].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   scene.add(obj);
   all_objects.push(obj);   var initTime = Date.now();
   var ellapsedTime = 0;
   var render = function () {
      if (ellapsedTime < rotationTime){
         ellapsedTime = Date.now() - initTime;
         obj.rotation.x += speedScale('x', ellapsedTime) * rotation('x', divNumber);
         obj.rotation.y += speedScale('y', ellapsedTime) * rotation('y', divNumber);
         obj.rotation.z += speedScale('z', ellapsedTime) * rotation('z', divNumber);
      }
      renderIds[divNumber] = requestAnimationFrame(render);
      controls.update();
      renderer.render(scene, camera);
   };


	render();

	function computeCentroid(geom) {
		centroid = new THREE.Vector3();
		geom.vertices.forEach(function(v) {
			centroid.add(v);			
		});
		centroid.divideScalar(geom.vertices.length);
		return centroid;
	}

	function explode(factor) {
		var obj, c;
		for (var i = 0; i< all_objects.length; ++i) {
			obj = all_objects[i];
			c = centroids[i];
	
			obj.position.set(c.x*factor, c.y*factor, c.z*factor);
		}	
	}

	var pos = 150* Math.PI;

	function updateFactor() {
		pos++;
		return Math.sin(.01*pos)+1;
	}

	function makelabel(message, x, y, z, params) {
		var spritey = textSprite( message, params );
		spritey.position.set(x, y, z);
		obj.add(spritey);
	}

	function textSprite(message, parameters)
	{
		if ( parameters === undefined ) parameters = {};

		var fontface = "Helvetica";

		var fontsize = parameters.hasOwnProperty("fontsize") ? 
			parameters["fontsize"] : 18;
		fontsize = fontsize*10;

		var canvas = document.createElement('canvas');
		var size = 1000;
		canvas.width = size;
		canvas.height = size;
		var context = canvas.getContext('2d');
		context.font = fontsize + "px " + fontface;

		// text color
		context.fillStyle = "rgba(0, 0, 0, 1.0)";

		context.fillText(message, size/2, size/2);

		// canvas contents will be used for a texture
		var texture = new THREE.Texture(canvas);
		texture.needsUpdate = true;

		var spriteMaterial = new THREE.SpriteMaterial(
			{map: texture, useScreenCoordinates: false});
		var sprite = new THREE.Sprite(spriteMaterial);
		return sprite;
	}



   polytopeObjects[divNumber] = obj;
   polytopeControls[divNumber] = controls;
   polytopeCameras[divNumber] = camera;
});
appendScript();
