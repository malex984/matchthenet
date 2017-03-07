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

   allpoints.push(new PMPoint(0.678598, 0.678598, 0.281085));
   allpoints.push(new PMPoint(0.678598, 0.281085, 0.678598));
   allpoints.push(new PMPoint(0.678598, 0.678598, -0.281085));
   allpoints.push(new PMPoint(0.281085, 0.678598, 0.678598));
   allpoints.push(new PMPoint(0.678598, 0.281085, -0.678598));
   allpoints.push(new PMPoint(0.678598, -0.281085, 0.678598));
   allpoints.push(new PMPoint(0.281085, 0.678598, -0.678598));
   allpoints.push(new PMPoint(0.678598, -0.678598, 0.281085));
   allpoints.push(new PMPoint(-0.281085, 0.678598, 0.678598));
   allpoints.push(new PMPoint(0.678598, -0.281085, -0.678598));
   allpoints.push(new PMPoint(0.281085, -0.678598, 0.678598));
   allpoints.push(new PMPoint(-0.678598, 0.678598, 0.281085));
   allpoints.push(new PMPoint(0.678598, -0.678598, -0.281085));
   allpoints.push(new PMPoint(-0.281085, 0.678598, -0.678598));
   allpoints.push(new PMPoint(-0.678598, 0.281085, 0.678598));
   allpoints.push(new PMPoint(0.281085, -0.678598, -0.678598));
   allpoints.push(new PMPoint(-0.678598, 0.678598, -0.281085));
   allpoints.push(new PMPoint(-0.281085, -0.678598, 0.678598));
   allpoints.push(new PMPoint(-0.678598, 0.281085, -0.678598));
   allpoints.push(new PMPoint(-0.678598, -0.281085, 0.678598));
   allpoints.push(new PMPoint(-0.281085, -0.678598, -0.678598));
   allpoints.push(new PMPoint(-0.678598, -0.678598, 0.281085));
   allpoints.push(new PMPoint(-0.678598, -0.281085, -0.678598));
   allpoints.push(new PMPoint(-0.678598, -0.678598, -0.281085));

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

   centroids.push(computeCentroid(faces));

   <!-- Facet style -->
   var faces_material = new THREE.MeshBasicMaterial ( {color: 0x0EAD69, transparent: true, opacity: 0.4, side: THREE.DoubleSide , depthWrite: false, depthTest: false, } );

   faces_material.side = THREE.DoubleSide;

   <!-- FACETS --> 
   faces.faces.push(new THREE.Face3(4, 6, 2, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(13, 6, 4, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 4, 9, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 9, 15, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 15, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 20, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(13, 22, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(9, 12, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(16, 13, 18, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(11, 16, 18, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 18, 22, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 22, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 23, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 21, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(11, 19, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(22, 20, 23, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(19, 21, 17, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(8, 11, 14, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(12, 7, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 10, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 17, 21, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 21, 23, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 23, 20, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(12, 20, 15, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(7, 5, 10, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(3, 8, 14, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 14, 19, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 19, 17, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 17, 10, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 10, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(3, 5, 1, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(0, 3, 1, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(2, 6, 13, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 13, 16, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 16, 11, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 11, 8, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 8, 3, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(2, 3, 0, undefined, undefined, 0));

   faces.faces.push(new THREE.Face3(4, 2, 0, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 0, 1, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 1, 5, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 5, 7, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 7, 12, undefined, undefined, 0));
   faces.faces.push(new THREE.Face3(4, 12, 9, undefined, undefined, 0));


   faces.computeFaceNormals();
   faces.computeVertexNormals();

   var object = new THREE.Mesh(faces, faces_material);
   obj.add(object);

   <!-- Edge style -->
   var line_material = new THREE.LineBasicMaterial ( {color: 0x000000, linewidth: polytopeLineWidth, } );

   line_material.side = THREE.DoubleSide;

   <!-- EDGES --> 
   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[4].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[13].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[9].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[16].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[18].vector);
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[11].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[22].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[22].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[19].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[8].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[21].vector);
   line.vertices.push(allpoints[23].vector);
   line.vertices.push(allpoints[20].vector);
   line.vertices.push(allpoints[15].vector);
   line.vertices.push(allpoints[12].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[7].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[14].vector);
   line.vertices.push(allpoints[19].vector);
   line.vertices.push(allpoints[17].vector);
   line.vertices.push(allpoints[10].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[3].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[0].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[6].vector);
   line.vertices.push(allpoints[13].vector);
   line.vertices.push(allpoints[16].vector);
   line.vertices.push(allpoints[11].vector);
   line.vertices.push(allpoints[8].vector);
   line.vertices.push(allpoints[3].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[2].vector);
   obj.add(new THREE.Line(line, line_material));

   var line = new THREE.Geometry();
   line.vertices.push(allpoints[4].vector);
   line.vertices.push(allpoints[2].vector);
   line.vertices.push(allpoints[0].vector);
   line.vertices.push(allpoints[1].vector);
   line.vertices.push(allpoints[5].vector);
   line.vertices.push(allpoints[7].vector);
   line.vertices.push(allpoints[12].vector);
   line.vertices.push(allpoints[9].vector);
   line.vertices.push(allpoints[4].vector);
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
