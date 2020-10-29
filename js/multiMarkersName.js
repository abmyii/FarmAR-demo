// Detect marker found and lost
AFRAME.registerComponent('markerhandler', {
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
