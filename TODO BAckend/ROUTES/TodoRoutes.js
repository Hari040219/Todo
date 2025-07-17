const  express = require('express');
const router = express.Router();        

const Todo = require('../MODELS/Todo'); 


router.get('/test',  (req, res) => {
    res.json({ message: 'The Todo api is working' });

});


router.post('/createtodo', async(req,res) =>{
    try{
        const {title, description} = req.body;
        const newTodo = new Todo({
            title,
            description
        })
        await newTodo.save();
        res.status(201).json({
            message:"Todo is created",
        })
    }
    
    catch(err){
        res.status(500).json({ message: 'Error creating todo' }); 
    };

})


router.get('/getalltodos' , async(req,res) =>{
    try{
        const todo = await Todo.find();
        res.status(200).json({
            todo,
            message:"Todos fetched successfully"
        })
    } 
    catch(error){
         res.status(500).json({ message: 'Error finding todo', error }); 
    }
})


router.get('/getatodos/:id' , async(req,res) =>{
    try{
        const todo = await Todo.findById(req.params.id);
        if(!todo){
            res.status(404),json({
                message:'Todo not found'
            })
        }
        res.status(200).json({
            todo,
            message:'Todo fetched successfully'
        })
    } 
    catch(error){
         res.status(500).json({ message: 'Error finding todo', error }); 
    }
})


router.put('/updatetodo/:id' , async(req,res) =>{
    try{
        const {title , description, completed} = req.body;
        const todo = await Todo.findByIdAndUpdate(req.params.id,{
            title,
            description,
            completed
        });


        if(!todo){
            res.status(404),json({
                message:'Todo not found'
            })
        }
        res.status(200).json({
            todo,
            message:'Todo updated successfully'
        })
    } 
    catch(error){
         res.status(500).json({ message: 'Error finding todo', error }); 
    }
})


router.delete('/deletetodo/:id' , async(req,res) =>{
    try{
        const todo = await Todo.findByIdAndDelete(req.params.id);

        if(!todo){
            res.status(404).json({
                message:'todo not found'
            })
        }
        res.status(200).json({
            message:'Todo deleted successfully'
        })

    }
    catch{eror}{
        res.status(500).json({ message: 'Error deleting todo', error }); 
    }
})


module.exports = router;
