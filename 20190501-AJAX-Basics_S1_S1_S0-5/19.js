	function handleTheResponse(data) {
		let jsp = document.getElementById("response").textContent = JSON.stringify(data,null,2);
	}

	const kiKscript = document.querySelector(`script[src*="kiK.js"]`);
	const kiKparent = kiKscript.parentNode;

	const zscript = document.createElement("script");
	zscript.src = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=handleTheResponse&tags=london&tagmode=any&format=json";
	kiKparent.insertBefore(zscript, kiKscript);

/*COLLECTED FROM ONLINE, AND THOUGHT I COULD STORE IT IN A .JS FILE BUT STILL NO GOOD AS I CANNOT SEEM TO USE THE DATA*/