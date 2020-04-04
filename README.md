# MIRROR-MIRROR.

Summary: 
Mens outfit prototyping website, using THREE.js to implement 3D viewing of outifts. 

Technologies Used: 
Javascript, CSS3, HTML5

Project Difficulties: 

Difficulties in being able to rotate camera around 3D model.

Changing clothes on 3D model without instancing multiple 3D objects.

My Solution: 

Learning from different examples on the THREE.js documentation page, I implemented a Camera movement system that can rotate freely,except for going below the 3D. I chose this approach as i didn't want the user to be able to see the underside of the model.

In order to chnage the clothes on the 3D model effectively, I removed the previous article of clothing and instantated a new one based on the color chosen by the user.

Notable Features:
3D model with the ability to change clothes realtime.
Dynamic Outfit cards that have new outfits every time page reloads.
