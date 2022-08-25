const PublisherModel= require("../models/NewPublisherModel")

const createPublisher = async function (req, res) {
    let Publisher = req.body
    let PublisherCreated = await PublisherModel.create(Publisher)
    res.send({data: PublisherCreated})
}

const getPublishersData= async function (req, res) {
    let Publishers = await PublisherModel.find()
    res.send({data: Publishers})
}

module.exports.getPublishersData = getPublishersData
module.exports.createPublisher = createPublisher