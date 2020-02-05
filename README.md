# workout-tracker

## Summary 
This app is a practice in building Mongo/Mongoose database. It allows users to enter workouts with several differnent exercises within that workout.

## Link to site

## Site Gif
![Site](assets/workout-tracker.mp4)


## Technologies Used
- HTML - used to create elements on the DOM
- CSS - styles html elements on page
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages
- Jquery - jQuery is a JavaScript library designed to simplify building websites.
- Mongo - MongoDB is a cross-platform document-oriented database program.
- Mongoose - Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.
- Heroku - Cloud platform to host deployed websites.
- Express - Web application framework for Node.js. Designed for building web applications and APIs.
- Node JS - An open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.

## Code Snippet
```javascript
    app.put("/api/workouts/:id", (req, res) => {
        db.Exercise.create(req.body)
            .then((docs) => db.Workout.findOneAndUpdate(
                {_id: req.params.id},
                { 
                    $push: {
                        exercises: docs._id 
                    }, 
                    $inc: {
                        totalDuration: docs.duration
                    } 
                },
                { new: true })
            )
            .then(data => {
            res.json(data);
            }).catch(err => {
                res.json(err);
            });
      });

```
- The code snippit above is how we store a exercise workout then store its newly created database id to the workouts.


## Author Links
[LinkedIn](https://www.linkedin.com/in/ken-bains)
[GitHub](https://github.com/ken-Bains)
