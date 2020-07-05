const newsCtrl = {};

const newModel = require('../models/new');

newsCtrl.getNews = async (req, res) => {   
    const news = await newModel.find();
    res.json(news);
};

newsCtrl.createNew = async (req, res) => {
    const { title, description, content, date} = req.body;
    const newNew =  new newModel({
        title: title,
        description: description,
        content: content,
        date: date
    })
    console.log(newNew);
    await newNew.save();
    res.json({message:'New saved'});
}

newsCtrl.deleteNew = async (req, res) => {
    await newModel.findByIdAndDelete(req.params.id);
    res.json({message: 'New deleted'});
};

newsCtrl.updateNew = async (req, res) => {
    const {title, description, content, date} = req.body;
    await newModel.findOneAndUpdate(req.params.id, {
        title: title,
        description: description,
        content: content,
        date: date
    })
    res.json({message:'New updated'});
}

newsCtrl.getNew = async (req, res) => {    
    const newGot = await newModel.findById(req.params.id);
    res.json(newGot);
};

module.exports = newsCtrl;



