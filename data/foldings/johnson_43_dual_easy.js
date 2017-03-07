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

   var axes = [[69,68],
      [63,62],
      [61,60],
      [59,58],
      [39,59],
      [57,56],
      [53,52],
      [49,48],
      [47,46],
      [45,44],
      [41,40],
      [39,38],
      [37,36],
      [35,34],
      [33,32],
      [31,30],
      [29,28],
      [28,12],
      [27,26],
      [25,24],
      [23,22],
      [21,20],
      [19,18],
      [7,19],
      [15,14],
      [14,4],
      [13,12],
      [11,10],
      [3,11],
      [9,8],
      [8,3],
      [7,6],
      [6,1],
      [5,4],
      [1,5],
      [3,2],
      [0,3],
      [2,1],
      [1,0]];

   var angles = [2.63899189359274,
      2.63899189359274,
      2.63899189359274,
      2.63899189359274,
      2.63899189359274,
      2.59700766717369,
      2.59700766717369,
      2.54217545405268,
      2.54217545405268,
      2.59700766717369,
      2.59700766717369,
      2.59700766717369,
      2.54217545405268,
      2.54217545405268,
      2.54217545405268,
      2.54217545405268,
      2.59700766717369,
      2.59700766717369,
      2.54217545405268,
      2.54217545405268,
      2.54217545405268,
      2.54217545405268,
      2.59700766717369,
      2.59700766717369,
      2.59700766717369,
      2.59700766717369,
      2.63899189359274,
      2.59700766717369,
      2.59700766717369,
      2.59700766717369,
      2.59700766717369,
      2.63899189359274,
      2.65130652060517,
      2.63899189359274,
      2.65130652060517,
      2.63899189359274,
      2.63899189359274,
      2.65130652060517,
      2.65130652060517];

   var subtrees = [[80,81],
      [78,79],
      [76,77],
      [74,75],
      [72,73],
      [70,71],
      [68,69,80,81],
      [66,67],
      [64,65],
      [62,63,78,79],
      [60,61,76,77],
      [58,59,72,73,74,75],
      [56,57,70,71],
      [54,55],
      [52,53,68,69,80,81],
      [50,51],
      [48,49,66,67],
      [46,47,64,65],
      [44,45,62,63,78,79],
      [42,43],
      [40,41,60,61,76,77],
      [38,39,58,59,72,73,74,75],
      [36,37,56,57,70,71],
      [34,35,54,55],
      [32,33,52,53,68,69,80,81],
      [30,31,50,51],
      [28,29,46,47,48,49,64,65,66,67],
      [26,27,44,45,62,63,78,79],
      [24,25,42,43],
      [22,23,40,41,60,61,76,77],
      [20,21,38,39,58,59,72,73,74,75],
      [18,19,34,35,36,37,54,55,56,57,70,71],
      [16,17],
      [14,15,30,31,32,33,50,51,52,53,68,69,80,81],
      [12,13,28,29,46,47,48,49,64,65,66,67],
      [10,11,24,25,26,27,42,43,44,45,62,63,78,79],
      [8,9,20,21,22,23,38,39,40,41,58,59,60,61,72,73,74,75,76,77],
      [6,7,16,17,18,19,34,35,36,37,54,55,56,57,70,71],
      [4,5,12,13,14,15,28,29,30,31,32,33,46,47,48,49,50,51,52,53,64,65,66,67,68,69,80,81]];

   var polytoperoot = [[-0.310535679569318,-0.812992963832021,0],
      [0,-1.23002294544657,-0.158234849258631],
      [0.581990122981166,-0.0491375664460775,0.381966011250105]];

   var obj = new THREE.Object3D();
   var allpoints = [];

   allpoints.push(new PMPoint(0, 0, 0));
   allpoints.push(new PMPoint(0.562728, 0, 0));
   allpoints.push(new PMPoint(0.342732, 0.517942, 0));
   allpoints.push(new PMPoint(-0.287602, 0.562679, 0));
   allpoints.push(new PMPoint(-0.287602, -0.562679, 0));
   allpoints.push(new PMPoint(0.342732, -0.517942, 0));
   allpoints.push(new PMPoint(0.953443, 0.404974, 0));
   allpoints.push(new PMPoint(0.748193, 1.00263, 0));
   allpoints.push(new PMPoint(-0.695877, 0.0386664, 0));
   allpoints.push(new PMPoint(-0.34817, -0.527352, 0));
   allpoints.push(new PMPoint(0.691999, 1.04457, 0));
   allpoints.push(new PMPoint(0.0350934, 1.14332, 0));
   allpoints.push(new PMPoint(0.748193, -1.00263, 0));
   allpoints.push(new PMPoint(0.953443, -0.404974, 0));
   allpoints.push(new PMPoint(0.0350934, -1.14332, 0));
   allpoints.push(new PMPoint(0.691999, -1.04457, 0));
   allpoints.push(new PMPoint(1.08822, -0.201297, 0));
   allpoints.push(new PMPoint(1.55807, 0.221269, 0));
   allpoints.push(new PMPoint(1.5747, 0.289385, 0));
   allpoints.push(new PMPoint(1.40878, 0.932617, 0));
   allpoints.push(new PMPoint(-0.751391, 0.715214, 0));
   allpoints.push(new PMPoint(-0.898364, 0.0644124, 0));
   allpoints.push(new PMPoint(-0.89997, 0.0355121, 0));
   allpoints.push(new PMPoint(-0.826003, -0.627566, 0));
   allpoints.push(new PMPoint(-0.0677648, 1.31963, 0));
   allpoints.push(new PMPoint(-0.609313, 0.929924, 0));
   allpoints.push(new PMPoint(0.597431, 1.52355, 0));
   allpoints.push(new PMPoint(-0.0417923, 1.3324, 0));
   allpoints.push(new PMPoint(1.40878, -0.932617, 0));
   allpoints.push(new PMPoint(1.5747, -0.289385, 0));
   allpoints.push(new PMPoint(-0.609313, -0.929924, 0));
   allpoints.push(new PMPoint(-0.0677648, -1.31963, 0));
   allpoints.push(new PMPoint(-0.0417923, -1.3324, 0));
   allpoints.push(new PMPoint(0.597431, -1.52355, 0));
   allpoints.push(new PMPoint(1.53084, 1.09622, 0));
   allpoints.push(new PMPoint(0.96044, 1.44231, 0));
   allpoints.push(new PMPoint(1.97859, 0.563683, 0));
   allpoints.push(new PMPoint(1.55276, 1.07731, 0));
   allpoints.push(new PMPoint(-0.953878, 0.74096, 0));
   allpoints.push(new PMPoint(-1.36215, 0.216947, 0));
   allpoints.push(new PMPoint(-1.3778, -0.0647015, 0));
   allpoints.push(new PMPoint(-1.0301, -0.63072, 0));
   allpoints.push(new PMPoint(-0.389476, 1.68687, 0));
   allpoints.push(new PMPoint(-0.712171, 1.10623, 0));
   allpoints.push(new PMPoint(0.520545, 1.71263, 0));
   allpoints.push(new PMPoint(-0.136361, 1.81139, 0));
   allpoints.push(new PMPoint(0.96044, -1.44231, 0));
   allpoints.push(new PMPoint(1.53084, -1.09622, 0));
   allpoints.push(new PMPoint(1.55276, -1.07731, 0));
   allpoints.push(new PMPoint(1.97859, -0.563683, 0));
   allpoints.push(new PMPoint(-0.712171, -1.10623, 0));
   allpoints.push(new PMPoint(-0.389476, -1.68687, 0));
   allpoints.push(new PMPoint(-0.136361, -1.81139, 0));
   allpoints.push(new PMPoint(0.520545, -1.71263, 0));
   allpoints.push(new PMPoint(1.74309, 1.5359, 0));
   allpoints.push(new PMPoint(1.0825, 1.60591, 0));
   allpoints.push(new PMPoint(2.12257, 0.708371, 0));
   allpoints.push(new PMPoint(1.95665, 1.3516, 0));
   allpoints.push(new PMPoint(-1.30159, 1.30698, 0));
   allpoints.push(new PMPoint(-1.64976, 0.779626, 0));
   allpoints.push(new PMPoint(-1.72597, -0.592054, 0));
   allpoints.push(new PMPoint(-1.43837, -1.15473, 0));
   allpoints.push(new PMPoint(0.843241, 2.29328, 0));
   allpoints.push(new PMPoint(0.212906, 2.33801, 0));
   allpoints.push(new PMPoint(1.0825, -1.60591, 0));
   allpoints.push(new PMPoint(1.74309, -1.5359, 0));
   allpoints.push(new PMPoint(1.95665, -1.3516, 0));
   allpoints.push(new PMPoint(2.12257, -0.708371, 0));
   allpoints.push(new PMPoint(0.212906, -2.33801, 0));
   allpoints.push(new PMPoint(0.843241, -2.29328, 0));
   allpoints.push(new PMPoint(2.78316, 0.638356, 0));
   allpoints.push(new PMPoint(2.57791, 1.23601, 0));
   allpoints.push(new PMPoint(-2.21248, 0.779626, 0));
   allpoints.push(new PMPoint(-1.99249, 0.261684, 0));
   allpoints.push(new PMPoint(-1.933, 1.33235, 0));
   allpoints.push(new PMPoint(-2.20902, 0.84197, 0));
   allpoints.push(new PMPoint(-2.2887, -0.592054, 0));
   allpoints.push(new PMPoint(-2.0687, -1.11, 0));
   allpoints.push(new PMPoint(0.555639, 2.85595, 0));
   allpoints.push(new PMPoint(-0.00708901, 2.85595, 0));
   allpoints.push(new PMPoint(-0.00708901, -2.85595, 0));
   allpoints.push(new PMPoint(0.555639, -2.85595, 0));

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
   allpoints[58].makesphere(0.02,points_material);
   allpoints[59].makesphere(0.02,points_material);
   allpoints[60].makesphere(0.02,points_material);
   allpoints[61].makesphere(0.02,points_material);
   allpoints[62].makesphere(0.02,points_material);
   allpoints[63].makesphere(0.02,points_material);
   allpoints[64].makesphere(0.02,points_material);
   allpoints[65].makesphere(0.02,points_material);
   allpoints[66].makesphere(0.02,points_material);
   allpoints[67].makesphere(0.02,points_material);
   allpoints[68].makesphere(0.02,points_material);
   allpoints[69].makesphere(0.02,points_material);
   allpoints[70].makesphere(0.02,points_material);
   allpoints[71].makesphere(0.02,points_material);
   allpoints[72].makesphere(0.02,points_material);
   allpoints[73].makesphere(0.02,points_material);
   allpoints[74].makesphere(0.02,points_material);
   allpoints[75].makesphere(0.02,points_material);
   allpoints[76].makesphere(0.02,points_material);
   allpoints[77].makesphere(0.02,points_material);
   allpoints[78].makesphere(0.02,points_material);
   allpoints[79].makesphere(0.02,points_material);
   allpoints[80].makesphere(0.02,points_material);
   allpoints[81].makesphere(0.02,points_material);

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
   faces.vertices.push(allpoints[58].vector);
   faces.vertices.push(allpoints[59].vector);
   faces.vertices.push(allpoints[60].vector);
   faces.vertices.push(allpoints[61].vector);
   faces.vertices.push(allpoints[62].vector);
   faces.vertices.push(allpoints[63].vector);
   faces.vertices.push(allpoints[64].vector);
   faces.vertices.push(allpoints[65].vector);
   faces.vertices.push(allpoints[66].vector);
   faces.vertices.push(allpoints[67].vector);
   faces.vertices.push(allpoints[68].vector);
   faces.vertices.push(allpoints[69].vector);
   faces.vertices.push(allpoints[70].vector);
   faces.vertices.push(allpoints[71].vector);
   faces.vertices.push(allpoints[72].vector);
   faces.vertices.push(allpoints[73].vector);
   faces.vertices.push(allpoints[74].vector);
   faces.vertices.push(allpoints[75].vector);
   faces.vertices.push(allpoints[76].vector);
   faces.vertices.push(allpoints[77].vector);
   faces.vertices.push(allpoints[78].vector);
   faces.vertices.push(allpoints[79].vector);
   faces.vertices.push(allpoints[80].vector);
   faces.vertices.push(allpoints[81].vector);

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var materials = [
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, color: 0x43B8CE, }),
   ];
   for (index = 0; index < materials.length; ++index) {
      materials[index].side = THREE.DoubleSide;
   }
   var faces_material = new THREE.MeshFaceMaterial ( materials );


   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(0, 1, 2, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(0, 2, 3, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 4, 5, undefined, undefined, 1));
   faces.faces.push(new THREE.Face3(0, 5, 1, undefined, undefined, 1));

   faces.faces.push(new THREE.Face3(2, 1, 6, undefined, undefined, 2));
   faces.faces.push(new THREE.Face3(2, 6, 7, undefined, undefined, 2));

   faces.faces.push(new THREE.Face3(0, 3, 8, undefined, undefined, 3));
   faces.faces.push(new THREE.Face3(0, 8, 9, undefined, undefined, 3));

   faces.faces.push(new THREE.Face3(13, 1, 5, undefined, undefined, 4));
   faces.faces.push(new THREE.Face3(13, 5, 12, undefined, undefined, 4));

   faces.faces.push(new THREE.Face3(3, 2, 10, undefined, undefined, 5));
   faces.faces.push(new THREE.Face3(3, 10, 11, undefined, undefined, 5));

   faces.faces.push(new THREE.Face3(6, 1, 16, undefined, undefined, 6));
   faces.faces.push(new THREE.Face3(6, 16, 17, undefined, undefined, 6));

   faces.faces.push(new THREE.Face3(8, 3, 20, undefined, undefined, 7));
   faces.faces.push(new THREE.Face3(8, 20, 21, undefined, undefined, 7));

   faces.faces.push(new THREE.Face3(5, 4, 14, undefined, undefined, 8));
   faces.faces.push(new THREE.Face3(5, 14, 15, undefined, undefined, 8));

   faces.faces.push(new THREE.Face3(3, 11, 24, undefined, undefined, 9));
   faces.faces.push(new THREE.Face3(3, 24, 25, undefined, undefined, 9));

   faces.faces.push(new THREE.Face3(9, 8, 22, undefined, undefined, 10));
   faces.faces.push(new THREE.Face3(9, 22, 23, undefined, undefined, 10));

   faces.faces.push(new THREE.Face3(7, 6, 18, undefined, undefined, 11));
   faces.faces.push(new THREE.Face3(7, 18, 19, undefined, undefined, 11));

   faces.faces.push(new THREE.Face3(4, 30, 31, undefined, undefined, 12));
   faces.faces.push(new THREE.Face3(4, 31, 14, undefined, undefined, 12));

   faces.faces.push(new THREE.Face3(11, 10, 26, undefined, undefined, 13));
   faces.faces.push(new THREE.Face3(11, 26, 27, undefined, undefined, 13));

   faces.faces.push(new THREE.Face3(29, 13, 12, undefined, undefined, 14));
   faces.faces.push(new THREE.Face3(29, 12, 28, undefined, undefined, 14));

   faces.faces.push(new THREE.Face3(7, 19, 34, undefined, undefined, 15));
   faces.faces.push(new THREE.Face3(7, 34, 35, undefined, undefined, 15));

   faces.faces.push(new THREE.Face3(14, 32, 33, undefined, undefined, 16));
   faces.faces.push(new THREE.Face3(14, 33, 15, undefined, undefined, 16));

   faces.faces.push(new THREE.Face3(28, 12, 46, undefined, undefined, 17));
   faces.faces.push(new THREE.Face3(28, 46, 47, undefined, undefined, 17));

   faces.faces.push(new THREE.Face3(19, 18, 36, undefined, undefined, 18));
   faces.faces.push(new THREE.Face3(19, 36, 37, undefined, undefined, 18));

   faces.faces.push(new THREE.Face3(29, 28, 48, undefined, undefined, 19));
   faces.faces.push(new THREE.Face3(29, 48, 49, undefined, undefined, 19));

   faces.faces.push(new THREE.Face3(21, 20, 38, undefined, undefined, 20));
   faces.faces.push(new THREE.Face3(21, 38, 39, undefined, undefined, 20));

   faces.faces.push(new THREE.Face3(25, 24, 42, undefined, undefined, 21));
   faces.faces.push(new THREE.Face3(25, 42, 43, undefined, undefined, 21));

   faces.faces.push(new THREE.Face3(23, 22, 40, undefined, undefined, 22));
   faces.faces.push(new THREE.Face3(23, 40, 41, undefined, undefined, 22));

   faces.faces.push(new THREE.Face3(30, 50, 51, undefined, undefined, 23));
   faces.faces.push(new THREE.Face3(30, 51, 31, undefined, undefined, 23));

   faces.faces.push(new THREE.Face3(27, 26, 44, undefined, undefined, 24));
   faces.faces.push(new THREE.Face3(27, 44, 45, undefined, undefined, 24));

   faces.faces.push(new THREE.Face3(35, 34, 54, undefined, undefined, 25));
   faces.faces.push(new THREE.Face3(35, 54, 55, undefined, undefined, 25));

   faces.faces.push(new THREE.Face3(32, 52, 53, undefined, undefined, 26));
   faces.faces.push(new THREE.Face3(32, 53, 33, undefined, undefined, 26));

   faces.faces.push(new THREE.Face3(47, 46, 64, undefined, undefined, 27));
   faces.faces.push(new THREE.Face3(47, 64, 65, undefined, undefined, 27));

   faces.faces.push(new THREE.Face3(37, 36, 56, undefined, undefined, 28));
   faces.faces.push(new THREE.Face3(37, 56, 57, undefined, undefined, 28));

   faces.faces.push(new THREE.Face3(49, 48, 66, undefined, undefined, 29));
   faces.faces.push(new THREE.Face3(49, 66, 67, undefined, undefined, 29));

   faces.faces.push(new THREE.Face3(41, 40, 60, undefined, undefined, 30));
   faces.faces.push(new THREE.Face3(41, 60, 61, undefined, undefined, 30));

   faces.faces.push(new THREE.Face3(69, 53, 52, undefined, undefined, 31));
   faces.faces.push(new THREE.Face3(69, 52, 68, undefined, undefined, 31));

   faces.faces.push(new THREE.Face3(57, 56, 70, undefined, undefined, 32));
   faces.faces.push(new THREE.Face3(57, 70, 71, undefined, undefined, 32));

   faces.faces.push(new THREE.Face3(45, 44, 62, undefined, undefined, 33));
   faces.faces.push(new THREE.Face3(45, 62, 63, undefined, undefined, 33));

   faces.faces.push(new THREE.Face3(38, 58, 59, undefined, undefined, 34));
   faces.faces.push(new THREE.Face3(38, 59, 39, undefined, undefined, 34));

   faces.faces.push(new THREE.Face3(39, 59, 72, undefined, undefined, 35));
   faces.faces.push(new THREE.Face3(39, 72, 73, undefined, undefined, 35));

   faces.faces.push(new THREE.Face3(61, 60, 76, undefined, undefined, 36));
   faces.faces.push(new THREE.Face3(61, 76, 77, undefined, undefined, 36));

   faces.faces.push(new THREE.Face3(81, 69, 68, undefined, undefined, 37));
   faces.faces.push(new THREE.Face3(81, 68, 80, undefined, undefined, 37));

   faces.faces.push(new THREE.Face3(63, 62, 78, undefined, undefined, 38));
   faces.faces.push(new THREE.Face3(63, 78, 79, undefined, undefined, 38));

   faces.faces.push(new THREE.Face3(58, 74, 75, undefined, undefined, 39));
   faces.faces.push(new THREE.Face3(58, 75, 59, undefined, undefined, 39));


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
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[6].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[5].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[14].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[28].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[29].vector);
   line.vertices.push(allpoints[28].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[29].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[21].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[25].vector);
   line.vertices.push(allpoints[24].vector);
   line.vertices.push(allpoints[42].vector);
   line.vertices.push(allpoints[43].vector);
   line.vertices.push(allpoints[25].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[23].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[30].vector);
   line.vertices.push(allpoints[50].vector);
   line.vertices.push(allpoints[51].vector);
   line.vertices.push(allpoints[31].vector);
   line.vertices.push(allpoints[30].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[27].vector);
   line.vertices.push(allpoints[26].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[27].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[35].vector);
   line.vertices.push(allpoints[34].vector);
   line.vertices.push(allpoints[54].vector);
   line.vertices.push(allpoints[55].vector);
   line.vertices.push(allpoints[35].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[32].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[33].vector);
   line.vertices.push(allpoints[32].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[47].vector);
   line.vertices.push(allpoints[46].vector);
   line.vertices.push(allpoints[64].vector);
   line.vertices.push(allpoints[65].vector);
   line.vertices.push(allpoints[47].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[37].vector);
   line.vertices.push(allpoints[36].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[37].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[49].vector);
   line.vertices.push(allpoints[48].vector);
   line.vertices.push(allpoints[66].vector);
   line.vertices.push(allpoints[67].vector);
   line.vertices.push(allpoints[49].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[41].vector);
   line.vertices.push(allpoints[40].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[41].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[53].vector);
   line.vertices.push(allpoints[52].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[69].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[57].vector);
   line.vertices.push(allpoints[56].vector);
   line.vertices.push(allpoints[70].vector);
   line.vertices.push(allpoints[71].vector);
   line.vertices.push(allpoints[57].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[45].vector);
   line.vertices.push(allpoints[44].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[45].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[38].vector);
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[38].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[39].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[72].vector);
   line.vertices.push(allpoints[73].vector);
   line.vertices.push(allpoints[39].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[61].vector);
   line.vertices.push(allpoints[60].vector);
   line.vertices.push(allpoints[76].vector);
   line.vertices.push(allpoints[77].vector);
   line.vertices.push(allpoints[61].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[81].vector);
   line.vertices.push(allpoints[69].vector);
   line.vertices.push(allpoints[68].vector);
   line.vertices.push(allpoints[80].vector);
   line.vertices.push(allpoints[81].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[63].vector);
   line.vertices.push(allpoints[62].vector);
   line.vertices.push(allpoints[78].vector);
   line.vertices.push(allpoints[79].vector);
   line.vertices.push(allpoints[63].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[58].vector);
   line.vertices.push(allpoints[74].vector);
   line.vertices.push(allpoints[75].vector);
   line.vertices.push(allpoints[59].vector);
   line.vertices.push(allpoints[58].vector);
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
