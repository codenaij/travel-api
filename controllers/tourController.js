const fs = require("fs");

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.checkID = (req, res, next, val) => {
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }
    next()
}

exports.checkBody = (req, res, next) => {
    if (!req.body.name || !req.body.price) {
        return res.status(400).json({
            status: 'fail',
            message: 'Missing name or price'
        })
    }
    next()
}

exports.getAllTours = (req, res) => {
    res.status(200).json({
        status: "success",
        results: tours.length,
        data: {
            tours: tours,
        },
    });
};

exports.getTour = (req, res) => {
    res.send("Get Tour");
};

exports.createTour = (req, res) => {
    console.log(req.body);
    res.send("done");
};

exports.updateTour = (req, res) => {
    res.send("Update Tour");
};

exports.deleteTour = (req, res) => {
    res.send("Delete Tour");
};
