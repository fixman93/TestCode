Every exported function here should be used to connect to a running
weave app instance. The classes in here provide an insulation layer.

At this stage we are focusing on creating a minimum viable async bridge
api using global methods. Once we have achieved sufficient basic
functionality then we will wrap the methods in a facade class.

