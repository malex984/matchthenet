// generated using polymake; Michael Joswig, Georg Loho, Benjamin Lorenz, Rico Raber; license CC BY-NC-SA 3.0; see polymake.org and matchthenet.de
foldingCreators.push(function(divNumber, backgroundColor, zoom, foldingLineWidth, rendererWidth, rendererHeight){

var container = document.getElementById( 'folding' + divNumber );
var renderer = foldingRenderers[divNumber];

renderer.setSize(rendererWidth, rendererHeight);
renderer.setClearColor(backgroundColor, 1);
container.insertBefore(renderer.domElement, container.childNodes[0]);

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
controls.zoomSpeed = controlsZoomSpeed;
controls.rotateSpeed = controlsRotationSpeed;
var all_objects = [];
   var centroids = [];

// COMMON_CODE_BLOCK_END

   var axes = [[38,37],
      [26,25],
      [17,16],
      [18,17],
      [16,15],
      [11,10],
      [12,11],
      [10,9],
      [8,7],
      [7,6],
      [6,5],
      [3,2],
      [4,3],
      [2,1],
      [0,4],
      [1,0]];

   var angles = [1.78570217271012,
      2.43824972107004,
      2.77978589690886,
      2.59698823916621,
      2.69619320827342,
      3.01310297623933,
      2.85852561761544,
      1.40642025251847,
      2.10671092158883,
      1.99081816268036,
      2.55482756568533,
      2.22753656563569,
      2.12240626647325,
      1.91961715002229,
      0.522739887784268,
      1.37273467183518];

   var subtrees = [[55,56,57],
      [53,54],
      [51,52],
      [47,48,49,50],
      [45,46],
      [44],
      [40,41,42,43],
      [35,36,37,38,39,55,56,57],
      [33,34],
      [27,28,29,30,31,32],
      [24,25,26,53,54],
      [21,22,23],
      [19,20],
      [14,15,16,17,18,45,46,47,48,49,50,51,52],
      [9,10,11,12,13,35,36,37,38,39,40,41,42,43,44,55,56,57],
      [5,6,7,8,24,25,26,27,28,29,30,31,32,33,34,53,54]];

   var polytoperoot = [[-1.45043671606107,-1.3151373767164,2.36865406044392],
      [0.586220536869811,0.876229565787456,1.26765579367607],
      [-2.66936274718922,3.40095475800085,-1.11637706005702]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(2.70825, 0, 0));
   allpoints.push(new PMPoint(2.94444, 0.551583, 0));
   allpoints.push(new PMPoint(2.70863, 1.08829, 0));
   allpoints.push(new PMPoint(-0.321373, 1.24955, 0));
   allpoints.push(new PMPoint(1.53693, -0.900723, 0));
   allpoints.push(new PMPoint(2.86663, -0.976887, 0));
   allpoints.push(new PMPoint(2.87188, -0.969087, 0));
   allpoints.push(new PMPoint(2.9563, -0.525349, 0));
   allpoints.push(new PMPoint(-1.74117, 0.958186, 0));
   allpoints.push(new PMPoint(-1.91997, 0.82585, 0));
   allpoints.push(new PMPoint(-2.31358, -0.480201, 0));
   allpoints.push(new PMPoint(-2.25987, -0.646084, 0));
   allpoints.push(new PMPoint(-1.66051, -0.645116, 0));
   allpoints.push(new PMPoint(3.28793, -0.0386347, 0));
   allpoints.push(new PMPoint(3.51449, 0.310436, 0));
   allpoints.push(new PMPoint(3.52516, 0.427643, 0));
   allpoints.push(new PMPoint(3.44817, 0.56884, 0));
   allpoints.push(new PMPoint(3.30783, 0.620471, 0));
   allpoints.push(new PMPoint(2.93926, 1.5172, 0));
   allpoints.push(new PMPoint(0.897059, 2.0345, 0));
   allpoints.push(new PMPoint(3.25198, 0.757058, 0));
   allpoints.push(new PMPoint(3.38954, 1.38216, 0));
   allpoints.push(new PMPoint(3.09704, 1.38204, 0));
   allpoints.push(new PMPoint(1.98371, -1.30026, 0));
   allpoints.push(new PMPoint(2.39869, -1.4372, 0));
   allpoints.push(new PMPoint(2.83859, -1.08221, 0));
   allpoints.push(new PMPoint(2.87142, -1.08578, 0));
   allpoints.push(new PMPoint(3.33069, -1.41498, 0));
   allpoints.push(new PMPoint(3.77713, -1.49648, 0));
   allpoints.push(new PMPoint(3.70962, -1.35121, 0));
   allpoints.push(new PMPoint(3.66516, -1.29433, 0));
   allpoints.push(new PMPoint(3.42588, -1.07536, 0));
   allpoints.push(new PMPoint(3.43578, -0.954256, 0));
   allpoints.push(new PMPoint(3.33408, -0.699872, 0));
   allpoints.push(new PMPoint(-3.84776, 0.979598, 0));
   allpoints.push(new PMPoint(-4.01358, 0.738648, 0));
   allpoints.push(new PMPoint(-4.087, 0.373468, 0));
   allpoints.push(new PMPoint(-2.94333, 0.197526, 0));
   allpoints.push(new PMPoint(-2.88641, 0.219508, 0));
   allpoints.push(new PMPoint(-2.83749, 0.133805, 0));
   allpoints.push(new PMPoint(-2.88537, 0.0959757, 0));
   allpoints.push(new PMPoint(-2.75983, -0.683925, 0));
   allpoints.push(new PMPoint(-2.67684, -0.776861, 0));
   allpoints.push(new PMPoint(-2.8311, 0.1392, 0));
   allpoints.push(new PMPoint(3.77616, 0.391578, 0));
   allpoints.push(new PMPoint(3.94599, 0.667912, 0));
   allpoints.push(new PMPoint(3.96544, 0.778301, 0));
   allpoints.push(new PMPoint(4.0703, 0.899395, 0));
   allpoints.push(new PMPoint(4.08021, 0.967644, 0));
   allpoints.push(new PMPoint(3.73197, 1.09983, 0));
   allpoints.push(new PMPoint(3.93487, 0.686412, 0));
   allpoints.push(new PMPoint(3.97792, 0.744381, 0));
   allpoints.push(new PMPoint(2.43834, -1.55532, 0));
   allpoints.push(new PMPoint(3.08734, -1.58959, 0));
   allpoints.push(new PMPoint(-4.11753, 0.311628, 0));
   allpoints.push(new PMPoint(-3.96476, -0.115693, 0));
   allpoints.push(new PMPoint(-3.40399, -0.444187, 0));

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
   allpoints[30].makesphere(0.02,points_material);
   allpoints[31].makesphere(0.02,points_material);
   allpoints[32].makesphere(0.02,points_material);
   allpoints[33].makesphere(0.02,points_material);
   allpoints[34].makesphere(0.02,points_material);
   allpoints[35].makesphere(0.02,points_material);
   allpoints[36].makesphere(0.02,points_material);
   allpoints[37].makesphere(0.02,points_material);
   allpoints[38].makesphere(0.02,points_material);
   allpoints[39].makesphere(0.02,points_material);
   allpoints[40].makesphere(0.02,points_material);
   allpoints[41].makesphere(0.02,points_material);
   allpoints[42].makesphere(0.02,points_material);
   allpoints[43].makesphere(0.02,points_material);
   allpoints[44].makesphere(0.02,points_material);
   allpoints[45].makesphere(0.02,points_material);
   allpoints[46].makesphere(0.02,points_material);
   allpoints[47].makesphere(0.02,points_material);
   allpoints[48].makesphere(0.02,points_material);
   allpoints[49].makesphere(0.02,points_material);
   allpoints[50].makesphere(0.02,points_material);
   allpoints[51].makesphere(0.02,points_material);
   allpoints[52].makesphere(0.02,points_material);
   allpoints[53].makesphere(0.02,points_material);
   allpoints[54].makesphere(0.02,points_material);
   allpoints[55].makesphere(0.02,points_material);
   allpoints[56].makesphere(0.02,points_material);
   allpoints[57].makesphere(0.02,points_material);

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
   faces.vertices.push(allpoints[30].vector);
   faces.vertices.push(allpoints[31].vector);
   faces.vertices.push(allpoints[32].vector);
   faces.vertices.push(allpoints[33].vector);
   faces.vertices.push(allpoints[34].vector);
   faces.vertices.push(allpoints[35].vector);
   faces.vertices.push(allpoints[36].vector);
   faces.vertices.push(allpoints[37].vector);
   faces.vertices.push(allpoints[38].vector);
   faces.vertices.push(allpoints[39].vector);
   faces.vertices.push(allpoints[40].vector);
   faces.vertices.push(allpoints[41].vector);
   faces.vertices.push(allpoints[42].vector);
   faces.vertices.push(allpoints[43].vector);
   faces.vertices.push(allpoints[44].vector);
   faces.vertices.push(allpoints[45].vector);
   faces.vertices.push(allpoints[46].vector);
   faces.vertices.push(allpoints[47].vector);
   faces.vertices.push(allpoints[48].vector);
   faces.vertices.push(allpoints[49].vector);
   faces.vertices.push(allpoints[50].vector);
   faces.vertices.push(allpoints[51].vector);
   faces.vertices.push(allpoints[52].vector);
   faces.vertices.push(allpoints[53].vector);
   faces.vertices.push(allpoints[54].vector);
   faces.vertices.push(allpoints[55].vector);
   faces.vertices.push(allpoints[56].vector);
   faces.vertices.push(allpoints[57].vector);

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 3, 4, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(35, 36, 37, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 37, 38, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 38, 39, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 39, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(35, 10, 9, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 11, 40, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 40, 41, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 41, 42, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 42, 43, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 1, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 0, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 5, 6, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(8, 6, 7, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(5, 24, 25, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 25, 26, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(5, 26, 6, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 6, 27, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 27, 28, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 28, 29, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 29, 30, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 30, 31, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(7, 31, 32, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 15, 45, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(16, 45, 46, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(34, 8, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(34, 7, 33, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(25, 53, 54, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(25, 54, 26, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(18, 17, 47, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 47, 48, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 48, 49, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(18, 49, 50, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(17, 16, 51, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(17, 51, 52, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 10, 44, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 9, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 10, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 11, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 12, 13, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 1, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 14, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 15, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 16, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 17, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(37, 55, 56, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 56, 57, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(37, 57, 38, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 3, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 19, 20, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 2, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 21, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 22, 23, undefined, undefined, 0));


   faces.computeFaceNormals();
   faces.computeVertexNormals();

   var object = new THREE.Mesh(faces, faces_material);
   obj.add(object);

   <!-- Edge style -->
   var line_material = new THREE.LineBasicMaterial ( {color: 0x000000, linewidth: foldingLineWidth, } );

   line_material.side = THREE.DoubleSide;

   <!-- EDGES --> 
   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[34].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[18].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[17].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   scene.add(obj);
   all_objects.push(obj);	var render = function () {
		foldingRenderIds[divNumber]= requestAnimationFrame(render);
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



   foldingSubtrees[divNumber] = subtrees;
   foldingAngles[divNumber] = angles;
   foldingAxes[divNumber] = axes;
   foldingAllpoints[divNumber] = allpoints;
   foldingObjects[divNumber] = obj;
   foldingControls[divNumber] = controls;
   foldingCameras[divNumber] = camera;
   foldingPolytopeRoots[divNumber] = polytoperoot;
});
appendFoldingScript();
