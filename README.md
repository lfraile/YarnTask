# YarnTask

Based on the existing *npm* task, I created a new task to execute yarn to install packages in the build.

It also hasa demand on the task.json requiring yarn, so it won't work on hosted agents, althought it would be a little non-sense, as one of the interesting features in Yarn is the local cache to make package installation and download faster, which will have no effect in a newly provisioned agent per each build.
The usage is pretty straight forward, working as the npm task:

