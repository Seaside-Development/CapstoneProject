const asyncHandler = require('express-async-handler');

// @desc Get all Service
// @route GET /api/services
// @access Private
const getServices = asyncHandler (async (req, res) => {
    res.status(200).json({message: 'Get Services'});
})

// @desc Set Service
// @route POST /api/services
// @access Private
const setService = asyncHandler (async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field');
    } 
    res.status(200).json({message: 'Set Services'});
})

// @desc Update Service
// @route PUT /api/services/:id
// @access Private
const updateService = asyncHandler (async (req, res) => {
    res.status(200).json({message: `update Services ${req.params.id}`});
})

// @desc Delete Service
// @route DELETE /api/services/:id
// @access Private
const deleteService = asyncHandler (async (req, res) => {
    res.status(200).json({message: `Delete Services ${req.params.id}`});
})

module.exports = {
    getServices, setService, updateService, deleteService
}