# STAR response

**Question:** Tell me about a time you faced a challenge while working on a project or with a team. What did you do, and what was the result?

## Situation
During my third year in my high school robotics' team, I was part of the programming team, the team that wrote the code for all parts of the system on the robot. This 130 pound robot had different parts, including the drivebase, shooting components, and a vision system.

## Task
The programming team was tasked to create a vision system that would track Apriltags, QR code like barcodes, to present ourselves with a live feed for the robot's position. We were able to create a working vision system, but the accuracy of that system was not information that we could continously use, since it kept flickering and giving abnormal values in position.

## Action
Instead of just using what we had, I decided to parse through the code multiple times, checking calulations, redoing configurations, looking through the library we were using to make sure we were using the correct functions, for multiple days. I didn't give up on this error and rather persisted through it, even though I really wanted to let this detail slide.

## Result
Because of my persistance, I was able to find out that we were tracking the timestamps in a different time measurement due to a stupid division/multiplication error of 60. By finding this error the programming team was able to create a well-functioning odometry system that helped the robot ensure that our autonomous features during the competition went smoothly.
