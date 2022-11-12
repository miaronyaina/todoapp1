const Todo = require('../model/Todo');

//get all todos 
exports.getAllTodo = async(req,res)=>{
    try{
        let todos =await Todo.find();
        if(todos.length=== 0)
        return res.status(404).json({
            success: false,
            message: 'No Todo were found'
        });
        res.status(200).json({
            success: true,
            message: "Todo found",
            todos
        })
    }
    catch(error){
        res.status(500).json({
            success: false,
            message:'Internal Server Error',
            error: error.message,
        })

    }
}


//get single todos 
exports.getTodo = async(req, res)=> {
    try{
        let id = {_id:req.params.id};
        let todo = await Todo.findOne(id);
        if(!todo) return res.status(404).json({
            success: false,
            message: 'Todo not found',
        });
        res.status(200).json({
            success: true, 
            message: 'Todo found', 
            todo
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        });
    }
}
//create todo

exports.createTodo = async(req, res)=>{
    try{
        let todo = await req.body;
        let created= await Todo.create(todo);
        if(!created) return res.status(400).json({
            success: false,
            message: 'Todo creation failed',
        });
        return res.status(200).json({
            success: true,
            message: 'Todo created successfully',
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        })
    }
    
}

//update todos

exports.updateTodo = async(req, res) =>{
    try{
        let id = {_id: req.params.id};
        let todo = await req.body;
        let update = await Todo.findOneAndUpdate(id, todo, {new: true});
        if(!update) 
            return res.status(400).json({
                success: false,
                message: 'Todo not updated',
            });

            return res.status(200).json({
                success: true,
                message: 'Todo updated',
                todo: update,
            });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message,
        });
    }
};

//delete todos 

exports.deleteTodo = async (req, res) =>{
    try{
        let id = req.params.id;
        let deleted = await Todo.findOneAndDelete({_id: id});
        if(!deleted) 
            return res.status(400).json({
                success: false,
                message: 'Todo not deleted',
            });

            return res.status(200).json({
                success: true,
                message: 'Todo deleted successfully',
                todo: update,
            });
    }
catch(error){
    res.status(500).json({
        success: false,
        message: 'Internal Server Error',
        error: error.message,
    });
}
}
