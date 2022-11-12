const router = require('express').Router();
const controller = require('../controller/todoController')

router.get("/",controller.getAllTodos);
router.get('/:id',controller.getTodo);
router.post('/', controller.createTodo);
router.put('/:id',controller.updateTodo);
router.delete('/:id', controller.deleteTodo);

module.exports = router;
