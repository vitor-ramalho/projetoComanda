const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Routes

//Get ALL MY DATA BITCH!
router.get('/', async (req, res) => {
    try{

        const posts = await Post.find();
        res.json(posts)

    }catch(err){
        res.json({message:err});
    }
});


//TAKE THAT FUCKING DATA
router.post('/', async (req, res) =>{
    //sending data to database
    //Instanciando objeto POSTS - (MESA)
    const post = new Post({
    // dir ../models/Post
       title: req.body.title,
       description: req.body.description 
    });

    try{
        const savedPost = await post.save()
        res.json(savedPost);
        }catch(err){
        res.json({message: err})
    }
   
});

//GIVE JUST THE DATA THAT I ASKED!
router.get('/:postId', async (req, res)=>{
    //params == localhost:3000/posts/ThisIsTheParam
    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
        }catch (err){
    res.json({message: err});
    }
});

//DELETE DATA
router.delete('/:postId', async (req,res) =>{
    try{
    const removedPost = await Post.deleteOne({_id: req.params.postId});
    res.json(removedPost);
        }catch (err){
    res.json({message: err});
    }
});


//UPDATE A POST
router.patch('/:postId', async (req, res) =>{
    try{
    const updatePost = await Post.updateOne(
        {_id: req.params.postId}, 
        {$set: {title: req.body.title} }
        );
        res.json(updatePost);
    }catch (err){
        res.json({message: err});
    }
})


module.exports = router;