//Multi Markers WebAR-AR.js and Aframe - Playing the Archive - Connected Environment CASA-UCL

//Global Variable
var markersURLArray=[];
var markersNameArray=[];

AFRAME.registerComponent('markers_start',{
	init:function(){
		var sceneEl = document.querySelector('a-scene');
		var markerEl = document.createElement('a-marker');
		markerEl.setAttribute('type','pattern');
		markerEl.setAttribute('url',markersURLArray[k]);
		markerEl.setAttribute('id',markersNameArray[k]);

		markerEl.setAttribute('registerevents','');
		sceneEl.appendChild(markerEl);

		// Adding text to each marker
		var textEl = document.createElement('a-entity');

		textEl.setAttribute('id','text');
		textEl.setAttribute('text',{color: 'red', align: 'center', value: 'Temperature: ' + (Math.floor(Math.random() * 10)+10), width: '5.5'});
		textEl.object3D.position.set(2, 0.7, 0);
		textEl.object3D.rotation.set(-90, 0, 0);

		markerEl.appendChild(textEl);
	}
});


//Detect marker found and lost
AFRAME.registerComponent('registerevents', {
		init: function () {
			const marker = this.el;

			marker.addEventListener("markerFound", ()=> {
				var markerId = marker.id;
				console.log('Marker Found: ', markerId);

				document.getElementById('cursor').setAttribute(
					'material', 'color', 'green'
				);
			});

			marker.addEventListener("markerLost",() =>{
				var markerId = marker.id;
				console.log('Marker Lost: ', markerId);

				document.getElementById('cursor').setAttribute(
					'material', 'color', 'red'
				);
			});
		},
	});
